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
            <span className="text-red-700">{"<"}</span>
            {"Hello World! "}
            <span className="text-red-700">{"/>"}</span> <br />
            <span className="text-xl">
              Bem-Vindo ao meu <span className="text-red-700">portfólio</span>!
            </span>
          </em>
        </h1>
        <Button
          className="mt-4"
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
      <StacksLogo />
    </div>
  );
}
