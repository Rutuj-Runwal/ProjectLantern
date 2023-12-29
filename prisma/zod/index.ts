import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','username','password']);

export const ProductScalarFieldEnumSchema = z.enum(['id','createdAt','name','belongsToId']);

export const UpdateScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','title','body','status','version','asset','productId']);

export const UpdatePointScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','name','description','updateId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const UPDATE_STATUSSchema = z.enum(['IN_PROGRESS','LIVE','DEPRECATED','ARCHIVED']);

export type UPDATE_STATUSType = `${z.infer<typeof UPDATE_STATUSSchema>}`

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
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  name: z.string(),
  belongsToId: z.string(),
})

export type Product = z.infer<typeof ProductSchema>

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
})

export type Update = z.infer<typeof UpdateSchema>

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
})

export type UpdatePoint = z.infer<typeof UpdatePointSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  product: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  belongsTo: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updates: z.union([z.boolean(),z.lazy(() => UpdateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  updates: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  name: z.boolean().optional(),
  belongsToId: z.boolean().optional(),
  belongsTo: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updates: z.union([z.boolean(),z.lazy(() => UpdateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// UPDATE
//------------------------------------------------------

export const UpdateIncludeSchema: z.ZodType<Prisma.UpdateInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  updatePoints: z.union([z.boolean(),z.lazy(() => UpdatePointFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UpdateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UpdateArgsSchema: z.ZodType<Prisma.UpdateDefaultArgs> = z.object({
  select: z.lazy(() => UpdateSelectSchema).optional(),
  include: z.lazy(() => UpdateIncludeSchema).optional(),
}).strict();

export const UpdateCountOutputTypeArgsSchema: z.ZodType<Prisma.UpdateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UpdateCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UpdateCountOutputTypeSelectSchema: z.ZodType<Prisma.UpdateCountOutputTypeSelect> = z.object({
  updatePoints: z.boolean().optional(),
}).strict();

export const UpdateSelectSchema: z.ZodType<Prisma.UpdateSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  body: z.boolean().optional(),
  status: z.boolean().optional(),
  version: z.boolean().optional(),
  asset: z.boolean().optional(),
  productId: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  updatePoints: z.union([z.boolean(),z.lazy(() => UpdatePointFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UpdateCountOutputTypeArgsSchema)]).optional(),
}).strict()

// UPDATE POINT
//------------------------------------------------------

export const UpdatePointIncludeSchema: z.ZodType<Prisma.UpdatePointInclude> = z.object({
  update: z.union([z.boolean(),z.lazy(() => UpdateArgsSchema)]).optional(),
}).strict()

export const UpdatePointArgsSchema: z.ZodType<Prisma.UpdatePointDefaultArgs> = z.object({
  select: z.lazy(() => UpdatePointSelectSchema).optional(),
  include: z.lazy(() => UpdatePointIncludeSchema).optional(),
}).strict();

export const UpdatePointSelectSchema: z.ZodType<Prisma.UpdatePointSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  updateId: z.boolean().optional(),
  update: z.union([z.boolean(),z.lazy(() => UpdateArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    username: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  belongsToId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  belongsTo: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  updates: z.lazy(() => UpdateListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  belongsToId: z.lazy(() => SortOrderSchema).optional(),
  belongsTo: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  updates: z.lazy(() => UpdateOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  belongsToId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  belongsTo: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  updates: z.lazy(() => UpdateListRelationFilterSchema).optional()
}).strict());

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  belongsToId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  belongsToId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UpdateWhereInputSchema: z.ZodType<Prisma.UpdateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UpdateWhereInputSchema),z.lazy(() => UpdateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdateWhereInputSchema),z.lazy(() => UpdateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumUPDATE_STATUSFilterSchema),z.lazy(() => UPDATE_STATUSSchema) ]).optional(),
  version: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  asset: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  updatePoints: z.lazy(() => UpdatePointListRelationFilterSchema).optional()
}).strict();

export const UpdateOrderByWithRelationInputSchema: z.ZodType<Prisma.UpdateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  asset: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  updatePoints: z.lazy(() => UpdatePointOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UpdateWhereUniqueInputSchema: z.ZodType<Prisma.UpdateWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => UpdateWhereInputSchema),z.lazy(() => UpdateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdateWhereInputSchema),z.lazy(() => UpdateWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumUPDATE_STATUSFilterSchema),z.lazy(() => UPDATE_STATUSSchema) ]).optional(),
  version: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  asset: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  updatePoints: z.lazy(() => UpdatePointListRelationFilterSchema).optional()
}).strict());

export const UpdateOrderByWithAggregationInputSchema: z.ZodType<Prisma.UpdateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  asset: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UpdateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UpdateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UpdateMinOrderByAggregateInputSchema).optional()
}).strict();

export const UpdateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UpdateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UpdateScalarWhereWithAggregatesInputSchema),z.lazy(() => UpdateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdateScalarWhereWithAggregatesInputSchema),z.lazy(() => UpdateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumUPDATE_STATUSWithAggregatesFilterSchema),z.lazy(() => UPDATE_STATUSSchema) ]).optional(),
  version: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  asset: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UpdatePointWhereInputSchema: z.ZodType<Prisma.UpdatePointWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UpdatePointWhereInputSchema),z.lazy(() => UpdatePointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdatePointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdatePointWhereInputSchema),z.lazy(() => UpdatePointWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  update: z.union([ z.lazy(() => UpdateRelationFilterSchema),z.lazy(() => UpdateWhereInputSchema) ]).optional(),
}).strict();

export const UpdatePointOrderByWithRelationInputSchema: z.ZodType<Prisma.UpdatePointOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  updateId: z.lazy(() => SortOrderSchema).optional(),
  update: z.lazy(() => UpdateOrderByWithRelationInputSchema).optional()
}).strict();

export const UpdatePointWhereUniqueInputSchema: z.ZodType<Prisma.UpdatePointWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => UpdatePointWhereInputSchema),z.lazy(() => UpdatePointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdatePointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdatePointWhereInputSchema),z.lazy(() => UpdatePointWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  update: z.union([ z.lazy(() => UpdateRelationFilterSchema),z.lazy(() => UpdateWhereInputSchema) ]).optional(),
}).strict());

export const UpdatePointOrderByWithAggregationInputSchema: z.ZodType<Prisma.UpdatePointOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  updateId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UpdatePointCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UpdatePointMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UpdatePointMinOrderByAggregateInputSchema).optional()
}).strict();

export const UpdatePointScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UpdatePointScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UpdatePointScalarWhereWithAggregatesInputSchema),z.lazy(() => UpdatePointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdatePointScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdatePointScalarWhereWithAggregatesInputSchema),z.lazy(() => UpdatePointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updateId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string(),
  product: z.lazy(() => ProductCreateNestedManyWithoutBelongsToInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string(),
  product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutBelongsToInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateManyWithoutBelongsToNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUncheckedUpdateManyWithoutBelongsToNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  belongsTo: z.lazy(() => UserCreateNestedOneWithoutProductInputSchema),
  updates: z.lazy(() => UpdateCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  belongsToId: z.string(),
  updates: z.lazy(() => UpdateUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  belongsTo: z.lazy(() => UserUpdateOneRequiredWithoutProductNestedInputSchema).optional(),
  updates: z.lazy(() => UpdateUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  belongsToId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updates: z.lazy(() => UpdateUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  belongsToId: z.string()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  belongsToId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdateCreateInputSchema: z.ZodType<Prisma.UpdateCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string(),
  product: z.lazy(() => ProductCreateNestedOneWithoutUpdatesInputSchema),
  updatePoints: z.lazy(() => UpdatePointCreateNestedManyWithoutUpdateInputSchema).optional()
}).strict();

export const UpdateUncheckedCreateInputSchema: z.ZodType<Prisma.UpdateUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string(),
  productId: z.string(),
  updatePoints: z.lazy(() => UpdatePointUncheckedCreateNestedManyWithoutUpdateInputSchema).optional()
}).strict();

export const UpdateUpdateInputSchema: z.ZodType<Prisma.UpdateUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutUpdatesNestedInputSchema).optional(),
  updatePoints: z.lazy(() => UpdatePointUpdateManyWithoutUpdateNestedInputSchema).optional()
}).strict();

export const UpdateUncheckedUpdateInputSchema: z.ZodType<Prisma.UpdateUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatePoints: z.lazy(() => UpdatePointUncheckedUpdateManyWithoutUpdateNestedInputSchema).optional()
}).strict();

export const UpdateCreateManyInputSchema: z.ZodType<Prisma.UpdateCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string(),
  productId: z.string()
}).strict();

export const UpdateUpdateManyMutationInputSchema: z.ZodType<Prisma.UpdateUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UpdateUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdatePointCreateInputSchema: z.ZodType<Prisma.UpdatePointCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  description: z.string(),
  update: z.lazy(() => UpdateCreateNestedOneWithoutUpdatePointsInputSchema)
}).strict();

export const UpdatePointUncheckedCreateInputSchema: z.ZodType<Prisma.UpdatePointUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  description: z.string(),
  updateId: z.string()
}).strict();

export const UpdatePointUpdateInputSchema: z.ZodType<Prisma.UpdatePointUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.lazy(() => UpdateUpdateOneRequiredWithoutUpdatePointsNestedInputSchema).optional()
}).strict();

export const UpdatePointUncheckedUpdateInputSchema: z.ZodType<Prisma.UpdatePointUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updateId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdatePointCreateManyInputSchema: z.ZodType<Prisma.UpdatePointCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  description: z.string(),
  updateId: z.string()
}).strict();

export const UpdatePointUpdateManyMutationInputSchema: z.ZodType<Prisma.UpdatePointUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdatePointUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UpdatePointUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updateId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.object({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UpdateListRelationFilterSchema: z.ZodType<Prisma.UpdateListRelationFilter> = z.object({
  every: z.lazy(() => UpdateWhereInputSchema).optional(),
  some: z.lazy(() => UpdateWhereInputSchema).optional(),
  none: z.lazy(() => UpdateWhereInputSchema).optional()
}).strict();

export const UpdateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UpdateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  belongsToId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  belongsToId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  belongsToId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const EnumUPDATE_STATUSFilterSchema: z.ZodType<Prisma.EnumUPDATE_STATUSFilter> = z.object({
  equals: z.lazy(() => UPDATE_STATUSSchema).optional(),
  in: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  notIn: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => NestedEnumUPDATE_STATUSFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ProductRelationFilterSchema: z.ZodType<Prisma.ProductRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const UpdatePointListRelationFilterSchema: z.ZodType<Prisma.UpdatePointListRelationFilter> = z.object({
  every: z.lazy(() => UpdatePointWhereInputSchema).optional(),
  some: z.lazy(() => UpdatePointWhereInputSchema).optional(),
  none: z.lazy(() => UpdatePointWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const UpdatePointOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UpdatePointOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UpdateCountOrderByAggregateInputSchema: z.ZodType<Prisma.UpdateCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  asset: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UpdateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UpdateMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  asset: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UpdateMinOrderByAggregateInputSchema: z.ZodType<Prisma.UpdateMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  asset: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumUPDATE_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUPDATE_STATUSWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UPDATE_STATUSSchema).optional(),
  in: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  notIn: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => NestedEnumUPDATE_STATUSWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUPDATE_STATUSFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUPDATE_STATUSFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const UpdateRelationFilterSchema: z.ZodType<Prisma.UpdateRelationFilter> = z.object({
  is: z.lazy(() => UpdateWhereInputSchema).optional(),
  isNot: z.lazy(() => UpdateWhereInputSchema).optional()
}).strict();

export const UpdatePointCountOrderByAggregateInputSchema: z.ZodType<Prisma.UpdatePointCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  updateId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UpdatePointMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UpdatePointMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  updateId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UpdatePointMinOrderByAggregateInputSchema: z.ZodType<Prisma.UpdatePointMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  updateId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCreateNestedManyWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutBelongsToInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBelongsToInputSchema),z.lazy(() => ProductCreateWithoutBelongsToInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBelongsToInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutBelongsToInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBelongsToInputSchema),z.lazy(() => ProductCreateWithoutBelongsToInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBelongsToInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const ProductUpdateManyWithoutBelongsToNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutBelongsToNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBelongsToInputSchema),z.lazy(() => ProductCreateWithoutBelongsToInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutBelongsToInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutBelongsToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBelongsToInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutBelongsToInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutBelongsToInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutBelongsToInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutBelongsToInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutBelongsToNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBelongsToNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBelongsToInputSchema),z.lazy(() => ProductCreateWithoutBelongsToInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBelongsToInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutBelongsToInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutBelongsToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBelongsToInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutBelongsToInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutBelongsToInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutBelongsToInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutBelongsToInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutProductInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProductInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProductInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UpdateCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.UpdateCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => UpdateCreateWithoutProductInputSchema),z.lazy(() => UpdateCreateWithoutProductInputSchema).array(),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema),z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdateCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UpdateUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.UpdateUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => UpdateCreateWithoutProductInputSchema),z.lazy(() => UpdateCreateWithoutProductInputSchema).array(),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema),z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdateCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserUpdateOneRequiredWithoutProductNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProductInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProductInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProductInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutProductInputSchema),z.lazy(() => UserUpdateWithoutProductInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProductInputSchema) ]).optional(),
}).strict();

export const UpdateUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.UpdateUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => UpdateCreateWithoutProductInputSchema),z.lazy(() => UpdateCreateWithoutProductInputSchema).array(),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema),z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UpdateUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => UpdateUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdateCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UpdateUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => UpdateUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UpdateUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => UpdateUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UpdateScalarWhereInputSchema),z.lazy(() => UpdateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UpdateUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.UpdateUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => UpdateCreateWithoutProductInputSchema),z.lazy(() => UpdateCreateWithoutProductInputSchema).array(),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema),z.lazy(() => UpdateCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UpdateUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => UpdateUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdateCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UpdateWhereUniqueInputSchema),z.lazy(() => UpdateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UpdateUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => UpdateUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UpdateUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => UpdateUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UpdateScalarWhereInputSchema),z.lazy(() => UpdateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedOneWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutUpdatesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutUpdatesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUpdatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutUpdatesInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const UpdatePointCreateNestedManyWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointCreateNestedManyWithoutUpdateInput> = z.object({
  create: z.union([ z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema).array(),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdatePointCreateManyUpdateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UpdatePointUncheckedCreateNestedManyWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUncheckedCreateNestedManyWithoutUpdateInput> = z.object({
  create: z.union([ z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema).array(),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdatePointCreateManyUpdateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumUPDATE_STATUSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUPDATE_STATUSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UPDATE_STATUSSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const ProductUpdateOneRequiredWithoutUpdatesNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutUpdatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutUpdatesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUpdatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutUpdatesInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutUpdatesInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutUpdatesInputSchema),z.lazy(() => ProductUpdateWithoutUpdatesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutUpdatesInputSchema) ]).optional(),
}).strict();

export const UpdatePointUpdateManyWithoutUpdateNestedInputSchema: z.ZodType<Prisma.UpdatePointUpdateManyWithoutUpdateNestedInput> = z.object({
  create: z.union([ z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema).array(),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UpdatePointUpsertWithWhereUniqueWithoutUpdateInputSchema),z.lazy(() => UpdatePointUpsertWithWhereUniqueWithoutUpdateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdatePointCreateManyUpdateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UpdatePointUpdateWithWhereUniqueWithoutUpdateInputSchema),z.lazy(() => UpdatePointUpdateWithWhereUniqueWithoutUpdateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UpdatePointUpdateManyWithWhereWithoutUpdateInputSchema),z.lazy(() => UpdatePointUpdateManyWithWhereWithoutUpdateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UpdatePointScalarWhereInputSchema),z.lazy(() => UpdatePointScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UpdatePointUncheckedUpdateManyWithoutUpdateNestedInputSchema: z.ZodType<Prisma.UpdatePointUncheckedUpdateManyWithoutUpdateNestedInput> = z.object({
  create: z.union([ z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema).array(),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema),z.lazy(() => UpdatePointCreateOrConnectWithoutUpdateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UpdatePointUpsertWithWhereUniqueWithoutUpdateInputSchema),z.lazy(() => UpdatePointUpsertWithWhereUniqueWithoutUpdateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UpdatePointCreateManyUpdateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UpdatePointWhereUniqueInputSchema),z.lazy(() => UpdatePointWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UpdatePointUpdateWithWhereUniqueWithoutUpdateInputSchema),z.lazy(() => UpdatePointUpdateWithWhereUniqueWithoutUpdateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UpdatePointUpdateManyWithWhereWithoutUpdateInputSchema),z.lazy(() => UpdatePointUpdateManyWithWhereWithoutUpdateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UpdatePointScalarWhereInputSchema),z.lazy(() => UpdatePointScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UpdateCreateNestedOneWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateCreateNestedOneWithoutUpdatePointsInput> = z.object({
  create: z.union([ z.lazy(() => UpdateCreateWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutUpdatePointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UpdateCreateOrConnectWithoutUpdatePointsInputSchema).optional(),
  connect: z.lazy(() => UpdateWhereUniqueInputSchema).optional()
}).strict();

export const UpdateUpdateOneRequiredWithoutUpdatePointsNestedInputSchema: z.ZodType<Prisma.UpdateUpdateOneRequiredWithoutUpdatePointsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UpdateCreateWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutUpdatePointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UpdateCreateOrConnectWithoutUpdatePointsInputSchema).optional(),
  upsert: z.lazy(() => UpdateUpsertWithoutUpdatePointsInputSchema).optional(),
  connect: z.lazy(() => UpdateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UpdateUpdateToOneWithWhereWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUpdateWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUncheckedUpdateWithoutUpdatePointsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedEnumUPDATE_STATUSFilterSchema: z.ZodType<Prisma.NestedEnumUPDATE_STATUSFilter> = z.object({
  equals: z.lazy(() => UPDATE_STATUSSchema).optional(),
  in: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  notIn: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => NestedEnumUPDATE_STATUSFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumUPDATE_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUPDATE_STATUSWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UPDATE_STATUSSchema).optional(),
  in: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  notIn: z.lazy(() => UPDATE_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => NestedEnumUPDATE_STATUSWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUPDATE_STATUSFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUPDATE_STATUSFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ProductCreateWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductCreateWithoutBelongsToInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  updates: z.lazy(() => UpdateCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutBelongsToInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  updates: z.lazy(() => UpdateUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBelongsToInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema) ]),
}).strict();

export const ProductCreateManyBelongsToInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyBelongsToInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyBelongsToInputSchema),z.lazy(() => ProductCreateManyBelongsToInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutBelongsToInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutBelongsToInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBelongsToInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutBelongsToInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutBelongsToInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutBelongsToInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutBelongsToInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutBelongsToInputSchema) ]),
}).strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  belongsToId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutProductInputSchema: z.ZodType<Prisma.UserCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string()
}).strict();

export const UserUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string()
}).strict();

export const UserCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutProductInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const UpdateCreateWithoutProductInputSchema: z.ZodType<Prisma.UpdateCreateWithoutProductInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string(),
  updatePoints: z.lazy(() => UpdatePointCreateNestedManyWithoutUpdateInputSchema).optional()
}).strict();

export const UpdateUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.UpdateUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string(),
  updatePoints: z.lazy(() => UpdatePointUncheckedCreateNestedManyWithoutUpdateInputSchema).optional()
}).strict();

export const UpdateCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.UpdateCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => UpdateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UpdateCreateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const UpdateCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.UpdateCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UpdateCreateManyProductInputSchema),z.lazy(() => UpdateCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutProductInputSchema: z.ZodType<Prisma.UserUpsertWithoutProductInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutProductInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutProductInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutProductInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutProductInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const UserUpdateWithoutProductInputSchema: z.ZodType<Prisma.UserUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdateUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.UpdateUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => UpdateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UpdateUpdateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => UpdateCreateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const UpdateUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.UpdateUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => UpdateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UpdateUpdateWithoutProductInputSchema),z.lazy(() => UpdateUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const UpdateUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.UpdateUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => UpdateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UpdateUpdateManyMutationInputSchema),z.lazy(() => UpdateUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export const UpdateScalarWhereInputSchema: z.ZodType<Prisma.UpdateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UpdateScalarWhereInputSchema),z.lazy(() => UpdateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdateScalarWhereInputSchema),z.lazy(() => UpdateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumUPDATE_STATUSFilterSchema),z.lazy(() => UPDATE_STATUSSchema) ]).optional(),
  version: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  asset: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductCreateWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductCreateWithoutUpdatesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  belongsTo: z.lazy(() => UserCreateNestedOneWithoutProductInputSchema)
}).strict();

export const ProductUncheckedCreateWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutUpdatesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  belongsToId: z.string()
}).strict();

export const ProductCreateOrConnectWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutUpdatesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutUpdatesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUpdatesInputSchema) ]),
}).strict();

export const UpdatePointCreateWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointCreateWithoutUpdateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  description: z.string()
}).strict();

export const UpdatePointUncheckedCreateWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUncheckedCreateWithoutUpdateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  description: z.string()
}).strict();

export const UpdatePointCreateOrConnectWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointCreateOrConnectWithoutUpdateInput> = z.object({
  where: z.lazy(() => UpdatePointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema) ]),
}).strict();

export const UpdatePointCreateManyUpdateInputEnvelopeSchema: z.ZodType<Prisma.UpdatePointCreateManyUpdateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UpdatePointCreateManyUpdateInputSchema),z.lazy(() => UpdatePointCreateManyUpdateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductUpsertWithoutUpdatesInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutUpdatesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutUpdatesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutUpdatesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUpdatesInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutUpdatesInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutUpdatesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutUpdatesInputSchema) ]),
}).strict();

export const ProductUpdateWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutUpdatesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  belongsTo: z.lazy(() => UserUpdateOneRequiredWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutUpdatesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutUpdatesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  belongsToId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdatePointUpsertWithWhereUniqueWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUpsertWithWhereUniqueWithoutUpdateInput> = z.object({
  where: z.lazy(() => UpdatePointWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UpdatePointUpdateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedUpdateWithoutUpdateInputSchema) ]),
  create: z.union([ z.lazy(() => UpdatePointCreateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedCreateWithoutUpdateInputSchema) ]),
}).strict();

export const UpdatePointUpdateWithWhereUniqueWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUpdateWithWhereUniqueWithoutUpdateInput> = z.object({
  where: z.lazy(() => UpdatePointWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UpdatePointUpdateWithoutUpdateInputSchema),z.lazy(() => UpdatePointUncheckedUpdateWithoutUpdateInputSchema) ]),
}).strict();

export const UpdatePointUpdateManyWithWhereWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUpdateManyWithWhereWithoutUpdateInput> = z.object({
  where: z.lazy(() => UpdatePointScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UpdatePointUpdateManyMutationInputSchema),z.lazy(() => UpdatePointUncheckedUpdateManyWithoutUpdateInputSchema) ]),
}).strict();

export const UpdatePointScalarWhereInputSchema: z.ZodType<Prisma.UpdatePointScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UpdatePointScalarWhereInputSchema),z.lazy(() => UpdatePointScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UpdatePointScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UpdatePointScalarWhereInputSchema),z.lazy(() => UpdatePointScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UpdateCreateWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateCreateWithoutUpdatePointsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string(),
  product: z.lazy(() => ProductCreateNestedOneWithoutUpdatesInputSchema)
}).strict();

export const UpdateUncheckedCreateWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateUncheckedCreateWithoutUpdatePointsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string(),
  productId: z.string()
}).strict();

export const UpdateCreateOrConnectWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateCreateOrConnectWithoutUpdatePointsInput> = z.object({
  where: z.lazy(() => UpdateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UpdateCreateWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutUpdatePointsInputSchema) ]),
}).strict();

export const UpdateUpsertWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateUpsertWithoutUpdatePointsInput> = z.object({
  update: z.union([ z.lazy(() => UpdateUpdateWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUncheckedUpdateWithoutUpdatePointsInputSchema) ]),
  create: z.union([ z.lazy(() => UpdateCreateWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUncheckedCreateWithoutUpdatePointsInputSchema) ]),
  where: z.lazy(() => UpdateWhereInputSchema).optional()
}).strict();

export const UpdateUpdateToOneWithWhereWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateUpdateToOneWithWhereWithoutUpdatePointsInput> = z.object({
  where: z.lazy(() => UpdateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UpdateUpdateWithoutUpdatePointsInputSchema),z.lazy(() => UpdateUncheckedUpdateWithoutUpdatePointsInputSchema) ]),
}).strict();

export const UpdateUpdateWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateUpdateWithoutUpdatePointsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutUpdatesNestedInputSchema).optional()
}).strict();

export const UpdateUncheckedUpdateWithoutUpdatePointsInputSchema: z.ZodType<Prisma.UpdateUncheckedUpdateWithoutUpdatePointsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyBelongsToInputSchema: z.ZodType<Prisma.ProductCreateManyBelongsToInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string()
}).strict();

export const ProductUpdateWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUpdateWithoutBelongsToInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updates: z.lazy(() => UpdateUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutBelongsToInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updates: z.lazy(() => UpdateUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutBelongsToInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBelongsToInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdateCreateManyProductInputSchema: z.ZodType<Prisma.UpdateCreateManyProductInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  body: z.string(),
  status: z.lazy(() => UPDATE_STATUSSchema).optional(),
  version: z.string().optional().nullable(),
  asset: z.string()
}).strict();

export const UpdateUpdateWithoutProductInputSchema: z.ZodType<Prisma.UpdateUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatePoints: z.lazy(() => UpdatePointUpdateManyWithoutUpdateNestedInputSchema).optional()
}).strict();

export const UpdateUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.UpdateUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatePoints: z.lazy(() => UpdatePointUncheckedUpdateManyWithoutUpdateNestedInputSchema).optional()
}).strict();

export const UpdateUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.UpdateUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UPDATE_STATUSSchema),z.lazy(() => EnumUPDATE_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  asset: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdatePointCreateManyUpdateInputSchema: z.ZodType<Prisma.UpdatePointCreateManyUpdateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  description: z.string()
}).strict();

export const UpdatePointUpdateWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUpdateWithoutUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdatePointUncheckedUpdateWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUncheckedUpdateWithoutUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UpdatePointUncheckedUpdateManyWithoutUpdateInputSchema: z.ZodType<Prisma.UpdatePointUncheckedUpdateManyWithoutUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const UpdateFindFirstArgsSchema: z.ZodType<Prisma.UpdateFindFirstArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  where: UpdateWhereInputSchema.optional(),
  orderBy: z.union([ UpdateOrderByWithRelationInputSchema.array(),UpdateOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UpdateScalarFieldEnumSchema,UpdateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UpdateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UpdateFindFirstOrThrowArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  where: UpdateWhereInputSchema.optional(),
  orderBy: z.union([ UpdateOrderByWithRelationInputSchema.array(),UpdateOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UpdateScalarFieldEnumSchema,UpdateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UpdateFindManyArgsSchema: z.ZodType<Prisma.UpdateFindManyArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  where: UpdateWhereInputSchema.optional(),
  orderBy: z.union([ UpdateOrderByWithRelationInputSchema.array(),UpdateOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UpdateScalarFieldEnumSchema,UpdateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UpdateAggregateArgsSchema: z.ZodType<Prisma.UpdateAggregateArgs> = z.object({
  where: UpdateWhereInputSchema.optional(),
  orderBy: z.union([ UpdateOrderByWithRelationInputSchema.array(),UpdateOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UpdateGroupByArgsSchema: z.ZodType<Prisma.UpdateGroupByArgs> = z.object({
  where: UpdateWhereInputSchema.optional(),
  orderBy: z.union([ UpdateOrderByWithAggregationInputSchema.array(),UpdateOrderByWithAggregationInputSchema ]).optional(),
  by: UpdateScalarFieldEnumSchema.array(),
  having: UpdateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UpdateFindUniqueArgsSchema: z.ZodType<Prisma.UpdateFindUniqueArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  where: UpdateWhereUniqueInputSchema,
}).strict() ;

export const UpdateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UpdateFindUniqueOrThrowArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  where: UpdateWhereUniqueInputSchema,
}).strict() ;

export const UpdatePointFindFirstArgsSchema: z.ZodType<Prisma.UpdatePointFindFirstArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  where: UpdatePointWhereInputSchema.optional(),
  orderBy: z.union([ UpdatePointOrderByWithRelationInputSchema.array(),UpdatePointOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdatePointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UpdatePointScalarFieldEnumSchema,UpdatePointScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UpdatePointFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UpdatePointFindFirstOrThrowArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  where: UpdatePointWhereInputSchema.optional(),
  orderBy: z.union([ UpdatePointOrderByWithRelationInputSchema.array(),UpdatePointOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdatePointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UpdatePointScalarFieldEnumSchema,UpdatePointScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UpdatePointFindManyArgsSchema: z.ZodType<Prisma.UpdatePointFindManyArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  where: UpdatePointWhereInputSchema.optional(),
  orderBy: z.union([ UpdatePointOrderByWithRelationInputSchema.array(),UpdatePointOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdatePointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UpdatePointScalarFieldEnumSchema,UpdatePointScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UpdatePointAggregateArgsSchema: z.ZodType<Prisma.UpdatePointAggregateArgs> = z.object({
  where: UpdatePointWhereInputSchema.optional(),
  orderBy: z.union([ UpdatePointOrderByWithRelationInputSchema.array(),UpdatePointOrderByWithRelationInputSchema ]).optional(),
  cursor: UpdatePointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UpdatePointGroupByArgsSchema: z.ZodType<Prisma.UpdatePointGroupByArgs> = z.object({
  where: UpdatePointWhereInputSchema.optional(),
  orderBy: z.union([ UpdatePointOrderByWithAggregationInputSchema.array(),UpdatePointOrderByWithAggregationInputSchema ]).optional(),
  by: UpdatePointScalarFieldEnumSchema.array(),
  having: UpdatePointScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UpdatePointFindUniqueArgsSchema: z.ZodType<Prisma.UpdatePointFindUniqueArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  where: UpdatePointWhereUniqueInputSchema,
}).strict() ;

export const UpdatePointFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UpdatePointFindUniqueOrThrowArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  where: UpdatePointWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict() ;

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict() ;

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict() ;

export const UpdateCreateArgsSchema: z.ZodType<Prisma.UpdateCreateArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  data: z.union([ UpdateCreateInputSchema,UpdateUncheckedCreateInputSchema ]),
}).strict() ;

export const UpdateUpsertArgsSchema: z.ZodType<Prisma.UpdateUpsertArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  where: UpdateWhereUniqueInputSchema,
  create: z.union([ UpdateCreateInputSchema,UpdateUncheckedCreateInputSchema ]),
  update: z.union([ UpdateUpdateInputSchema,UpdateUncheckedUpdateInputSchema ]),
}).strict() ;

export const UpdateCreateManyArgsSchema: z.ZodType<Prisma.UpdateCreateManyArgs> = z.object({
  data: z.union([ UpdateCreateManyInputSchema,UpdateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UpdateDeleteArgsSchema: z.ZodType<Prisma.UpdateDeleteArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  where: UpdateWhereUniqueInputSchema,
}).strict() ;

export const UpdateUpdateArgsSchema: z.ZodType<Prisma.UpdateUpdateArgs> = z.object({
  select: UpdateSelectSchema.optional(),
  include: UpdateIncludeSchema.optional(),
  data: z.union([ UpdateUpdateInputSchema,UpdateUncheckedUpdateInputSchema ]),
  where: UpdateWhereUniqueInputSchema,
}).strict() ;

export const UpdateUpdateManyArgsSchema: z.ZodType<Prisma.UpdateUpdateManyArgs> = z.object({
  data: z.union([ UpdateUpdateManyMutationInputSchema,UpdateUncheckedUpdateManyInputSchema ]),
  where: UpdateWhereInputSchema.optional(),
}).strict() ;

export const UpdateDeleteManyArgsSchema: z.ZodType<Prisma.UpdateDeleteManyArgs> = z.object({
  where: UpdateWhereInputSchema.optional(),
}).strict() ;

export const UpdatePointCreateArgsSchema: z.ZodType<Prisma.UpdatePointCreateArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  data: z.union([ UpdatePointCreateInputSchema,UpdatePointUncheckedCreateInputSchema ]),
}).strict() ;

export const UpdatePointUpsertArgsSchema: z.ZodType<Prisma.UpdatePointUpsertArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  where: UpdatePointWhereUniqueInputSchema,
  create: z.union([ UpdatePointCreateInputSchema,UpdatePointUncheckedCreateInputSchema ]),
  update: z.union([ UpdatePointUpdateInputSchema,UpdatePointUncheckedUpdateInputSchema ]),
}).strict() ;

export const UpdatePointCreateManyArgsSchema: z.ZodType<Prisma.UpdatePointCreateManyArgs> = z.object({
  data: z.union([ UpdatePointCreateManyInputSchema,UpdatePointCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UpdatePointDeleteArgsSchema: z.ZodType<Prisma.UpdatePointDeleteArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  where: UpdatePointWhereUniqueInputSchema,
}).strict() ;

export const UpdatePointUpdateArgsSchema: z.ZodType<Prisma.UpdatePointUpdateArgs> = z.object({
  select: UpdatePointSelectSchema.optional(),
  include: UpdatePointIncludeSchema.optional(),
  data: z.union([ UpdatePointUpdateInputSchema,UpdatePointUncheckedUpdateInputSchema ]),
  where: UpdatePointWhereUniqueInputSchema,
}).strict() ;

export const UpdatePointUpdateManyArgsSchema: z.ZodType<Prisma.UpdatePointUpdateManyArgs> = z.object({
  data: z.union([ UpdatePointUpdateManyMutationInputSchema,UpdatePointUncheckedUpdateManyInputSchema ]),
  where: UpdatePointWhereInputSchema.optional(),
}).strict() ;

export const UpdatePointDeleteManyArgsSchema: z.ZodType<Prisma.UpdatePointDeleteManyArgs> = z.object({
  where: UpdatePointWhereInputSchema.optional(),
}).strict() ;