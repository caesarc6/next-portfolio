import Image from "next/image";
import ProfileImage from "../app/assets/ProfileImage.jpg";
import Link from "next/link";

export default function About() {
  const highlights = [
    {
      title: "Education",
      subtitle: "B.S. in Computer Science & Information Security",
      details: "John Jay College, CUNY - Graduated August 2024",
    },
  ];
  return (
    <div>
      <section className="mt-10 py-16 md:py-32" id="about">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>
          <div className="mt-12 md:mt-24">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Highlight Cards */}
              {highlights.map((highlight, index) => (
                <div key={index} className="group overflow-hidden">
                  <Image
                    className="h-103 w-full rounded-md object-cover object-top brightness-83 grayscale transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl hover:grayscale-0"
                    src={ProfileImage}
                    alt={`${highlight.title} illustration`}
                    width={826}
                    height={1239}
                  />
                  <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                    <div className="flex justify-between">
                      <h3 className="text-title inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {highlight.title}
                      </h3>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {highlight.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Side Description for lg screens */}
              <div className="mt-6 sm:col-span-1 lg:col-span-2 lg:mt-0">
                <div className="space-y-4">
                  <h3 className="text-5xl font-semibold">Hello World</h3>
                  <p className="text-foreground text-3xl">
                    I’m a software engineer and John Jay College graduate who
                    enjoys building full-stack applications that turn ideas into
                    real products.
                  </p>
                  <p className="text-muted-foreground text-md">
                    Previously, I worked as an IT Specialist with the Department
                    of Education supporting technology across 90+ classrooms,
                    and I now build web applications as a freelance developer.I
                    also placed 2nd in the Federal AI Hackathon and won the
                    People’s Choice Award for an AI-powered assistant built at
                    the GSA offices in One World Trade Center.
                  </p>
                  <p className="text-muted-foreground text-md">
                    Lately, I’ve been focused on building modern full-stack
                    applications using React, Node.js, and cloud tools while
                    continuing to explore how AI can enhance user experiences.
                  </p>

                  <Link
                    href="#projects"
                    className="text-primary-600 dark:text-primary-400 inline-block text-sm hover:underline"
                  >
                    Explore My Work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
