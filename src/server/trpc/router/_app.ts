import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { buildsRouter } from "./buildsRouter";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  builds: buildsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
