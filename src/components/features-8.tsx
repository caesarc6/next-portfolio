import { CodeXml, SquareTerminal, MonitorCog } from "lucide-react"; // Assuming this is the icon used
import { Card, CardContent } from "@/components/ui/card"; // Adjust import based on your setup
import { Separator } from "./ui/separator";

export default function SkillsSection() {
  return (
    <span id="skills">
      <Separator className="mt-20 mb-6" />

      <section className="mx-auto max-w-5xl space-y-8 bg-gray-50 px-6 py-16 md:space-y-16 md:py-32 dark:bg-transparent">
        <div className="px-0.1 mx-auto max-w-5xl">
          <h2 className="mb-10 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            Technical Skills & Expertise
          </h2>
          <p className="text-muted-foreground mx-auto mb-15 max-w-2xl text-center">
            Leveraging a versatile tech stack to build and ship innovative
            software solutions that are robust, efficient, and user-focused.
          </p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {/* Programming Languages Card */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <CodeXml className="text-primary size-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Programming Languages
                </h3>
                <div className="text-foreground mb-4">
                  <p className="text-sm">JavaScript (ES6+)</p>
                  <p className="text-sm">C++</p>
                  <p className="text-sm">Python</p>
                  <p className="text-sm">Swift</p>
                  <p className="text-sm">HTML5 / CSS3</p>
                </div>
                {/* <p className="text-sm text-muted-foreground">
                  Building robust & efficient solutions
                </p> */}
              </CardContent>
            </Card>

            {/* Frameworks & Libraries Card */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <MonitorCog className="text-primary size-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Frameworks & Libraries
                </h3>
                <div className="text-foreground mb-4">
                  <p className="text-sm">React</p>
                  <p className="text-sm">Next.js</p>
                  <p className="text-sm">Node.js & Express.js</p>
                  <p className="text-sm">Tailwind CSS</p>
                  <p className="text-sm">Shadcn UI</p>
                  <p className="text-sm">Vite</p>
                </div>
                {/* <p className="text-sm text-muted-foreground">
                  Crafting modern, responsive UIs & APIs
                </p> */}
              </CardContent>
            </Card>

            {/* Tools & Databases Card */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <SquareTerminal className="text-primary size-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Tools & Databases
                </h3>
                <div className="text-foreground mb-4">
                  <p className="text-sm">PostgreSQL</p>
                  <p className="text-sm">MongoDB</p>
                  <p className="text-sm">Vercel</p>
                  <p className="text-sm">GitHub & VIM</p>
                  <p className="text-sm">Firebase & Supabase</p>
                </div>
                {/* <p className="text-sm text-muted-foreground">
                  Streamlining development & data management
                </p> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Separator className="mt-20 mb-22" />
    </span>
  );
}
