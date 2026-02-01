export const ErrorCodeV1 = {
  INVALID_ARGUMENT: "INVALID_ARGUMENT",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  CONFLICT: "CONFLICT",
  RATE_LIMITED: "RATE_LIMITED",
  INTERNAL: "INTERNAL"
} as const

export type ErrorCodeV1Type = typeof ErrorCodeV1[keyof typeof ErrorCodeV1]
