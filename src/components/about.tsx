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
      <section className="py-16 md:py-32 mt-10" id="about">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="mt-12 md:mt-24">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Highlight Cards */}
              {highlights.map((highlight, index) => (
                <div key={index} className="group overflow-hidden">
                  <Image
                    className="h-103 w-full rounded-md object-cover object-top grayscale brightness-83 transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                    src={ProfileImage}
                    alt={`${highlight.title} illustration`}
                    width={826}
                    height={1239}
                  />
                  <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
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
              <div className="lg:col-span-2 lg:mt-0 sm:col-span-1 mt-6">
                <div className="space-y-4">
                  <h3 className="text-5xl font-semibold">Hey, I’m Caesar!</h3>
                  <p className="text-foreground text-4xl">
                    I’m a software engineer with a passion for turning ideas
                    into code. I graduated from John Jay College with a B.S. in
                    Computer Science and Information Security, minoring in
                    Psychology, which fuels my curiosity about how technology
                    and human behavior intersect.
                  </p>
                  <p className="text-muted-foreground text-xl">
                    With experience as an IT Specialist at the Department of
                    Education and a freelance developer, I’ve tackled everything
                    from configuring tech for 90+ classrooms to building custom
                    web solutions. My proudest moments? Placing 2nd in the
                    Federal AI Hackathon and earning the People’s Choice Award
                    for an AI-powered assistant at the GSA Offices at One World
                    Trade Center.
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
