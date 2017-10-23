"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engchk = require("runtime-engine-check");
engchk();
const minimatch = require("minimatch");
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
function GlobObject(regularObject) {
    return new Proxy(regularObject, makeGlobbable);
}
exports.GlobObject = GlobObject;
