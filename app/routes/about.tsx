import type { Route } from "./+types/home";
import { About } from "../pages/about";
import { Navbar } from "../layout/navbar";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page | RedhelmX Blog" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
        <About />
    </>
  )
}
