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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogService = void 0;
const express_1 = __importDefault(require("express"));
const configServices_1 = require("../services/configServices");
const data_1 = require("../repo/data");
const requestValidator_1 = require("../utils/requestValidator");
const productDto_1 = require("../dto/productDto");
const app = (0, express_1.default)();
exports.catalogService = new configServices_1.CatalogService(new data_1.data());
// endpoints
app.post("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { errors, input } = yield (0, requestValidator_1.RequestValidator)(productDto_1.CreateProductRequest, req.body);
        if (errors)
            return res.status(400).json(errors);
        const data = yield exports.catalogService.createProduct(input);
        return res.status(201).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
app.patch("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { errors, input } = yield (0, requestValidator_1.RequestValidator)(productDto_1.UpdateProductRequest, req.body);
        const id = parseInt(req.params.id) || 0;
        if (errors)
            return res.status(400).json(errors);
        const data = yield exports.catalogService.updateProduct(Object.assign({ id }, input));
        return res.status(200).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = Number(req.query["limit"] || 10);
    const offset = Number(req.query["offset"] || 1);
    try {
        const data = yield exports.catalogService.getProducts(limit, offset);
        return res.status(200).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
app.get("/products/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id) || 0;
    try {
        const data = yield exports.catalogService.getProduct(id);
        return res.status(200).json(data);
    }
    catch (error) {
        return next(error);
    }
}));
app.delete("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id) || 0;
    try {
        const data = yield exports.catalogService.deleteProduct(id);
        return res.status(200).json(data);
    }
    catch (error) {
        const err = error;
        return res.status(500).json(err.message);
    }
}));
exports.default = app;
