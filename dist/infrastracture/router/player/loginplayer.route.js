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
exports.loginPlayer = void 0;
const loginPlayerController_provider_1 = require("../../providers/player/loginPlayerController.provider");
const loginPlayer = ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = input;
    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    const payload = yield loginPlayerController_provider_1.LoginPlayerControllerProvider.getController().loginPlayer(email, password);
    return {
        token: payload.token,
        id: payload.id,
    };
});
exports.loginPlayer = loginPlayer;
