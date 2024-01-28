import { CreateSchema } from './schema'
import { Validator } from './validator'

export interface IValidator {
  notRequired: () => NotRequiredMethod
  string: () => StringMethod
  boolean: () => DefaultReturn
  date: (type: DateTypes) => DateMethod
  alias: (valueName: string) => this
  array: () => this
  equal: (valueToCompare: any) => DefaultReturn
  schema: (schema: ObjectType, config?: ObjectConfig) => CreateSchema
  throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
  throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
  validate: (value: any) => boolean
  validateAsync: (value: any) => Promise<boolean>
  test: (value: any, valueName: string) => Tests
  testAsync: (value: any, valueName: string) => Promise<Tests>
}

export interface DefaultReturn {
  notRequired: () => NotRequiredMethod
  throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
  throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
  validate: (value: any) => boolean
  validateAsync: (value: any) => Promise<boolean>
  test: (value: any, valueName: string) => Tests
  testAsync: (value: any, valueName: string) => Promise<Tests>
}

export interface NotRequiredMethod {
  throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
  throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
  validate: (value: any) => boolean
  validateAsync: (value: any) => Promise<boolean>
  test: (value: any, valueName: string) => Tests
  testAsync: (value: any, valueName: string) => Promise<Tests>
}

export interface StringMethod extends DefaultReturn {
  minLength: (minLength: number) => MinLengthMethod
  maxLength: (maxLength: number) => MaxLengthMethod
  minWord: (minWord: number) => MinWordMethod
  email: () => EmailMethod
  UUID: () => UUIDMethod
  time: (type: TimeTypes) => TimeMethod
}

export interface EmailMethod extends DefaultReturn {}

export interface UUIDMethod extends DefaultReturn {}

export interface TimeMethod extends DefaultReturn {}

export interface MinLengthMethod extends DefaultReturn {
  maxLength: (maxLength: number) => {
    minWord: (minWord: number) => DefaultReturn
    notRequired: () => NotRequiredMethod
    throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
    throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
    validate: (value: any) => boolean
    validateAsync: (value: any) => Promise<boolean>
    test: (value: any, valueName: string) => Tests
    testAsync: (value: any, valueName: string) => Promise<Tests>
  }
  minWord: (minWord: number) => {
    maxLength: (maxLength: number) => DefaultReturn
    notRequired: () => NotRequiredMethod
    throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
    throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
    validate: (value: any) => boolean
    validateAsync: (value: any) => Promise<boolean>
    test: (value: any, valueName: string) => Tests
    testAsync: (value: any, valueName: string) => Promise<Tests>
  }
}

export interface MaxLengthMethod extends DefaultReturn {
  minLength: (minLength: number) => {
    minWord: (minWord: number) => DefaultReturn
    notRequired: () => NotRequiredMethod
    throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
    throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
    validate: (value: any) => boolean
    validateAsync: (value: any) => Promise<boolean>
    test: (value: any, valueName: string) => Tests
    testAsync: (value: any, valueName: string) => Promise<Tests>
  }
  minWord: (minWord: number) => {
    minLength: (minLength: number) => DefaultReturn
    notRequired: () => NotRequiredMethod
    throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
    throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
    validate: (value: any) => boolean
    validateAsync: (value: any) => Promise<boolean>
    test: (value: any, valueName: string) => Tests
    testAsync: (value: any, valueName: string) => Promise<Tests>
  }
}

export interface MinWordMethod extends DefaultReturn {
  minLength: (minLength: number) => {
    maxLength: (maxLength: number) => DefaultReturn
    notRequired: () => NotRequiredMethod
    throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
    throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
    validate: (value: any) => boolean
    validateAsync: (value: any) => Promise<boolean>
    test: (value: any, valueName: string) => Tests
    testAsync: (value: any, valueName: string) => Promise<Tests>
  }
  maxLength: (maxLength: number) => {
    minLength: (minLength: number) => DefaultReturn
    notRequired: () => NotRequiredMethod
    throw: (value: any, valueName: string, ClassError?: ErrorTypes) => void
    throwAsync: (value: any, valueName: string, ClassError?: ErrorTypes) => Promise<void>
    validate: (value: any) => boolean
    validateAsync: (value: any) => Promise<boolean>
    test: (value: any, valueName: string) => Tests
    testAsync: (value: any, valueName: string) => Promise<Tests>
  }
}

export interface NumberMethod extends DefaultReturn {
  float: () => DefaultReturn
  integer: () => DefaultReturn
}

export interface ObjectConfig {
  error?: ErrorTypes
}

export interface DateMethod extends DefaultReturn {
  min: (dateToCompare: Date) => MinDateMethod
  max: (dateToCompare: Date) => MaxDateMethod
}

export interface MinDateMethod extends DefaultReturn {
  max: (dateToCompare: Date) => DefaultReturn
}

export interface MaxDateMethod extends DefaultReturn {
  min: (dateToCompare: Date) => DefaultReturn
}

export type DateTypes = 'ISO8601' | 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY/MM/DD' | 'YYYY/DD/MM' | 'YYYY-MM-DD' | 'YYYY-DD-MM'

export type ErrorClass<T extends Error> = new (message?: string) => T

export type ErrorTypes = any // ErrorClass

export type ValidatePropertyKey = string

export type ValidatePropertyValue = any

export type MethodTypes = 'equal' | 'object' | 'array' | 'string' | 'email' | 'UUID' | 'minWord' | 'maxLength' | 'minLength' | 'required' | 'notRequired' | 'number' | 'float' | 'integer' | 'boolean' | 'date' | 'min' | 'max' | 'time' | 'alias'

export interface Method {
  method: MethodTypes
  minWord?: number
  maxLength?: number
  minLength?: number
  dateType?: DateTypes
  dateToCompare?: Date
  timeType?: TimeTypes
  private?: boolean
  arrayType?: ArrayTypes
  arrayRules?: any
  valueToCompare?: any
}

export type ArrayTypes = 'string' | 'number' | 'boolean' | 'any' | 'date' | 'strict' | 'object' | Record<string, Validator[]>

export type Methods = Method[]

export type ValidateItemArrayValue = string | boolean | Date | number

export type TimeTypes = 'HH:MM' | 'HH:MM:SS' | 'HH:MM:SS.MS'

export type Schema = Record<string, Validator[]>

export type ObjectType = Record<string, any>

export type SchemaConfig = ObjectConfig

export interface SetTranslationMessage {
  string?: {
    invalidValue?: string
    minWord?: string
    uuid?: string
    email?: string
    time?: string
    maxLength?: string
    minLength?: string
  }
  number?: {
    invalidValue?: string
    float?: string
    integer?: string
  }
  boolean?: {
    invalidValue?: string
  }
  required?: string
  date?: {
    invalidValue?: string
    min?: string
    max?: string
  }
  object?: {
    invalidValue?: string
    keyAbsent?: string
    notIsObject?: string
  }
  array?: {
    invalidValue?: string
    notIsArray?: string
  }
  equal?: string
  notToEqual?: {
    invalidValue?: string
  }
  oneOf?: {
    invalidValue?: string
  }
  notOneOf?: {
    invalidValue?: string
  }
}

export interface InformativeMessage {
  string: {
    invalidValue: string
    minWord: string
    uuid: string
    email: string
    time: string
    maxLength: string
    minLength: string
  }
  number: {
    invalidValue: string
    float: string
    integer: string
  }
  boolean: {
    invalidValue: string
  }
  required: string
  date: {
    invalidValue: string
    min: string
    max: string
  }
  object: {
    invalidValue: string
    keyAbsent: string
    notIsObject: string
  }
  array: {
    invalidValue: string
    notIsArray: string
  }
  equal: string
  notToEqual: {
    invalidValue: string
  }
  oneOf: {
    invalidValue: string
  }
  notOneOf: {
    invalidValue: string
  }
}

export type AnyInformativeMessage = InformativeMessage & Record<string, any>

export interface Tests {
  passedAll: boolean
  passed: number
  failed: number
  totalTests: number
  successes: SuccessTest[]
  errors: ErrorTest[]
  time: string
}

export interface ErrorTest {
  class?: string
  method?: string
  type: 'invalid param' | 'invalid value' | 'missing value' | 'missing key'
  name: string
  expect: string
  received: any
  message: string
}

export interface SuccessTest {
  class?: string
  method?: string
  name: string
  expect: string
  received: any
}

export interface ValidateMethodParams {
  keyName: string
  value: any
  schemaRules: any
  callbackValidateValue: (object: ObjectType, schema: ObjectType) => Promise<void>
  callbackUpdateTest: (test: Tests) => void
  callbackAddPassed: (success: SuccessTest) => void
  callbackAddFailed: (error: ErrorTest) => void
}

export interface SelectSchemaFormat {
  value: ObjectType
  schema: ObjectType
  callbackValidateValue: (object: ObjectType, schema: ObjectType) => Promise<void>
  callbackUpdateTest: (test: Tests) => void
  callbackAddPassed: (success: SuccessTest) => void
  callbackAddFailed: (error: ErrorTest) => void
}
