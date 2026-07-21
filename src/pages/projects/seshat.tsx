import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="min-h-screen">
      <main className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-10">
        <div className="flex flex-col w-full max-w-240 flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 px-4 pb-8">
            <Link
              href="/projects"
              className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary"
            >
              Projects
            </Link>
            <span className="text-muted-foreground text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-foreground text-sm font-medium leading-normal">
              Seshat
            </span>
          </div>

          {/* Profile Header */}
          <div className="flex p-4 mb-8">
            <div className="flex w-full flex-col gap-7 sm:flex-row sm:justify-between sm:items-center">
              <div className="flex gap-5 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-24 shrink-0 bg-gray-200"
                  style={{
                    backgroundImage: 'url("/images/seshat-logo.png")',
                  }}
                  role="img"
                  aria-label="Seshat app logo"
                />
                <div className="flex flex-col">
                  <h1 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em]">
                    Seshat: Advanced Narrative Engine
                  </h1>
                  <p className="text-muted-foreground text-base font-normal leading-normal mt-1">
                    A sophisticated, local-first world-building tool and narrative engine designed for novelists, game designers, and world-builders.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto shrink-0">
                {/* Add a link to live site here if needed in the future */}
              </div>
            </div>
          </div>

          <Separator className="h-0.5 bg-gray-100 mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Project Overview Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      The Vision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Seshat provides a deeply integrated environment for managing complex lore, character psychology, interconnected timelines, and manuscript drafting. Built as a highly performant Single-Page Application (SPA), it operates with zero latency by keeping all state in the browser while ensuring robust synchronization with a Git-backed cloud storage system.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Local-First & Offline Resilience
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To guarantee zero-latency interactions and massive offline capabilities, Seshat utilizes Legend State coupled with IndexedDB. By bypassing standard 5MB localStorage limits, the application can cache gigabytes of project data locally. Users experience instant Optimistic UI updates, and can write entire novels without an internet connection.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground">
                      Git-Backed Cloud Sync Engine
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The backend operates entirely on Cloudflare Pages Functions, utilizing the GitHub Trees and Blobs API as a NoSQL document database. Instead of uploading massive payloads, Seshat calculates atomic Git commits via Delta Synchronization. If a user edits on multiple devices, Seshat performs a deep JSON diff and presents a Git-style interactive merge modal, protecting against data loss.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Screenshots Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle>Screenshots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="rounded-lg w-full bg-gray-100 flex items-center justify-center border aspect-video relative overflow-hidden">
                        <Image
                          src="/images/seshat/editor.png"
                          alt="Context-Aware Prose Editor"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground text-center">Context-Aware Editor</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="rounded-lg w-full bg-gray-100 flex items-center justify-center border aspect-video relative overflow-hidden">
                        <Image
                          src="/images/seshat/knowledge-graph.png"
                          alt="Interactive Lore Web"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground text-center">Interactive Lore Web</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1 flex flex-col">
              {/* My Role Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">My Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Lead Architect and Developer. Designed the local-first architecture, implemented the Git-backed sync engine using Cloudflare Workers, and built the rich-text editor and interactive knowledge graphs.
                  </p>
                </CardContent>
              </Card>

              {/* Key Features Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">Core Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                    {keyFeatures.map((feature, index) => (
                      <li key={index} className="leading-snug">{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Technologies Used Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="flex items-center gap-2 px-3 py-1.5"
                      >
                        <div className="w-5 h-5 relative">
                           <Image
                             src={tech.logo}
                             alt={`${tech.name} logo`}
                             fill
                             className="object-contain"
                           />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UI Extendsion Used Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">UX/UI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {uiTechnologies.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="flex items-center gap-2 px-3 py-1.5"
                      >
                        <div className="w-5 h-5 relative">
                           <Image
                             src={tech.logo}
                             alt={`${tech.name} logo`}
                             fill
                             className="object-contain"
                           />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tool Used Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">State & Routing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {tooling.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="flex items-center gap-2 px-3 py-1.5"
                      >
                        <div className="w-5 h-5 relative">
                           <Image
                             src={tech.logo}
                             alt={`${tech.name} logo`}
                             fill
                             className="object-contain"
                           />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore More Projects
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Check out other applications I've built using modern web technologies.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
