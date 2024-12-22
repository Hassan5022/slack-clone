import { v } from "convex/values";

import { queryGeneric } from "convex/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const current = queryGeneric({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) return null;

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.workspaceId)
      )
      .filter((q) => q.eq(q.field("userId"), userId))
      .unique();

    if (!member) return null;

    return member;
  },
});
