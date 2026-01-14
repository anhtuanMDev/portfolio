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
  return (
    <div className="min-h-screen">
      <main className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-10">
        <div className="flex flex-col w-full max-w-[960px] flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 px-4 pb-8">
            <Link
              href="#"
              className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary"
            >
              Projects
            </Link>
            <span className="text-muted-foreground text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-foreground text-sm font-medium leading-normal">
              Stellar Scope
            </span>
          </div>

          {/* Profile Header */}
          <div className="flex p-4 mb-8">
            <div className="flex w-full flex-col gap-7 sm:flex-row sm:justify-between sm:items-center">
              <div className="flex gap-5 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-24 shrink-0"
                  style={{
                    backgroundImage: 'url("/images/stellar-scope-logo.png")',
                  }}
                  role="img"
                  aria-label="Minimalist cloud and sun app icon"
                />
                <div className="flex flex-col">
                  <h1 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em]">
                    Stellar Scope - Explore Space Every Day
                  </h1>
                  <p className="text-muted-foreground text-base font-normal leading-normal mt-1">
                    A simple app that helps you explore space events, space
                    news, and stunning images from NASA in one place.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto shrink-0">
                <Button
                  variant="secondary"
                  className="flex-1 sm:flex-auto hidden md:inline opacity-0"
                >
                  View on CH Play
                </Button>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.stellarscope"
                  }
                >
                  <Button className="flex-1 sm:flex-auto bg-blue-500">
                    View on CH Play
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <Separator className="h-[2px] bg-gray-100 mb-8" />

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
                      The Problem
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Information about space is scattered across many websites
                      and sources, often presented in a complex and technical
                      way. Space events, rocket launches, and scientific updates
                      can be difficult to follow, especially for people who are
                      curious about space but not experts. Users often struggle
                      to find reliable, up-to-date information in a format that
                      is easy to understand and enjoyable to explore.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      The Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      StellarScope brings space information together in one
                      simple, easy-to-use app. It presents real space events,
                      launch updates, and NASA imagery in a clean, visual format
                      with clear explanations. By focusing on readability,
                      smooth browsing, and everyday language, StellarScope makes
                      learning about space accessible to everyone - whether
                      you&apos;re casually curious or deeply interested in the
                      universe.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground">
                      Objective: Discover the Universe
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With short, easy-to-read updates, StellarScope helps you
                      stay informed about rocket launches, asteroids near Earth,
                      and space missions from around the world. Browse beautiful
                      space photos, read clear explanations, and discover the
                      stories behind each event. See what&aposs; happening above our
                      planet, from natural events observed from space to solar
                      activity that can affect Earth. Search for topics you care
                      about, save your favorite content, and share exciting
                      discoveries with friends. StellarScope runs smoothly even
                      on slower connections and lets you customize the app with
                      light or dark mode, your preferred date format, and
                      measurement units.
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
                    <Image
                      src="/images/stellar_scope/splash.png"
                      alt="Mobile app splash screen screenshot of Stellar Scope"
                      width={400}
                      height={800}
                      className="rounded-lg w-full object-cover aspect-[9/18] border"
                    />
                    <Image
                      src="/images/stellar_scope/home.png"
                      alt="Mobile app screenshot showing news, galaxy image on Stellar Scope"
                      width={400}
                      height={800}
                      className="rounded-lg w-full object-cover aspect-[9/18] border"
                    />
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
                    Led front-end development and user experience design,
                    integrating open data sources to present space information
                    in a clear and engaging way.
                  </p>
                </CardContent>
              </Card>

              {/* Key Features Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                    {keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
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
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
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
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-sm font-medium">{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tool Used Card */}
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">Tooling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {tooling.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="flex items-center gap-2 px-3 py-1.5"
                      >
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
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
                Ready to Explore Space?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you&apos;re a space enthusiast, a student, or simply
                curious about the universe, StellarScope makes learning about
                space simple, visual, and engaging.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/projects">View More Projects</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
