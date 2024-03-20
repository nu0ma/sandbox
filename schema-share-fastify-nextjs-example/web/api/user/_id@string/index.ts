/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** Default Response */
    resBody: Types.UserSchemas['getUserResponse']
  }

  put: {
    status: 200
    /** Default Response */
    resBody: Types.UserSchemas['updateUserResponse']
    reqBody: Types.UserSchemas['updateUserBody']
  }

  delete: {
    status: 200
    /** Default Response */
    resBody: Types.UserSchemas['deleteUserResponse']
  }
}
