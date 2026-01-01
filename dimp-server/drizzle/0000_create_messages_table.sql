CREATE TABLE "messages" (
	"id" text PRIMARY KEY NOT NULL,
	"guild_id" text NOT NULL,
	"channel_id" text NOT NULL,
	"user_id" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"discord_created_at" timestamp NOT NULL,
	"discord_updated_at" timestamp NOT NULL,
	"discord_deleted_at" timestamp
);
