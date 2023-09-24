import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import * as schema from "./schema";

export type User = InferSelectModel<typeof schema.users>;
export type Users = InferSelectModel<typeof schema.users>[];
export type UserSchema = InferInsertModel<typeof schema.users>;

export type Workspace = InferSelectModel<typeof schema.workspace>;
export type Workspaces = InferSelectModel<typeof schema.workspace>[];
export type WorkspaceSchema = InferInsertModel<typeof schema.workspace>;
