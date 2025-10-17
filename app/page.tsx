"use client";

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
        <Button className="mt-4">Ver Projetos</Button>
      </div>
      <StacksLogo />
    </div>
  );
}
