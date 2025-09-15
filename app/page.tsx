"use client";

import { NavbarFixed } from "@/components/navbar-fixed";
import { NavbarFloating } from "@/components/navbar-floating";
import { PinContainer } from "@/components/ui/3d-pin";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Spotlight } from "@/components/ui/spotlight-new";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {NavbarFixed()}
      {NavbarFloating()}

      <div className="h-screen w-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <span className="mt-4 text-lg text-left font-normal">
              Olá, seja bem-vindo. Meu nome é
            </span>
            <br />
            João de Paulo
            <br />
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Aqui você encontrará informações sobre minha trajetória
            profissional, portfólio e formas de contato. Logo abaixo,
            disponibilizo um botão que leva diretamente ao meu currículo em PDF.
          </p>

          <div className="flex items-center justify-center p-10">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <a href="/curriculum-joaodepaulo.pdf" target="_blank">
                  DOWNLOAD CV{" "}
                  <DownloadIcon
                    size={18}
                    className="inline items-center ml-2 mb-1"
                  />
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-screen w-screen flex items-center justify-center">
        <PinContainer
          title="github.com/joaodepaulojp"
          href="https://github.com/joaodepaulojp"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Veja meu GitHub
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Aqui você verá todos meus repositórios!
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image src="/readme-github.png" alt="card-github" fill />
            </div>
          </div>
        </PinContainer>
      </div>
      <div id="portfolio">
        <HeroParallax products={products} />
      </div>
      <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden mb-12">
        <MaskContainer
          revealText={
            <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
              *ESTE COMPONENTE É APENAS PARA TESTE, PASSE O MOUSE SOBRE O TEXTO
              PARA REVELAR UM TEXTO SECRETO*
            </p>
          }
          className="h-[40rem] rounded-md border text-white dark:text-black"
        >
          Discover the power of{" "}
          <span className="text-blue-500">Tailwind CSS v4</span> with native CSS
          variables and container queries with
          <span className="text-blue-500">advanced animations</span>.
        </MaskContainer>
      </div>
    </div>
  );
}
export const products = [
  {
    title: "Vestibulado",
    link: "https://github.com/joaodepaulojp/vestibulado-mobile",
    thumbnail: "/mockup-vestibuladoapp.png",
  },
  {
    title: "Meu Blog",
    link: "https://hackdodia.com",
    thumbnail: "/hackdodia-page.png",
  },
  {
    title: "Vestibulado",
    link: "https://github.com/joaodepaulojp/vestibulado-mobile",
    thumbnail: "/mockup-vestibuladoapp.png",
  },

  {
    title: "Meu Blog",
    link: "https://hackdodia.com",
    thumbnail: "/hackdodia-page.png",
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Meu Site",
    link: "https://joaodepaulo.site",
    thumbnail: "/meusite.png",
  },

  {
    title: "BarberApp",
    link: "https://barberapp-teal.vercel.app/",
    thumbnail: "/mockup-barberapp.png",
  },
  {
    title: "Mc Donalds",
    link: "https://mc-donalds-phi.vercel.app/jp-donalds",
    thumbnail: "/mockup-mcdonalds-app.png",
  },
  {
    title: "Meu Site",
    link: "https://joaodepaulo.site",
    thumbnail: "/meusite.png",
  },
  {
    title: "Mc Donalds",
    link: "https://mc-donalds-phi.vercel.app/jp-donalds",
    thumbnail: "/mockup-mcdonalds-app.png",
  },
  {
    title: "Vestibulado",
    link: "https://github.com/joaodepaulojp/vestibulado-mobile",
    thumbnail: "/mockup-vestibuladoapp.png",
  },

  {
    title: "Acesse meu GitHub",
    link: "https://github.com/joaodepaulojp",
    thumbnail: "readme-github.png",
  },
  {
    title: "Busca CEP",
    link: "https://replit.com/@joaodepaulo/buscacep",
    thumbnail: "mockup-buscacep.png",
  },
  {
    title: "Meu Site",
    link: "https://joaodepaulo.site",
    thumbnail: "/meusite.png",
  },
  {
    title: "Meu Blog",
    link: "https://hackdodia.com",
    thumbnail: "/hackdodia-page.png",
  },
];
