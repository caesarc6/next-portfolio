import { CodeXml, SquareTerminal, MonitorCog } from "lucide-react"; // Assuming this is the icon used
import { Card, CardContent } from "@/components/ui/card"; // Adjust import based on your setup
import { Separator } from "./ui/separator";

export default function SkillsSection() {
  return (
    <span id="skills">
      <Separator className="mt-70 mb-27" />

      <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent  mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="mx-auto max-w-5xl px-0.1">
          <h2 className="text-3xl font-bold text-center mb-20">
            Technical Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
            {/* Programming Languages Card */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <CodeXml className="size-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Programming Languages
                </h3>
                <div className="text-foreground mb-4">
                  <p className="text-sm">JavaScript (ES6+)</p>
                  <p className="text-sm">C++</p>
                  <p className="text-sm">Python</p>
                  <p className="text-sm">Swift</p>
                  <p className="text-sm">HTML5 / CSS3</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Building robust & efficient solutions
                </p>
              </CardContent>
            </Card>

            {/* Frameworks & Libraries Card */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <MonitorCog className="size-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Frameworks & Libraries
                </h3>
                <div className="text-foreground mb-4">
                  <p className="text-sm">React</p>
                  <p className="text-sm">Node.js & Express.js</p>
                  <p className="text-sm">Tailwind CSS</p>
                  <p className="text-sm">Shadcn UI</p>
                  <p className="text-sm">Vite</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Crafting modern, responsive UIs & APIs
                </p>
              </CardContent>
            </Card>

            {/* Tools & Databases Card */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <SquareTerminal className="size-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Tools & Databases
                </h3>
                <div className="text-foreground mb-4">
                  <p className="text-sm">PostgreSQL</p>
                  <p className="text-sm">MongoDB</p>
                  <p className="text-sm">Vercel</p>
                  <p className="text-sm">Git & GitHub</p>
                  <p className="text-sm">Firebase & Supabase</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Streamlining development & data management
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </span>
  );
}
