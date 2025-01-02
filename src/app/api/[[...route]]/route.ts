import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/features/auth/server/route";
import workspaces from "@/features/workSpaces/server/route";
const app = new Hono().basePath("/api");

export const routes = app.route("/auth", auth).route("/workspaces", workspaces);
export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type Apptype = typeof routes;
