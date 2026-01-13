import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function StellarScope() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="/projects"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2"
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                    StellarScope
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            StellarScope – Explore Space Every Day
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore space with one of the most complete space discovery apps available. StellarScope makes it easy and enjoyable to follow real space events, view stunning NASA images, and learn what&apos;s happening beyond Earth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              React Native
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              NASA API
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Mobile App
            </Badge>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="#projects">← Back to Projects</Link>
          </Button>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Discover the Universe
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With short, easy-to-read updates, StellarScope helps you stay informed about rocket launches, asteroids near Earth, and space missions from around the world. Browse beautiful space photos, read clear explanations, and discover the stories behind each event.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                See what&apos;s happening above our planet, from natural events observed from space to solar activity that can affect Earth. Search for topics you care about, save your favorite content, and share exciting discoveries with friends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                StellarScope runs smoothly even on slower connections and lets you customize the app with light or dark mode, your preferred date format, and measurement units.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/stellar_scope_placeholder.jpg"
                alt="StellarScope App Screenshot"
                width={400}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why StellarScope?
            </h2>
            <p className="text-xl text-gray-600">
              Features that make space exploration accessible and engaging
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-gray-900">Simple and Easy to Use</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-600">
                  Clear layouts and readable content help you explore space without feeling overwhelmed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-gray-900">Learn Something New Every Day</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-600">
                  Daily space images, important events, and fresh updates keep your curiosity alive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-gray-900">Follow Real Space Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-600">
                  Stay up to date with rocket launches, space missions, and asteroids near Earth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-gray-900">Beautiful Space Images</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-600">
                  Browse and search high-quality NASA images with helpful explanations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-gray-900">Explore People and Organizations</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-600">
                  Learn about astronauts, their missions, and space agencies around the world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-gray-900">Understand Space-Earth Connection</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-600">
                  View natural events seen from space and learn how space activity impacts our planet.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 md:col-span-2 lg:col-span-3">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl text-gray-900">Make It Your Own</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-600">
                  Choose light or dark mode, date formats, and units that feel right for you.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you&apos;re a space enthusiast, a student, or simply curious about the universe, StellarScope makes learning about space simple, visual, and engaging.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="#projects">View More Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}