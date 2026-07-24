import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const technologies = [
  {
    name: "React Native",
    logo: "https://cdn.simpleicons.org/react",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "Android",
    logo: "https://cdn.simpleicons.org/android",
  },
  {
    name: "iOS",
    logo: "https://cdn.simpleicons.org/apple",
  },
  {
    name: "React Navigation",
    logo: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Zustand",
    logo: "https://cdn.simpleicons.org/react",
  },
  {
    name: "React Query",
    logo: "https://cdn.simpleicons.org/reactquery",
  },
  {
    name: "Axios",
    logo: "https://cdn.simpleicons.org/axios",
  },
  {
    name: "Firebase",
    logo: "https://cdn.simpleicons.org/firebase",
  },
  {
    name: "MMKV Storage",
    logo: "https://cdn.simpleicons.org/android",
  },
  {
    name: "NASA Open APIs",
    logo: "https://cdn.simpleicons.org/nasa",
  },
  {
    name: "The Space Dev API",
    logo: "/images/the-space-dev-logo.png",
  },
];

const uiTechnologies = [
  {
    name: "Reanimated",
    logo: "https://swmansion.com/assets/logo.svg",
  },
  {
    name: "Skia",
    logo: "https://cdn.simpleicons.org/shopify",
  },
  {
    name: "FlashList",
    logo: "https://cdn.simpleicons.org/shopify",
  },
  {
    name: "FastImage",
    logo: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Unistyles",
    logo: "https://www.unistyl.es/unicorn.svg",
  },
];

const tooling = [
  {
    name: "Jest",
    logo: "https://cdn.simpleicons.org/jest",
  },
  {
    name: "ESLint",
    logo: "https://cdn.simpleicons.org/eslint",
  },
  {
    name: "Prettier",
    logo: "https://cdn.simpleicons.org/prettier",
  },
  {
    name: "Sentry",
    logo: "https://cdn.simpleicons.org/sentry",
  },
];

const keyFeatures = [
  "Real-time space updates",
  "NASA image browsing",
  "Asteroid tracking",
  "Earth events",
  "Personalized settings",
];

export default function StellarScope() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
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
              src="/images/stellar-scope-logo.png" 
              alt="Stellar Scope Logo" 
              width={120} 
              height={120} 
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
          <Badge variant="secondary" className="mb-6 font-mono tracking-widest uppercase bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 text-xs">
            React Native • Live
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6">
            Stellar Scope
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Explore space events, daily news, and stunning imagery from NASA, right in your pocket.
          </p>
          <Link href="https://play.google.com/store/apps/details?id=com.stellarscope" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-primary/25 hover:scale-105 transition-transform active:scale-95">
              View on Google Play
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
                The Challenge
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-2xl text-foreground font-medium italic leading-snug border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl">
                "Information about space is scattered, complex, and highly technical. How can we make it accessible to everyone?"
              </p>
              <p>
                Space events, rocket launches, and scientific updates can be difficult to follow, especially for people who are curious about space but not experts. Users often struggle to find reliable, up-to-date information in a format that is easy to understand and enjoyable to explore.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground md:sticky md:top-24">
                The Solution
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                StellarScope brings space information together in one simple, easy-to-use application. It presents real space events, launch updates, and NASA imagery in a clean, visual format with clear explanations.
              </p>
              <p>
                By focusing on readability, smooth browsing, and everyday language, we made learning about space accessible to everyone—whether you're casually curious or deeply interested in the cosmos.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground md:sticky md:top-24">
                The Objective
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With short, easy-to-read updates, StellarScope helps you stay informed about rocket launches, asteroids near Earth, and space missions from around the world.
              </p>
              <p>
                Browse beautiful space photos, read clear explanations, and discover the stories behind each event. See what's happening above our planet, from natural events observed from space to solar activity that can affect Earth. Search for topics you care about, save your favorite content, and share exciting discoveries with friends. 
              </p>
              <p>
                StellarScope runs smoothly even on slower connections and lets you customize the app with light or dark mode, your preferred date format, and measurement units.
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
            "splash.png",
            ...Array.from({ length: 14 }).map((_, i) => `screenshot_${i + 1}.png`)
          ].map((img, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 w-[260px] md:w-[320px] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
            >
              <Image
                src={`/images/stellar_scope/${img}`}
                alt={`Stellar Scope screenshot ${index + 1}`}
                width={400}
                height={800}
                className="rounded-[2rem] w-full object-cover aspect-[9/19] border-4 border-zinc-800 shadow-2xl shadow-black/50 bg-zinc-900"
              />
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
                  <li key={i} className="flex items-center text-lg text-muted-foreground">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0" />
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
