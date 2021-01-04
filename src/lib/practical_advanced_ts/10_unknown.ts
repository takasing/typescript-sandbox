export interface IComment {
  date: Date;
  message: string;
}
export interface IDataService {
  getData(): any;
}
export interface IDataService2 {
  getData(): unknown;
}
export const isComment = (type: any): type is IComment => {
  return (<IComment>type).message !== undefined;
}
