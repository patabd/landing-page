export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  /** Optional salt used when hashing visitor IPs for rate limiting. */
  WAITLIST_IP_SALT?: string;
}
