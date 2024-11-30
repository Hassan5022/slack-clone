// import { queryGeneric } from "convex/server";
import { queryGeneric } from "convex/server";
import { getAuthUserId } from "@convex-dev/auth/server";
// import { auth } from "./auth";

// user api endpoint

export const current = queryGeneric({
  args: {},
  handler: async (ctx) => {
    // const userId = await auth.getUserId(ctx);
    const userId = await getAuthUserId(ctx);

    if (userId === null) return null;

    return await ctx.db.get(userId);
  },
});
