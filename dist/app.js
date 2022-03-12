"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
function showData(a, b) {
    return [a, b];
}
showData(1, 2);
showData("Viet", "Dung");
const app = document.querySelector('#app').innerHTML;
const product = [
    { id: 1, name: "proA" },
    { id: 2, name: "proB" },
    { id: 3, name: "proC" },
];
function getProduct(p) {
    return [p];
}
getProduct(product.map((item) => `
    <h1>${item.name}</h1>
`).join(""));

//# sourceMappingURL=app.js.map