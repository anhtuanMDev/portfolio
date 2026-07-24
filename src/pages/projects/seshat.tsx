import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript",
  },
  {
    name: "Vite",
    logo: "https://cdn.simpleicons.org/vite",
  },
  {
    name: "Cloudflare Pages",
    logo: "https://cdn.simpleicons.org/cloudflare",
  },
  {
    name: "GitHub API",
    logo: "https://cdn.simpleicons.org/github",
  },
  {
    name: "IndexedDB",
    logo: "https://cdn.simpleicons.org/databricks", 
  },
];

const uiTechnologies = [
  {
    name: "Material UI",
    logo: "https://cdn.simpleicons.org/mui",
  },
  {
    name: "Tiptap",
    logo: "https://cdn.simpleicons.org/editorjs", 
  },
  {
    name: "React Flow",
    logo: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Anime.js",
    logo: "https://cdn.simpleicons.org/javascript",
  },
];

const tooling = [
  {
    name: "React Router",
    logo: "https://cdn.simpleicons.org/reactrouter",
  },
  {
    name: "Legend State",
    logo: "https://cdn.simpleicons.org/react", 
  },
];

const keyFeatures = [
  "Context-Aware Prose Editor with Dynamic Mentions",
  "Continuity & Foreshadow Tracking",
  "Interactive Lore Web (Knowledge Graph) with Timeline Slider",
  "AI Narrative Oracle with Expert Personas",
  "Deterministic Combat Simulator",
  "Zero-latency Local-First Architecture",
  "Git-Backed Cloud Sync with Smart Conflict Resolution",
];

export default function Seshat() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Immersive Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
          <Link href="/projects" className="absolute left-6 top-0 text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
            <ChevronLeft size={16} /> Back to Projects
          </Link>

          <div className="mb-8 mt-12 md:mt-0">
            <Image 
              src="/images/seshat-logo.png" 
              alt="Seshat Logo" 
              width={120} 
              height={120} 
              className="rounded-3xl shadow-2xl border border-white/10 bg-white dark:bg-zinc-800 p-2"
            />
          </div>
          <Badge variant="secondary" className="mb-6 font-mono tracking-widest uppercase bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 text-xs">
            Web • In Dev
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6">
            Seshat Narrative Engine
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            A sophisticated, local-first world-building tool and narrative engine designed for novelists, game designers, and world-builders.
          </p>
          <Link href="https://github.com/anhtuan03" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-primary/25 hover:scale-105 transition-transform active:scale-95">
              View Project Details
            </Button>
          </Link>
        </div>
      </section>

      {/* 2. Editorial Challenge & Solution */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground md:sticky md:top-24">
                The Vision
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-2xl text-foreground font-medium italic leading-snug border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl">
                "Writers and game designers need a deeply integrated environment for managing complex lore, timelines, and manuscripts without friction."
              </p>
              <p>
                Seshat provides a deeply integrated environment for managing complex lore, character psychology, interconnected timelines, and manuscript drafting. Built as a highly performant Single-Page Application (SPA), it operates with zero latency by keeping all state in the browser while ensuring robust synchronization with a Git-backed cloud storage system.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground md:sticky md:top-24">
                Local-First & Offline Resilience
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                To guarantee zero-latency interactions and massive offline capabilities, Seshat utilizes Legend State coupled with IndexedDB. By bypassing standard 5MB localStorage limits, the application can cache gigabytes of project data locally.
              </p>
              <p>
                Users experience instant Optimistic UI updates, and can write entire novels without an internet connection.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground md:sticky md:top-24">
                Git-Backed Cloud Sync
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The backend operates entirely on Cloudflare Pages Functions, utilizing the GitHub Trees and Blobs API as a NoSQL document database. Instead of uploading massive payloads, Seshat calculates atomic Git commits via Delta Synchronization.
              </p>
              <p>
                If a user edits on multiple devices, Seshat performs a deep JSON diff and presents a Git-style interactive merge modal, protecting against data loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Dark-Mode Gallery */}
      <section className="py-32 bg-[#0A0A0A] text-zinc-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Look Inside</h2>
            <p className="text-zinc-400 text-lg">Swipe to explore the interface.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full h-12 w-12 border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full h-12 w-12 border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-6 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[
            { src: "editor.png", label: "Context-Aware Editor" },
            { src: "knowledge-graph.png", label: "Interactive Lore Web" }
          ].map((img, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 w-[85vw] md:w-[800px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
            >
              <Image
                src={`/images/seshat/${img.src}`}
                alt={img.label}
                width={1200}
                height={800}
                className="rounded-[1rem] w-full object-cover aspect-video border-2 border-zinc-800 shadow-2xl shadow-black/50 bg-zinc-900"
              />
              <p className="mt-6 text-center text-zinc-400 font-medium text-lg tracking-wide">{img.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Unified Under the Hood (Bento Grid) */}
      <section className="py-32 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Under the Hood</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features List */}
            <div className="bg-background rounded-3xl p-10 shadow-sm border border-border/50 hover:border-primary/20 transition-colors flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">
                Key Features
              </h3>
              <ul className="space-y-6">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start text-lg text-muted-foreground">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Grid */}
            <div className="flex flex-col gap-8">
              <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-colors flex-1">
                <h3 className="text-xl font-bold mb-6">Core Tech Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/30 text-sm font-medium text-foreground">
                      <Image src={tech.logo} alt={tech.name} width={16} height={16} className="w-4 h-4 object-contain" />
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-colors flex-1">
                <h3 className="text-xl font-bold mb-6">UI & Tooling</h3>
                <div className="flex flex-wrap gap-2.5">
                  {[...uiTechnologies, ...tooling].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/30 text-sm font-medium text-foreground">
                      <Image src={tech.logo} alt={tech.name} width={16} height={16} className="w-4 h-4 object-contain" />
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
