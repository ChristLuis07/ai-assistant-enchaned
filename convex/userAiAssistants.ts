import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const InsertSelectedAssistants = mutation({
    args: {
        records:v.any(),
        uid:v.id('users')
    },
    handler:async(ctx,args) => {
        const insertedIds = await Promise.all(
            args.records.map(async (record:any) => await ctx.db.insert("userAiAssistants",{
                ...record,
                aiModelId:'OpenAI: GPT-4o-mini',
                uid:args.uid
            }) 
            )
        );
        return insertedIds;
    }

})

export const GetAllUserAssistants = query({
    args: {

        uid:v.id('users')
        
    },
    handler:async(ctx,args) => {
        const result = await ctx.db.query("userAiAssistants")
            .filter(q=> q.eq(q.field('uid'),args.uid))
            .collect();
            return result;
    }
})

export const UpdateUserAiAssistant = mutation({
    args: {
        id:v.id('userAiAssistants'),
        userInstruction:v.string(),
        aiModelId:v.string(),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args.id, {
            aiModelId: args.aiModelId,
            userInstruction: args.userInstruction
        });

        return result;
    }
})

export const DeeteAssistant = mutation({
    args:{
        id:v.id('userAiAssistants')
    },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    }
})