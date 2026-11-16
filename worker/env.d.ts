export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  /**
   * Salt used when hashing visitor IPs for rate limiting. Required in
   * production (set as a Wrangler secret): without it the worker fails
   * closed — an unsalted SHA-256 of an IP is trivially reversible, so the
   * endpoint refuses to degrade to unsalted rate limiting.
   */
  WAITLIST_IP_SALT?: string;
}
