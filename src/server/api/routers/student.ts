import { z } from "zod";

import {
  createTRPCRouter, protectedProcedure, publicProcedure,
} from "@/server/api/trpc";

const idSchema = z.object({ id: z.string()})

const studentSchema = z.object({
  name: z.string(),
  email: z.string()
})

const studentUpdateSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string()
})

export const studentRouter = createTRPCRouter({

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.student.findMany()
  }),

  getOne: protectedProcedure
    .input(idSchema)
    .query(async ({ input, ctx }) => {
      return await ctx.db.student.findUnique({
        where: idSchema.parse(input)
      })
    }),

  create: protectedProcedure
    .input(studentSchema)
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.student.create({
        data: studentSchema.parse(input)
      })
    }),

  update: protectedProcedure
   .input(studentUpdateSchema)
   .mutation(async ({ input, ctx}) => {
      return await ctx.db.student.update({
        where: idSchema.parse(input),
        data: studentUpdateSchema.parse(input)
      })
  }),

  delete: protectedProcedure
    .input(idSchema)
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.student.delete({
        where: idSchema.parse(input)
      })
    })
  
})