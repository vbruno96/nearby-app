import z from 'zod'

const envSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url(),
  EXPO_PUBLIC_API_PORT: z.coerce.number(),
})

export const env = envSchema.parse(process.env)