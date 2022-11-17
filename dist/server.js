"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helloRoute_1 = __importDefault(require("./routes/helloRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    res.send('App is running');
});
app.use('/api/hello', helloRoute_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
