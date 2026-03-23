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
                  <h3 className="text-5xl font-semibold">
                    &lt;Hello World/&gt;
                  </h3>
                  <p className="text-foreground text-3xl">
                    I’m a software engineer who enjoys building full-stack
                    applications that turn ideas into real products.
                  </p>
                  <p className="text-muted-foreground text-md">
                    I have experience working as an IT Specialist where I
                    assessed and identified technology needs and troubleshooted
                    hardware and software issues in collaboration with the
                    Department of Education Help Center. Currently, I develop
                    web applications as a freelance web developer. I bring in
                    experience in cybersecurity and software engineering to
                    create secure and efficient web applications.
                  </p>
                  <p className="text-muted-foreground text-md">
                    In my free time, I enjoy playing basketball, working out,
                    and spending time with my family. Recently, I've been
                    enjoying reading. I'm currently reading "Shoe Dog" by Phil
                    Knight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
