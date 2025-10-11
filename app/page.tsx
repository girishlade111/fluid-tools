"use client"

import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #2d4663 0%, #1a2b42 50%, #0a1628 100%)",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Enhanced Space Animation Video Background */}
      <div className="fixed inset-0 -z-5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          style={{
            filter: "brightness(0.8) contrast(1.2) saturate(1.1)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Space-BjlPAfapX976c44BSkWOSKcQOf4YJZ.mp4" type="video/mp4" />
        </video>

        {/* Dynamic overlay that pulses with the animation */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(45, 70, 99, 0.2) 0%, rgba(26, 43, 66, 0.4) 50%, rgba(10, 22, 40, 0.6) 100%)",
            animationDuration: "4s",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-semibold text-xl">
            FlowBuilder
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Product
            </Link>
            <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Templates
            </Link>
            <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Use Cases
            </Link>
            <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Docs
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Login
            </Link>
            <Button
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
              size="sm"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-white/90 hover:text-white text-sm font-medium">
                Product
              </Link>
              <Link href="#" className="text-white/90 hover:text-white text-sm font-medium">
                Templates
              </Link>
              <Link href="#" className="text-white/90 hover:text-white text-sm font-medium">
                Use Cases
              </Link>
              <Link href="#" className="text-white/90 hover:text-white text-sm font-medium">
                Pricing
              </Link>
              <Link href="#" className="text-white/90 hover:text-white text-sm font-medium">
                Docs
              </Link>
              <hr className="border-white/20" />
              <Link href="#" className="text-white/90 hover:text-white text-sm font-medium">
                Login
              </Link>
              <Button
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm w-full justify-center"
                size="sm"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            {/* Hero Content - Left Aligned */}
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Main Headline with enhanced styling */}
              <h1
                className="text-white font-light leading-tight tracking-tight mb-6 relative"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                Build internal tools that actually flow
              </h1>

              {/* Supporting Text */}
              <p
                className="text-white/80 mb-8 max-w-xl"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: "1.5",
                }}
              >
                FlowBuilder lets teams design lightweight internal apps and workflows with zero friction. Fast to
                launch. Easy to evolve. Built to feel invisible.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-500/90 hover:bg-blue-500 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 px-8 py-3 text-base font-medium"
                >
                  Try FlowBuilder Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 px-8 py-3 text-base font-medium"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle glow effects */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </div>
  )
}
