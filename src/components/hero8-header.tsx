"use client";
import Link from "next/link";
import { Logo } from "./logo"; // Assuming this is your personal logo or brand
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  // { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false);

  // Function to close the menu
  const closeMenu = () => setMenuState(false);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 invert lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
                onClick={closeMenu}
              >
                <Logo />
                <span className="text-lg font-semibold text-zinc-900 invert sm:inline-block lg:hidden dark:text-zinc-100">
                  Caesar Cuzco
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 invert lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        onClick={closeMenu}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="https://drive.google.com/file/d/15VPhObr5mHdfhR3uH-UclsgRkQiCWBLM/view?usp=drive_link"
                    onClick={closeMenu}
                  >
                    <span>View Resume</span>
                  </Link>
                </Button>
                {/* <Button asChild size="sm">
                  <Link href="mailto:caesarcd6@gmail.com">
                    <span>Get in Touch</span>
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
// 'use client'
// import Link from 'next/link'
// import { Logo } from './logo'
// import { Menu, X } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import React from 'react'

// const menuItems = [
//     { name: 'Features', href: '#link' },
//     { name: 'Solution', href: '#link' },
//     { name: 'Pricing', href: '#link' },
//     { name: 'About', href: '#link' },
// ]

// export const HeroHeader = () => {
//     const [menuState, setMenuState] = React.useState(false)
//     return (
//         <header>
//             <nav
//                 data-state={menuState && 'active'}
//                 className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
//                 <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
//                     <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
//                         <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
//                             <Link
//                                 href="/"
//                                 aria-label="home"
//                                 className="flex items-center space-x-2">
//                                 <Logo />
//                             </Link>

//                             <button
//                                 onClick={() => setMenuState(!menuState)}
//                                 aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
//                                 className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
//                                 <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
//                                 <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
//                             </button>

//                             <div className="hidden lg:block">
//                                 <ul className="flex gap-8 text-sm">
//                                     {menuItems.map((item, index) => (
//                                         <li key={index}>
//                                             <Link
//                                                 href={item.href}
//                                                 className="text-muted-foreground hover:text-accent-foreground block duration-150">
//                                                 <span>{item.name}</span>
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
//                             <div className="lg:hidden">
//                                 <ul className="space-y-6 text-base">
//                                     {menuItems.map((item, index) => (
//                                         <li key={index}>
//                                             <Link
//                                                 href={item.href}
//                                                 className="text-muted-foreground hover:text-accent-foreground block duration-150">
//                                                 <span>{item.name}</span>
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
//                                 <Button
//                                     asChild
//                                     variant="outline"
//                                     size="sm">
//                                     <Link href="#">
//                                         <span>Login</span>
//                                     </Link>
//                                 </Button>
//                                 <Button
//                                     asChild
//                                     size="sm">
//                                     <Link href="#">
//                                         <span>Sign Up</span>
//                                     </Link>
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }
