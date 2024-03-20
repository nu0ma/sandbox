import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './health_check'
import type { Methods as Methods1 } from './user'
import type { Methods as Methods2 } from './user/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/health_check'
  const PATH1 = '/user'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    health_check: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    user: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * @returns Default Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Default Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Default Response
           */
          put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns Default Response
           */
          $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * @returns Default Response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * @returns Default Response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @returns Default Response
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @returns Default Response
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
