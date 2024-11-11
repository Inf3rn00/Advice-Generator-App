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
const adviceNum = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const btn = document.getElementById("btn");
function fetchAdvice() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://api.adviceslip.com/advice");
            const data = yield response.json();
            console.log(data);
            adviceNum.innerText = `ADVICE # ${data.slip.id}`;
            adviceText.innerText = `${data.slip.advice}`;
        }
        catch (error) {
            console.log(error);
        }
    });
}
document.addEventListener("DOMContentLoaded", fetchAdvice);
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", fetchAdvice);
