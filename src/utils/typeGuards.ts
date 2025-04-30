// utils/typeGuards.ts
export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
      throw new Error('Value is undefined or null')
    }
  }
  