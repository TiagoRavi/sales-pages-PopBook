import { trackingConfig } from "@/src/config/tracking";
import { gtmPush } from "@/src/lib/googleTagManager";
import { trackFacebook } from "@/src/lib/facebookPixel";
import { trackTikTok } from "@/src/lib/tiktokPixel";

type AnalyticsPayload = Record<string, unknown>;

export function trackEvent(event: string, payload?: AnalyticsPayload) {
  if (typeof window === "undefined" || !trackingConfig.enabled) return;

  const data = {
    event,
    ...payload,
  };

  window.dispatchEvent(
    new CustomEvent("app:analytics", {
      detail: data,
    }),
  );

  gtmPush(data);
  trackFacebook(event, payload);
  trackTikTok(event, payload);

  if (process.env.NODE_ENV !== "production") {
    console.log("[analytics]", event, payload || {});
  }
}

export function trackCheckoutClick(payload?: AnalyticsPayload) {
  trackEvent(trackingConfig.events.initiateCheckout, payload);
}

export function trackLead(payload?: AnalyticsPayload) {
  trackEvent(trackingConfig.events.lead, payload);
}

export function trackPurchaseIntent(payload?: AnalyticsPayload) {
  trackEvent(trackingConfig.events.purchaseIntent, payload);
}