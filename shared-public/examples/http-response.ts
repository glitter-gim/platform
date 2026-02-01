import { v1 } from "../src/index.js"

type UserDto = {
  id: string
  email: string
}

export const getUserResponse = (found: boolean) => {
  if (!found) {
    return v1.http.apiErrorV1(
      v1.errors.ErrorCodeV1.NOT_FOUND,
      "User not found"
    )
  }

  const user: UserDto = {
    id: "u_123",
    email: "user@example.com"
  }

  return v1.http.apiOkV1(user)
}
