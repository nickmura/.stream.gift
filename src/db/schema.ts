import { sql } from "drizzle-orm";
import { serial, text, timestamp, pgTable, decimal, boolean } from "drizzle-orm/pg-core";

export const donations = pgTable("donations", {
  id: serial("id"),
  digest: text("digest"),
  sender: text("sender"),
  sender_suins: text('sender_suins'),
  recipient: text("recipient"),
  amount: decimal("amount"),
  message: text("message"),
  completed: boolean('completed').default(sql`false`)
});

