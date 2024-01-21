export const locationConfig: Array<{ keys: string[], reservedKeys?: string[] }> = [
  { keys: ['string', 'invalidValue'], reservedKeys: ['[valueName]'] },
  { keys: ['minWord', 'noMinimumWords'], reservedKeys: ['[valueName]', '[minWord]'] },
  { keys: ['uuid', 'invalidValue'], reservedKeys: ['[valueName]'] },
  { keys: ['email', 'invalidValue'], reservedKeys: ['[value]'] },
  { keys: ['maxLength', 'invalidValue'], reservedKeys: ['[valueName]', '[maxLength]'] },
  { keys: ['minLength', 'invalidValue'], reservedKeys: ['[valueName]', '[minLength]'] },
  { keys: ['number', 'invalidValue'], reservedKeys: ['[valueName]'] },
  { keys: ['float', 'invalidValue'], reservedKeys: ['[valueName]'] },
  { keys: ['integer', 'invalidValue'], reservedKeys: ['[valueName]'] },
  { keys: ['boolean', 'invalidValue'], reservedKeys: ['[valueName]'] },
  { keys: ['required', 'invalidValue'], reservedKeys: ['[valueName]'] },
  { keys: ['date', 'invalidValue'], reservedKeys: ['[valueName]', '[type]'] },
  { keys: ['dateGreaterThan', 'invalidValue'] },
  { keys: ['dateGreaterThan', 'limitExceeded'], reservedKeys: ['[valueName]'] },
  { keys: ['dateLessThan', 'invalidValue'] },
  { keys: ['dateLessThan', 'limitExceeded'], reservedKeys: ['[valueName]'] },
  { keys: ['time', 'invalidParameter'] },
  { keys: ['time', 'invalidValue'], reservedKeys: ['[value]', '[type]'] },
  { keys: ['object', 'invalidValue'] },
  { keys: ['object', 'keyAbsent'] },
  { keys: ['object', 'notIsObject'] },
  { keys: ['array', 'invalidValue'] },
  { keys: ['array', 'notIsArray'] },
  { keys: ['toEqual', 'invalidValue'] },
  { keys: ['notToEqual', 'invalidValue'] },
  { keys: ['oneOf', 'invalidValue'] },
  { keys: ['notOneOf', 'invalidValue'] }
]
