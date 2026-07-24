"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Info, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/utils/mock";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [activeStatus, setActiveStatus] = useState("Published");

  const filters = ["All Work", "Web", "iOS", "Android", "React Native"];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All Work" || project.category === activeFilter;
    const matchesStatus =
      activeStatus === "Published"
        ? project.status === "Live"
        : project.status === "In Dev";
    return matchesFilter && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-12">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mb-4">
              Projects Gallery
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A curated collection of mobile-first engineering challenges.
              Focused on performance, scalability, and clean UI.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full border">
            <Info size={14} />
            <span>Last updated Jan 2026</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 border-b pb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter ? "" : ""
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Status:
            </span>
            <div className="bg-muted p-1 rounded-xl flex gap-1">
              <Button
                size="sm"
                variant={activeStatus === "Published" ? "secondary" : "ghost"}
                className={activeStatus === "Published" ? "shadow-sm" : ""}
                onClick={() => setActiveStatus("Published")}
              >
                Published
              </Button>
              <Button
                size="sm"
                variant={activeStatus === "In-Dev" ? "secondary" : "ghost"}
                onClick={() => setActiveStatus("In-Dev")}
              >
                In-Dev
              </Button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={project.link ? project.link : "#"}>
              <Card className="group overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full pt-0">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <Image
                    src={project.images?.cover || "/images/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={
                        project.status === "Live" ? "default" : "secondary"
                      }
                      className={
                        project.status === "Live"
                          ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-primary/10 text-primary hover:bg-primary/10 dark:bg-primary/20 dark:text-primary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    className="w-full transition-all"
                    variant="secondary"
                  >
                    Case Study <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-24 bg-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to build your next mobile solution?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              I&apos;m currently accepting new projects and consulting
              opportunities. Let&apos;s discuss how we can work together to
              create something exceptional.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={"/#contact"}>
                <Button size="lg" className="rounded-full px-8 py-6 text-base shadow-lg">
                  Get In Touch <Mail className="ml-2" size={18} />
                </Button>
              </Link>
              {/* <Button variant="outline" className="px-8 py-6 text-base">
                Download CV <Download className="ml-2" size={18} />
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
