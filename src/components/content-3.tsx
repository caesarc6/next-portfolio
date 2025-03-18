import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// Placeholder images - replace with your actual project images
import iSociallyImg from "../app/assets/isocially1.png";
import etherealGainsImg from "../app/assets/1etherealgains.png";
import readEasyImg from "../app/assets/readeasy.jpg";
import commonCentsImg from "../app/assets/commoncents.png";
import { Separator } from "@/components/ui/separator";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Read Easy",
      description:
        "An AI-powered assistant from the Federal AI Hackathon (2nd Place & People’s Choice). Simplifies USDA.gov content using Python and OpenAI.",
      image: readEasyImg,
      liveLink: null, // No live link provided, using GitHub only
      githubLink: "https://github.com/caesarc6/Read-Easy-Hackathon-Submission",
    },
    {
      title: "Ethereal Gains",
      description:
        "A fitness app for tracking workouts. Users sign up, log posts, and monitor progress with a full-stack solution.",
      image: etherealGainsImg,
      liveLink: "https://www.etherealgains.com/",
      githubLink: "https://github.com/caesarc6/gym-entry-mern",
    },
    {
      title: "iSocially",
      description:
        "A modern social network where users create accounts, post text and images, follow others, and engage with likes and comments—Twitter-inspired.",
      image: iSociallyImg,
      liveLink: "https://isocially.vercel.app/",
      githubLink: "https://github.com/caesarc6/socialapp",
    },
    {
      title: "CommonCents",
      description:
        "An accessibility app using AI and computer vision to detect U.S. currency, built with React and Python.",
      image: commonCentsImg,
      liveLink: null, // No live link provided, using GitHub only
      githubLink: "https://github.com/caesarc6/dollar-classifier",
    },
  ];

  return (
    <>
      <Separator className="mt-21 mb-52" />
      <section
        // className="py-16 md:py-32 mp-12 flex flex-wrap items-end justify-between gap-6 border-t "
        id="projects"
      >
        {/* <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12"> */}
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-4xl font-medium text-center">
            My Featured Projects
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Here’s a glimpse of my work—full-stack apps, AI solutions, and
            more—built with creativity and code.
          </p>

          {/* <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3"> */}
          <div className="relative mx-auto grid max-w-lvw divide-x divide-y border *:p-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-sm border shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {project.image ? (
                  <Image
                    className="h-52 w-full object-cover grayscale brightness-100 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    height={192}
                    width={400}
                    style={{ borderRadius: "6px" }}
                    loading="lazy"
                  />
                ) : (
                  <Image
                    className="rounded-lg d h-52 w-full object-cover grayscale brightness-100 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                    src=""
                    alt={`${project.title} screenshot`}
                    height={192}
                    width={400}
                    loading="lazy"
                    style={{ borderRadius: "6px" }}
                  />
                )}
                <div className="p-4 space-y-2">
                  <h3 className="text-2xl font-semibold text-stone-300">
                    {project.title}
                  </h3>
                  <p className="text-xl text-stone-400">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <Button
                        asChild
                        variant="link"
                        className="p-0 text-cyan-800 text-md"
                      >
                        <Link href={project.liveLink}>Live Site</Link>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="link"
                      className="p-0 text-cyan-800 text-md"
                    >
                      <Link href={project.githubLink}>GitHub</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
