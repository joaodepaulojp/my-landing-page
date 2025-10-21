import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";

const Menu = () => {
  return (
    <div>
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
              <Link href="https://linkedin.com/in/joao-depaulo">LinkedIn</Link>
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
  );
};

export default Menu;
