export type ContractMetaV1 = {
  contractVersion: "v1"
}

export type EventMetaV1 = {
  eventId: string
  occurredAt: string
  source: string
  traceId?: string
}

export type UserCreatedEventV1 = {
  type: "user.created"
  meta: ContractMetaV1 & EventMetaV1
  data: {
    userId: string
    email: string
  }
}

export type PaymentSucceededEventV1 = {
  type: "payment.succeeded"
  meta: ContractMetaV1 & EventMetaV1
  data: {
    paymentId: string
    amount: number
    currency: string
  }
}

export type PlatformEventV1 = UserCreatedEventV1 | PaymentSucceededEventV1
