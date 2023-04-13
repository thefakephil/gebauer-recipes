---
title: 'Prisma Migration Error'
date: '2023-04-12'
---

<!-- # Prisma Migration Error -->

(*For future me when I inevitably hit the same issue - and hopefully someone else who stumbles on this*) 

I hit an error when trying to update a Prisma schema (while using [Supabase](https://supabase.com/)). I needed to update a name of one of my columns so I ran a `prisma migrate` command (`npx prisma migrate dev --create-only`) -  ([link to documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)) after updating the schema and got the following error - 

>Error: db error: FATAL: bouncer config error
	   0: migration_core::state::DevDiagnostic
	             at migration-engine/core/src/state.rs:269


## Solution (what worked for me) 
Head to your .env file and update the port of your connection string to `5432` from `6543` 

### WHY?
6543 is a pooled port number which shouldn't be used when migrating, instead use the non-pooled connection string using 5432.

### Links
[Stack overflow source](https://stackoverflow.com/questions/74876237/cant-migrate-schema-using-prisma-with-supabase)

[Supabase pooled port number documentation](https://supabase.com/docs/guides/integrations/prisma#connection-pooling-with-supabase)