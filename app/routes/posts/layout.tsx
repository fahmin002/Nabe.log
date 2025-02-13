import { Outlet } from "react-router";
import { Navbar } from "~/layout/navbar";

export default function ProjectLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
