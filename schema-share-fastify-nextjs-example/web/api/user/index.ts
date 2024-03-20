/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 200
    /** Default Response */
    resBody: Types.UserSchemas['createUserResponse']
    reqBody: Types.UserSchemas['createUserBody']
  }
}
