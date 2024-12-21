import { cn } from "../../lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import logo from "@/app/public/logo.png";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import SearchInput from "./search-input";
import { CardButton } from "./card-button";
// import { Button } from "../ui/button";
// import { Button } from "../ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={cn("border border-b")}>
      <Container className="flex items-center justify-between py-8">
        {/* левая часть */}
        <Link href={"/"}>
          <div className="flex items-center gap-4 ">
            <Image src={logo} alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        {/* правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          <div>
           <CardButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
