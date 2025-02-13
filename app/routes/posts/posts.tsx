// provides type safety/inference
import { Navbar } from "~/layout/navbar";
import type { Route } from "../posts/+types/posts";
import PostPage from "~/pages/posts/post";

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  return { postId: params.postId };
}

// renders after the loader is done
export default function Component({
  loaderData,
}: Route.ComponentProps) {
  return (
    <>
      <PostPage postId={loaderData.postId} />
    </>
  )
}