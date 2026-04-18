// convex/schema.ts
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	users: defineTable({
		clerkId: v.string(), // Clerk's user ID (e.g. "user_2abc...")
		email: v.string(),
		name: v.optional(v.string()),
		imageUrl: v.optional(v.string()),
		createdAt: v.number()
	}).index('by_clerk_id', ['clerkId']),
	tasks: defineTable({
		text: v.string(),
		isCompleted: v.boolean(),
		validator: v.optional(v.string())
	})
});
