"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
function hello(req, res) {
    res.status(200).json({ text: 'hello' });
}
exports.hello = hello;
