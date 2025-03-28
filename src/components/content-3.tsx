import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// Placeholder images - replace with your actual project images
import iSociallyImg from "../app/assets/isocially1.png";
import etherealGainsImg from "../app/assets/1etherealgains.png";
import readEasyImg from "../app/assets/readeasy.jpg";
import commonCentsImg from "../app/assets/commoncents.png";
import { Separator } from "@/components/ui/separator";
import { AppWindowMacIcon, Newspaper, Github, BadgeCheck } from "lucide-react"; // Assuming this is the icon used
export default function ProjectsSection() {
  const projects = [
    {
      title: "Read Easy",
      description:
        "An AI-powered assistant simplifies USDA.gov content using Python and OpenAI. ",
      description2: "Federal AI Hackathon (2nd Place & People’s Choice).",
      image: readEasyImg,
      articleLink:
        "https://www.gsa.gov/blog/2024/08/01/gsa-aithemed-hackathon-reimagines-user-experience-for-federal-websites", // No live link provided, using GitHub only
      articleTitle: "U.S. General Services Administration Article",
      githubLink: "https://github.com/caesarc6/Read-Easy-Hackathon-Submission",
    },
    {
      title: "Ethereal Gains",
      description:
        "A fitness app for tracking workouts. Users sign up, log posts, and monitor progress with a full-stack solution.",
      image: etherealGainsImg,
      liveLink: "https://www.etherealgains.com/",
      linkTitle: "Ethereal Gains",
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
      <Separator className="mt-21 mb-32" />
      <section
        // className="py-16 md:py-32 mp-12 flex flex-wrap items-end justify-between gap-6 border-t "
        id="projects"
      >
        {/* <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12"> */}
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="flex justify-center">
            <AppWindowMacIcon className="size-12 text-primary justify-self-center" />
          </div>
          <h2 className="text-4xl font-medium text-center bg-gradient-to-br from-gray-100 via-gray-100 to-gray-500  text-transparent bg-clip-text">
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
                <div className="p-4 space-y-2 ">
                  <h3 className="text-2xl font-semibold  bg-gradient-to-br from-gray-300 via-slate-500 to-gray-300  text-transparent bg-clip-text">
                    {project.title}
                  </h3>{" "}
                  <div className="flex flex-wrap gap-2">
                    {project.liveLink && (
                      <Button
                        asChild
                        variant="link"
                        className="!p-0 text-cyan-800 text-md "
                      >
                        <Link href={project.liveLink}>
                          <BadgeCheck className="size-5 text-slate-400 self-center" />
                          {project.linkTitle || "Live Server"}
                        </Link>
                      </Button>
                    )}
                    {project.articleLink && (
                      <>
                        <Button
                          asChild
                          variant="link"
                          className="!p-0 text-cyan-800 text-md "
                        >
                          <Link href={project.articleLink}>
                            <Newspaper className="size-5 text-slate-400 self-center" />
                            {project.articleTitle || "Article"}
                          </Link>
                        </Button>
                      </>
                    )}

                    <Button
                      asChild
                      variant="link"
                      className="!p-0 text-cyan-800 text-md"
                    >
                      <Link href={project.githubLink}>
                        <Github className="size-5 text-slate-400 self-center " />
                        Github
                      </Link>
                    </Button>
                  </div>
                  <span className="text-lg text-slate-400">
                    {project.description2}
                  </span>
                  <span className="text-xl text-stone-400">
                    {project.description}
                  </span>
                  {/* <span className="text-lg text-slate-400">
                    {project.description2}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
