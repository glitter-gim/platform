export type ApiOkV1<T> = {
  ok: true
  data: T
  traceId?: string
}

export type ApiErrorV1 = {
  ok: false
  error: {
    code: string
    message: string
    details?: unknown
  }
  traceId?: string
}

export type ApiResponseV1<T> = ApiOkV1<T> | ApiErrorV1

export const apiOkV1 = <T>(data: T, traceId?: string): ApiOkV1<T> => ({ ok: true, data, traceId })

export const apiErrorV1 = (code: string, message: string, details?: unknown, traceId?: string): ApiErrorV1 => ({
  ok: false,
  error: { code, message, details },
  traceId
})
