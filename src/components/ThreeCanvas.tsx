import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  activeTheme?: 'cyan' | 'purple' | 'emerald' | 'amber';
  onThemeChange?: (theme: 'cyan' | 'purple' | 'emerald' | 'amber') => void;
}

const THEME_COLORS = {
  cyan: { primary: 0x38bdf8, secondary: 0x0284c7, emissive: 0x0369a1, glow: '#38bdf8' },
  purple: { primary: 0xc084fc, secondary: 0x9333ea, emissive: 0x7e22ce, glow: '#c084fc' },
  emerald: { primary: 0x34d399, secondary: 0x059669, emissive: 0x047857, glow: '#34d399' },
  amber: { primary: 0xfbbf24, secondary: 0xd97706, emissive: 0xb45309, glow: '#fbbf24' },
};

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  activeTheme = 'cyan',
  onThemeChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTheme, setCurrentTheme] = useState<'cyan' | 'purple' | 'emerald' | 'amber'>(activeTheme);
  const [prevActiveTheme, setPrevActiveTheme] = useState(activeTheme);

  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [particleSpeed, setParticleSpeed] = useState<'normal' | 'boost'>('normal');
  const sceneRef = useRef<THREE.Scene | null>(null);

  if (activeTheme !== prevActiveTheme) {
    setPrevActiveTheme(activeTheme);
    setCurrentTheme(activeTheme);
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const theme = THEME_COLORS[currentTheme];

    // 1. Outer Faceted Wireframe / Polyhedron
    const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: theme.primary,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 2. Inner Glowing Solid Core
    const innerGeo = new THREE.OctahedronGeometry(1.0, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: theme.secondary,
      emissive: theme.emissive,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.9,
      wireframe: wireframeMode,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Orbiting Gyroscope Ring
    const ringGeo = new THREE.TorusGeometry(2.35, 0.025, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: theme.primary,
      emissive: theme.secondary,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 1.0,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // Second inclined ring
    const ring2Geo = new THREE.TorusGeometry(2.55, 0.015, 16, 100);
    const ring2Mesh = new THREE.Mesh(ring2Geo, ringMat);
    ring2Mesh.rotation.y = Math.PI / 4;
    ring2Mesh.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2Mesh);

    // 4. Particle Constellation
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;

      particleVelocities[i] = (Math.random() - 0.5) * 0.002;
      particleVelocities[i + 1] = (Math.random() - 0.5) * 0.002;
      particleVelocities[i + 2] = (Math.random() - 0.5) * 0.002;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: theme.primary,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(theme.primary, 1.5);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(theme.primary, 2.5, 10);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);


    // Mouse movement interaction with lerping
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;

      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.8;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp rotation towards mouse
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Continuous autonomous rotation
      outerMesh.rotation.y += 0.3 * delta;
      outerMesh.rotation.x += 0.15 * delta;

      innerMesh.rotation.y -= 0.45 * delta;
      innerMesh.rotation.z += 0.25 * delta;

      ringMesh.rotation.z += 0.2 * delta;
      ring2Mesh.rotation.z -= 0.25 * delta;

      // Pulse breathing scale on the core
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Particle subtle drifting
      const positions = particleGeo.attributes.position.array as Float32Array;
      const speedMult = particleSpeed === 'boost' ? 2.5 : 1;

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += particleVelocities[i] * speedMult;
        positions[i + 1] += particleVelocities[i + 1] * speedMult;
        positions[i + 2] += particleVelocities[i + 2] * speedMult;

        // Boundary wrap
        if (Math.abs(positions[i]) > 6) positions[i] *= -0.95;
        if (Math.abs(positions[i + 1]) > 6) positions[i + 1] *= -0.95;
        if (Math.abs(positions[i + 2]) > 6) positions[i + 2] *= -0.95;
      }
      particleGeo.attributes.position.needsUpdate = true;

      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      innerGeo.dispose();
      ringGeo.dispose();
      ring2Geo.dispose();
      particleGeo.dispose();
      outerMat.dispose();
      innerMat.dispose();
      ringMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [currentTheme, wireframeMode, particleSpeed]);

  const handleSelectTheme = (theme: 'cyan' | 'purple' | 'emerald' | 'amber') => {
    setCurrentTheme(theme);
    if (onThemeChange) {
      onThemeChange(theme);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[560px] flex items-center justify-center">
      {/* 3D Canvas WebGL Container */}
      <div
        ref={containerRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"
        title="Interactive 3D Engine: Drag or move mouse to interact"
      />

      {/* Floating 3D Control HUD Badge */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-20 flex flex-wrap items-center justify-between sm:justify-end gap-2.5 p-2.5 rounded-xl glass-panel text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
            3D WebGL Engine
          </span>
        </div>

        {/* Theme Color Selector */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-700/60">
          <span className="text-[10px] text-slate-400 uppercase font-mono mr-1">Hue</span>
          <button
            type="button"
            onClick={() => handleSelectTheme('cyan')}
            className={`w-4 h-4 rounded-full bg-cyan-400 transition-transform ${
              currentTheme === 'cyan' ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            title="Cyber Cyan"
          />
          <button
            type="button"
            onClick={() => handleSelectTheme('purple')}
            className={`w-4 h-4 rounded-full bg-purple-400 transition-transform ${
              currentTheme === 'purple' ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            title="Nebula Violet"
          />
          <button
            type="button"
            onClick={() => handleSelectTheme('emerald')}
            className={`w-4 h-4 rounded-full bg-emerald-400 transition-transform ${
              currentTheme === 'emerald' ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            title="Matrix Emerald"
          />
          <button
            type="button"
            onClick={() => handleSelectTheme('amber')}
            className={`w-4 h-4 rounded-full bg-amber-400 transition-transform ${
              currentTheme === 'amber' ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            title="Solar Gold"
          />
        </div>

        {/* Wireframe toggle */}
        <button
          type="button"
          onClick={() => setWireframeMode(!wireframeMode)}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors border ${
            wireframeMode
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
              : 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-700/80'
          }`}
        >
          {wireframeMode ? 'Mesh: Wire' : 'Mesh: Solid'}
        </button>

        {/* Warp speed toggle */}
        <button
          type="button"
          onClick={() => setParticleSpeed(particleSpeed === 'normal' ? 'boost' : 'normal')}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors border ${
            particleSpeed === 'boost'
              ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
              : 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-700/80'
          }`}
        >
          {particleSpeed === 'boost' ? '⚡ Warp 2x' : 'Speed 1x'}
        </button>
      </div>
    </div>
  );
};
