import * as helper from './helpers'
import * as type from '../types'

export const vkrunTest = (app: any): type.VkrunTest => {
  const createMethod = async (method: string, path: any, data: any, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    const httpRequest: any = helper.createHttpRequest({
      method,
      path,
      headers: options?.headers ?? {},
      data,
      host: 'example.com',
      port: 3051
    })

    const httpResponse = helper.createHttpResponse(httpRequest)
    const serverResponse = await app.serverMock(httpRequest, httpResponse)
    httpRequest.abort()

    return {
      statusCode: serverResponse.statusCode,
      headers: serverResponse.headers,
      data: helper.formatResponseData(serverResponse),
      statusText: serverResponse.statusText
    }
  }

  const get = async (path: any, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    return await createMethod('GET', path, '', options)
  }

  const post = async (path: any, data: Record<string, any>, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    return await createMethod('POST', path, data, options)
  }

  const put = async (path: any, data: Record<string, any>, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    return await createMethod('PUT', path, data, options)
  }

  const patch = async (path: any, data: Record<string, any>, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    return await createMethod('PATCH', path, data, options)
  }

  const remove = async (path: any, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    return await createMethod('DELETE', path, '', options)
  }

  const head = async (path: any, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    return await createMethod('HEAD', path, '', options)
  }

  const options = async (path: any, options?: Record<string, any>): Promise<type.VkrunTestCreateMethod> => {
    return await createMethod('OPTIONS', path, '', options)
  }

  return { get, post, put, patch, delete: remove, head, options }
}