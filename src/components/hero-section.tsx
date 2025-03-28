import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { TypeAnimation } from "react-type-animation";
import hero from "../app/assets/logo.webp";

export default function Portfolio() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        {/* Hero Section */}

        <section
          className="relative min-h-screen flex items-center justify-center pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44"
          id="home"
        >
          <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
            <div className="max-w-lg mx-auto">
              {/* <h1 className="mt-8 text-5xl font-light text-balance md:text-6xl lg:mt-16 xl:text-7xl text-zinc-300 "> */}
              <h1 className="text-5xl font-light text-balance md:text-6xl lg:mt-16 xl:text-7xl bg-gradient-to-br from-gray-100 via-gray-100 to-gray-500 inline-block text-transparent bg-clip-text p-2">
                <TypeAnimation
                  sequence={[
                    "Caesar Cuzco",
                    203,
                    "Caesar Cuzco,",
                    203,
                    "Caesar Cuzco, Fullstack Developer",
                    5000,
                    "Caesar Cuzco, Software Engineer",
                    6900,
                  ]}
                  wrapper="span"
                  speed={40}
                  deletionSpeed={70}
                  style={{ fontSize: "1.6em", display: "inline-block" }}
                />
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-3xl mx-auto">
                Building innovative web solutions with modern technologies and
                clean code.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <Button asChild size="lg" className="px-5 text-base">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="px-5 text-base"
                >
                  {/* <Link href="#contact">Contact Me</Link> */}
                </Button>
              </div>
            </div>
          </div>
          <Image
            className="absolute inset-0 h-full w-full object-cover z-0  brightness-26 grayscale-100"
            src={hero}
            alt="Hero Background"
            height={4000}
            width={3000}
            priority // Loads image faster for hero section
          />
        </section>

        {/* <section className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44" id="home">
          <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                <TypeAnimation
                  //   preRenderFirstString={true}
                  sequence={[
                    "Caesar Cuzco",
                    1800,
                    // "Caesar Cuzco, Frontend",
                    // 700,
                    // "Caesar Cuzco, Backend",
                    // 700,
                    "Caesar Cuzco, Fullstack Developer",
                    5000,
                    "Caesar Cuzco, Software Engineer",
                    6900,
                  ]}
                  wrapper="span"
                  speed={40}
                  deletionSpeed={70}
                  style={{ fontSize: "1.6em", display: "inline-block" }}
                  //   repeat={Infinity}
                />
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-3xl">
                Building innovative web solutions with modern technologies and
                clean code.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="px-5 text-base">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="px-5 text-base"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <Image
              className="border-2 -z-10 order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-1 lg:h-max lg:w-[100vw] lg:object-contain dark:mix-blend-lighten "
              src={hero}
              alt="Abstract Background"
              height="4000"
              width="3000"
            />
         
          </div>
        </section> */}

        {/* About Section */}
        {/* {/* <section className="bg-background py-16 md:py-24" id="about">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg">
                  I'm a passionate software engineer with expertise in
                  full-stack development. I specialize in creating responsive,
                  user-friendly web applications using modern technologies like
                  React, Next.js, and Node.js.
                </p>
                <p className="mt-4 text-lg">
                  With a strong foundation in both frontend and backend
                  development, I enjoy solving complex problems and delivering
                  high-quality solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Skills</h3>
                  <ul className="mt-2 list-disc list-inside">
                    <li>React & Next.js</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Tools</h3>
                  <ul className="mt-2 list-disc list-inside">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
