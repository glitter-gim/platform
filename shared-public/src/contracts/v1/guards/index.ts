import type { PlatformEventV1 } from "../events/index.js"

export const isPlatformEventV1 = (v: unknown): v is PlatformEventV1 => {
  if (!v || typeof v !== "object") return false
  const o = v as any
  if (typeof o.type !== "string") return false
  if (!o.meta || typeof o.meta !== "object") return false
  if (o.meta.contractVersion !== "v1") return false
  if (typeof o.meta.eventId !== "string") return false
  if (typeof o.meta.occurredAt !== "string") return false
  if (typeof o.meta.source !== "string") return false
  if (!o.data || typeof o.data !== "object") return false
  return true
}
