import type { Metadata } from "next";

import LineCardAdmin from "./LineCardAdmin";

/* Not indexed and not linked from anywhere on the public site — reached only by whoever
   has the direct URL and the shared password. That's deliberately the entire access
   model: a full login system would be overkill for one internal PDF a couple of people
   replace a few times a year. */
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function LineCardAdminPage() {
  return <LineCardAdmin />;
}
