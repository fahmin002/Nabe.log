import { type RouteConfig, index, prefix, route,layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    ...prefix("posts", [
        layout("routes/posts/layout.tsx", [
            index("routes/posts/home.tsx"),
            route(":postId", "routes/posts/posts.tsx")
        ])
    ])
] satisfies RouteConfig;
