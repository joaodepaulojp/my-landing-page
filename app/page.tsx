"use client";

import Projects from "@/components/projects";
import StacksLogo from "@/components/stacksLogo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <div className="h-screen w-screen flex items-center p-4 justify-center flex-col">
        <h1 className="text-3xl text-center">
          <em>
            <span className="text-primary">{"<"}</span>
            {"Hello World! "}
            <span className="text-primary">{"/>"}</span> <br />
            <span className="text-xl">
              Bem-Vindo ao meu <span className="text-primary">portfólio</span>!
            </span>
          </em>
        </h1>
        <Button
          className="mt-4 text-white"
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Ver Projetos
        </Button>
      </div>
      <div id="projects" className="h-screen w-screen flex p-4 flex-col">
        <h1 className="text-2xl mt-6 mb-6">Projetos</h1>
        <Projects />
      </div>
      <div className="h-screen w-screen flex items-center">
        <StacksLogo />
      </div>
    </div>
  );
}
