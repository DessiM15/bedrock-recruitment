export function trackFbEvent(eventName: string) {
  if (typeof window !== "undefined" && typeof (window as unknown as Record<string, unknown>).fbq === "function") {
    (window as unknown as Record<string, (...args: unknown[]) => void>).fbq("track", eventName);
  }
}
