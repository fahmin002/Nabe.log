import Welcome from "~/pages/welcome";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome | Nabe.log" },
    { name: "description", content: "Welcome to Logwel" },
  ];
}

export default function Home() {
  return (
  <>
    <Welcome />
  </>
  )
}
