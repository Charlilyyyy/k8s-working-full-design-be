"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' }));
app.get('/pi', (req, res) => {
    res.json({ pi: Math.PI });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
