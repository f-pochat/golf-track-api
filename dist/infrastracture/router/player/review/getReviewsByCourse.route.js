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
exports.getReviewsByCourse = void 0;
const reviewController_provider_1 = require("../../../providers/player/reviewController.provider");
const getReviewsByCourse = ({ id }, req) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyTokenPlayer(token.substring(7));
    return yield reviewController_provider_1.ReviewControllerProvider.getController().getReviewsByCourse(id);
});
exports.getReviewsByCourse = getReviewsByCourse;
