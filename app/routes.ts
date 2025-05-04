import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/items.tsx"), route("new", "routes/newitems.tsx")] satisfies RouteConfig;
