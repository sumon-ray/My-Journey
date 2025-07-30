"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere } from "@react-three/drei"
import { gsap } from "gsap"

function Blob({ mousePosition }) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005
      mesh.current.rotation.y += 0.005

      // React to mouse position
      if (mousePosition.current) {
        const { x, y } = mousePosition.current
        gsap.to(mesh.current.position, {
          x: (x / window.innerWidth - 0.5) * 2,
          y: -(y / window.innerHeight - 0.5) * 2,
          duration: 0.5,
          ease: "power2.out",
        })
      }
    }
  })

  return (
    <Sphere
      ref={mesh}
      args={[1, 64, 64]}
      scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <MeshDistortMaterial
        color={hovered ? "#8B5CF6" : "#06B6D4"} // Purple on hover, Cyan otherwise
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.5}
        metalness={0.8}
      />
    </Sphere>
  )
}

export default function Floating3DObject() {
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Blob mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
