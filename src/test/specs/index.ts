import { test } from 'ava';

import { GlobObject } from '../..';

const expected = {
  'src/index.ts': 'isSrc',
  'src/deep/er/search.txt': 'isSrc',
  'dst/index.ts': 'isDst',
  'non-existant/glob/pattern': undefined
};

for (let key in expected) {
  const regularObj = {
    'src/**\/*.*': 'isSrc',
    'dst/**\/*.*': 'isDst'
  };
  const globObj = GlobObject(regularObj);
  test(`glob-object ${key}`, async (t) => {
    t.is(globObj[key], expected[key]);
  });
}
