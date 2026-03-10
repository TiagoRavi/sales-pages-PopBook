declare global {
  interface Window {
    ttq?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

export function trackTikTok(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.ttq) return;
  window.ttq.track(event, data || {});
}
