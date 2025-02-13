import PostsHome from "~/pages/posts/home";
import type { Route } from "../posts/+types/home";
import { Navbar } from "../../layout/navbar"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome | Logwel" },
    { name: "description", content: "Welcome to Logwel" },
  ];
}

export default function Home() {
  return (
  <>
    <PostsHome />
  </>
  )
}
