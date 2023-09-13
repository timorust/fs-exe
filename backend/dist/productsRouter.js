"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const dbConnect_1 = require("./dbConnect");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield dbConnect_1.prismaDB.films.findMany();
    res.send(data);
}));
exports.productRouter.get("/old", (req, res) => {
    res.send({ id: 2, message: "Old Product", price: 11, quantity: false });
});
