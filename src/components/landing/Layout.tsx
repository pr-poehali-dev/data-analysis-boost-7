import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <div className="fixed top-0 left-0 z-30 p-8 md:p-12 flex flex-col gap-0.5">
        <span className="text-white font-light tracking-[0.2em] uppercase text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Silk Route
        </span>
        <span className="text-[#C9A96E] font-light tracking-[0.35em] uppercase text-xs">
          Vault
        </span>
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}