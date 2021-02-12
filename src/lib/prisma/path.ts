import path from 'path';

export const joinDirname = (p: string) => {
  return path.join(__dirname, p);
};
export const joinFilename = (p: string) => {
  return path.join(__filename, p);
};
