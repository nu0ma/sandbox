/* eslint-disable */
export type UserSchemas = {
  getUserParam: {
    id: string
  }

  getUserResponse: {
    name: string
    age: number
  }[]

  updateUserParam: {
    id: string
  }

  updateUserBody: {
    name: string
  }

  updateUserResponse: {
    name: string
    age: number
  }

  createUserBody: {
    name: string
    age: number
  }

  createUserResponse: {
    status: string
  }

  deleteUserParam: {
    id: string
  }

  deleteUserResponse: {
    status: string
  }
}
