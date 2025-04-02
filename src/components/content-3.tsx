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
            <AppWindowMacIcon className="text-primary size-12 justify-self-center" />
          </div>
          <h2 className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-500 bg-clip-text text-center text-4xl font-medium text-transparent">
            My Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-center">
            Here’s a glimpse of my work—full-stack apps, AI solutions, and
            more—built with creativity and code.
          </p>

          {/* <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3"> */}
          <div className="relative mx-auto grid max-w-lvw divide-x divide-y border *:p-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-sm border shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                {project.image ? (
                  <Image
                    className="h-52 w-full object-cover brightness-100 grayscale transition-all duration-500 group-hover:brightness-100 group-hover:grayscale-0"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    height={192}
                    width={400}
                    style={{ borderRadius: "6px" }}
                    loading="lazy"
                  />
                ) : (
                  <Image
                    className="d h-52 w-full rounded-lg object-cover brightness-100 grayscale transition-all duration-500 group-hover:brightness-100 group-hover:grayscale-0"
                    src=""
                    alt={`${project.title} screenshot`}
                    height={192}
                    width={400}
                    loading="lazy"
                    style={{ borderRadius: "6px" }}
                  />
                )}
                <div className="space-y-2 p-4">
                  <h3 className="bg-gradient-to-br from-gray-300 via-slate-500 to-gray-300 bg-clip-text text-2xl font-semibold text-transparent">
                    {project.title}
                  </h3>{" "}
                  <div className="flex flex-wrap gap-2">
                    {project.liveLink && (
                      <Button
                        asChild
                        variant="link"
                        className="text-md !p-0 text-cyan-800"
                      >
                        <Link href={project.liveLink}>
                          <BadgeCheck className="size-5 self-center text-slate-400" />
                          {project.linkTitle || "Live Server"}
                        </Link>
                      </Button>
                    )}
                    {project.articleLink && (
                      <>
                        <Button
                          asChild
                          variant="link"
                          className="text-md max-w-full !p-0 break-words whitespace-normal text-cyan-800"
                        >
                          <Link href={project.articleLink}>
                            <Newspaper className="size-5 self-center text-slate-400" />
                            {project.articleTitle || "Article"}
                          </Link>
                        </Button>
                      </>
                    )}

                    <Button
                      asChild
                      variant="link"
                      className="text-md !p-0 text-cyan-800"
                    >
                      <Link href={project.githubLink}>
                        <Github className="size-5 self-center text-slate-400" />
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
