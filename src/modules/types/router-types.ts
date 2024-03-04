import { IncomingMessage, ServerResponse } from 'http'

export interface Request extends IncomingMessage {
  route?: Route
  body?: Record<string, string | number | boolean | Date> | JSON | string | undefined | any
  params?: Record<string, string | number | boolean | Date>
  query?: Record<string, string | number | boolean | Date>
  session?: any
  files?: any[]
}

export type Response = ServerResponse & CustomResponseMethods

export interface CustomResponseMethods {
  status: (status: number) => Response
  json: (data: object) => void
  send: (data: any) => void
  setCookie: (name: string, value: string, options?: CookieOptions) => void
}

export interface CookieOptions {
  httpOnly?: boolean
  secure?: boolean
  maxAge?: number
  path?: string
  sameSite?: 'Strict' | 'Lax' | 'None'
  domain?: string
  priority?: 'Low' | 'Medium' | 'High'
}

export interface File {
  filename: string
  extension: string
  mime: string
  buffer: Buffer
}

export interface ErrorHandlerMiddleware {
  handle: (error: any, request: Request, response: Response, next: NextFunction) => any
}

export interface Middleware {
  handle: (request: Request, response: Response, next: NextFunction) => any
}

export interface Controller {
  handle: (request: Request, response: Response) => any
}

export type SendParam = ((cb?: () => void) => void) & ((chunk: any, cb?: () => void) => void) & ((chunk: any, encoding: BufferEncoding, cb?: () => void) => void)

export type NextFunction = () => void

export type RouteHandler = (req: Request, res: Response, next?: NextFunction) => void

export type RouteMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'

export interface Route {
  path: string
  method: RouteMethods
  handlers: RouteHandler[]
}