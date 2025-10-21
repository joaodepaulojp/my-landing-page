"use client";

import Projects from "@/components/projects";
import StacksLogo from "@/components/stacksLogo";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute top-4 right-4">
        <Sheet>
          <SheetTrigger>Menu</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Para onde você quer ir?</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-2 ml-4 items-start">
              <Button
                variant="link"
                className="text-white text-xl cursor-pointer"
                asChild
              >
                <Link href="https://github.com/joaodepaulojp">GitHub</Link>
              </Button>
              <Button
                variant="link"
                className="text-white text-xl cursor-pointer"
              >
                <Link href="https://linkedin.com/in/joao-depaulo">
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="link"
                className="text-white text-xl cursor-pointer"
              >
                <Link href="https://joaodepaulo.site">Meu Site</Link>
              </Button>
              <Button
                variant="link"
                className="text-white text-xl cursor-pointer"
              >
                <Link href="https://hackdodia.com">Blog</Link>
              </Button>
              <Button
                variant="link"
                className="text-white text-xl cursor-pointer"
              >
                <Link href="https://joaodepaulo.site/contact">Contato</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
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
