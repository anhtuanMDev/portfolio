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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { projects } from "@/utils/mock";
import { Github, Linkedin, Mail, MapPin, Send, Database, Smartphone, Palette, Code, Server, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = date
      .toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .replace(", ", " at ");

    setFormData({ name: "", email: "", subject: "", message: "" });
    toast("Message sent!", {
      description: <span className="text-gray-400">{formattedDate}</span>,
      duration: 2000,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <title>Alex Vin Portfolio</title>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section id="home" className="py-32 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[80vh]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <Image
                src="/images/avatar.jpg"
                alt="avatar"
                width={160}
                height={160}
                className="relative rounded-full size-[160px] object-cover mx-auto border-4 border-background ring-1 ring-border/50"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Hi, I&#39;m <span className="text-primary">Alex Vin</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Mobile Developer passionate about creating beautiful, functional apps that solve real-world problems on iOS and Android.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 text-base">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                My Skills & Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A brief overview of my technical capabilities and the tools I use to bring ideas to life.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 p-8 bg-card border-border hover:border-primary/50 transition-colors">
                <CardTitle className="text-2xl mb-6">Core Technologies</CardTitle>
                <CardContent className="p-0 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <Smartphone className="mr-3 h-5 w-5 text-primary" /> React Native
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Smartphone className="mr-3 h-5 w-5 text-primary" /> Android (Kotlin)
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Code className="mr-3 h-5 w-5 text-primary" /> TypeScript
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Code className="mr-3 h-5 w-5 text-primary" /> HTML5 & CSS3
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
                <CardTitle className="text-2xl mb-6">Frameworks</CardTitle>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Store className="mr-3 h-5 w-5 text-primary" /> Redux & Zustand
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Server className="mr-3 h-5 w-5 text-primary" /> NodeJS & Express
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-3 p-8 bg-card border-border hover:border-primary/50 transition-colors">
                <CardTitle className="text-2xl mb-6">Tools & Platforms</CardTitle>
                <CardContent className="p-0 flex flex-wrap gap-6">
                  <div className="flex items-center text-muted-foreground">
                    <Github className="mr-3 h-5 w-5 text-primary" /> Git & Github
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Database className="mr-3 h-5 w-5 text-primary" /> Firebase
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Smartphone className="mr-3 h-5 w-5 text-primary" /> Android Studio
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Palette className="mr-3 h-5 w-5 text-primary" /> Figma
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Some of my recent work that I&#39;m improving
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Link key={index} href={project.link} className={`block group ${index === 0 ? 'md:col-span-2' : ''}`}>
                  <Card
                    className={`overflow-hidden border-border group-hover:border-primary/50 transition-all duration-300 py-0 pb-6 h-full flex flex-col ${index === 0 ? 'md:flex-row md:pb-0' : ''}`}
                  >
                    <div className={`relative shrink-0 bg-muted ${index === 0 ? 'md:w-3/5 aspect-[16/10]' : 'aspect-video'}`}>
                      <Image
                        src={project.images?.cover || "/images/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className={`flex flex-col flex-1 ${index === 0 ? 'md:p-8 justify-center' : ''}`}>
                      <CardHeader className="flex-1">
                        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed mt-2 text-base">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto pt-0">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your mobile app idea to life? Let&#39;s discuss your project and see how I can help you succeed.
              </p>
            </div>
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Info & Social */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-8 border-border">
                  <CardTitle className="text-2xl mb-2">Contact Info</CardTitle>
                  <CardDescription className="mb-8">Feel free to reach out directly.</CardDescription>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-4 rounded-2xl">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Email</p>
                        <Link href="mailto:anhtuan03.MDev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          anhtuan03.MDev@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-4 rounded-2xl">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">Viet Nam, TP. Ho Chi Minh</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border">
                  <CardTitle className="text-2xl mb-6">Connect</CardTitle>
                  <div className="flex gap-4">
                    <Link href="https://github.com/anhtuanMDev" className="bg-zinc-100 dark:bg-zinc-800 text-foreground p-4 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/tu%E1%BA%A5n-nguy%E1%BB%85n-1ab336294/" className="bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 p-4 rounded-2xl hover:bg-[#0A66C2] hover:text-white transition-all">
                      <Linkedin className="w-6 h-6" />
                    </Link>
                  </div>
                </Card>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <Card className="p-8 border-border h-full">
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription>I&#39;ll get back to you within 24 hours.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-foreground">Full Name</Label>
                          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="bg-background/50 h-12 rounded-xl" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-foreground">Email</Label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="bg-background/50 h-12 rounded-xl" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="subject" className="text-foreground">Subject</Label>
                        <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required className="bg-background/50 h-12 rounded-xl" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-foreground">Message</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} required className="bg-background/50 rounded-xl resize-none" />
                      </div>
                      <Button type="submit" size="lg" className="w-full rounded-xl text-base h-12">
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
