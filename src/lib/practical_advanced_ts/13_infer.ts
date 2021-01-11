export const generateId = (seed: number) => {
  return `${seed}+5`;
  // これにするとExtractedReturnTypeでnumberがとれる
  // return seed + 5;
}
type ExtractedReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// if generateId return string, Id: string
type Id = ExtractedReturnType<typeof generateId>;
export const lookupEntity = (id: Id) => {
  return {
    id: id,
    name: 'entity name',
  };
}

export type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
