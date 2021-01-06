export enum ActionType {
  CREATE = 'Create',
  UPDATE = 'Update',
  DELETE = 'Delete',
  SELECT = 'Select'
}

// https://stackoverflow.com/a/50396312
export function enumKeysAsString<TEnum>(theEnum: TEnum): (keyof TEnum)[] {
  // eliminate numeric keys
  return Object.keys(theEnum)
    .filter(x => (+x)+"" !== x) as (keyof TEnum)[];
  // return some random key => なんでrandom？
  // return keys[Math.floor(Math.random()*keys.length)];
}

const keys = Object.keys(ActionType) as (keyof typeof ActionType)[];
export type ActionTypeKeys = typeof keys[number];
export function isActionType(string: unknown): string is ActionTypeKeys {
  return typeof string === 'string' && string in ActionType;
}
