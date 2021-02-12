import test from 'ava';
import { joinDirname, joinFilename } from './path';

test('join dirname test', (t) => {
  // srcではなくbuildディレクトリの中になっている
  // srcより階層が深い
  // __dirnameもbuildの中のスクリプト存在ディレクトリ
  // __dirname is
  // /Users/takasing/workspace/typescript-sandbox/build/main/lib/prisma
  t.is(
    joinDirname('../../../../package.json'),
    '/Users/takasing/workspace/typescript-sandbox/package.json'
  );
});

test('join filename test', (t) => {
  // pathを(?)joinするのでpathの最後に/がついてそこにappendされる
  // しかもjs
  t.is(
    joinFilename('.ext'),
    '/Users/takasing/workspace/typescript-sandbox/build/main/lib/prisma/path.js/.ext'
  );
});
