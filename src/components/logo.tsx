import { cn } from "@/lib/utils";
import logo from "../app/assets/logo.svg";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={logo}
      alt="logo"
      className={cn("size-7 w-7", className, "dark:invert-0")}
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image
      src={logo}
      alt="logo"
      className={cn("size-7 w-7", className, "dark:invert-0")}
    />
  );
};
