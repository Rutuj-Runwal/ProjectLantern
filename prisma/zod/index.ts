import { z } from "zod";
import type { Prisma } from "@prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const UserScalarFieldEnumSchema = z.enum(["id", "username", "password"]);

export const ProductScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "name",
  "belongsToId",
]);

export const UpdateScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "title",
  "body",
  "status",
  "version",
  "asset",
  "productId",
]);

export const UpdatePointScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "name",
  "description",
  "updateId",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const NullsOrderSchema = z.enum(["first", "last"]);

export const UPDATE_STATUSSchema = z.enum([
  "IN_PROGRESS",
  "LIVE",
  "DEPRECATED",
  "ARCHIVED",
]);

export type UPDATE_STATUSType = `${z.infer<typeof UPDATE_STATUSSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  name: z.string(),
  belongsToId: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

/////////////////////////////////////////
// UPDATE SCHEMA
/////////////////////////////////////////

export const UpdateSchema = z.object({
  status: UPDATE_STATUSSchema,
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  version: z.string().nullable(),
  asset: z.string(),
  productId: z.string(),
});

export type Update = z.infer<typeof UpdateSchema>;

/////////////////////////////////////////
// UPDATE POINT SCHEMA
/////////////////////////////////////////

export const UpdatePointSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  description: z.string(),
  updateId: z.string(),
});

export type UpdatePoint = z.infer<typeof UpdatePointSchema>;
