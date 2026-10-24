import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The storefront is statically prerendered, so no incremental cache is needed.
// If you later add ISR / revalidation, connect an R2 cache here:
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig();
