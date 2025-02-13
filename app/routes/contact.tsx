import type { Route } from "./+types/home";
import { Contact } from "../pages/contact";
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
        <Contact />
    </>
  )
}
