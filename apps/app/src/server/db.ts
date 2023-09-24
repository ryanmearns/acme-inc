import * as schema from "@/db/schema";
import { env } from "@/utils/env";
import { Logger } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(env.DATABASE_URL, { max: 1 });

export const db = drizzle(client, {
  schema,
});
