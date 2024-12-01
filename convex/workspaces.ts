import { queryGeneric } from "convex/server";
// api endpoint
// ctx = context

export const get = queryGeneric({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workspaces").collect();
  },
});
