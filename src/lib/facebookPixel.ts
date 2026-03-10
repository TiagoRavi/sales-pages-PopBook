declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackFacebook(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("trackCustom", event, data || {});
}
