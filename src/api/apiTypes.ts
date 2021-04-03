export interface FetchFirebase<T extends unknown> {
  (arg?: unknown): Promise<{data: T | undefined; error: string}>
}
