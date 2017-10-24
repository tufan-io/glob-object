
import * as engchk from 'runtime-engine-check';
engchk(); // checks node version matches spec in package.json

import * as minimatch from 'minimatch';

const makeGlobbable = {
  _targetKeys: null,
  get(target, key) {
    this._targetKeys = this._targetKeys || Object.keys(target);
    return this._targetKeys.reduce((match, glob) => {
      match = match || (minimatch(key, glob) ? target[glob] : undefined);
      return match;
    }, undefined);
  }
};

/**
 * Allows using glob-pattern(s) as object keys.
 * Accessing via concrete string keys returns the
 * first glob-matched value.
 *
 * @export
 * @param {any} obj
 * @returns
 */
export function GlobProps(regularObject) {
  return new Proxy(regularObject, makeGlobbable);
}
