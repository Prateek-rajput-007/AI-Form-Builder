import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: 'configs/schema.ts',
  out: './drizzle',
  dialect:'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_sxWIGz4EU8in@ep-broad-haze-a5eortd1-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
});
