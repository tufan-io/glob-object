import { test } from 'ava';

import { GlobProps } from '../..';

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
  const globber = GlobProps(regularObj);
  test(`glob-props ${key}`, async (t) => {
    t.is(globber[key], expected[key]);
  });
}
