import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const buildsRouter = router({
  submitBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), buildOrder: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.build.create({ data: { ...input } });
      return build;
    }),
  getBuilds: publicProcedure.query(async ({ ctx }) => {
    const builds = await ctx.prisma.build.findMany();
    return builds;
  }),
});
