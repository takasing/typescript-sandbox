import test from 'ava';
import { IDataService, IDataService2, isComment } from './10_unknown';

test('cannot read property test', t => {
  const service: IDataService = {
    getData() {
      return undefined;
    }
  };
  const err = t.throws(() => {
    const response = service.getData();
    // anyだとgetDate()の型テキトーでもコンパイル通る
    return response.a.b.c.d;
  }, { instanceOf: TypeError })
  t.is(err.message, "Cannot read property 'a' of undefined");
});

test('cannot read property test2', t => {
  const service: IDataService2 = {
    getData() {
      return {
        date: new Date(),
      };
    }
  };
  const err = t.throws(() => {
    const response = service.getData();
    // type guardいれてあげるとunknownでもちゃんと動く
    if (typeof response === 'string') {
      return response.toUpperCase();
    } else if (isComment(response)) {
      return response.message;
    }
    // @ts-expect-error: Object is of type 'unknown'.
    // anyじゃなくてunknownだとtype guardを必須にできる
    return response.a.b.c.d;
  }, { instanceOf: TypeError })
  // getData()でobjectを返しているのでresponse.aがundefinedでbで死ぬ
  t.is(err.message, "Cannot read property 'b' of undefined");
});
