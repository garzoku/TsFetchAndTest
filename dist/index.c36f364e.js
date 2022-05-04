"use strict";
exports.__esModule = true;
exports.hello = void 0;
var $body = document.querySelector("body");
var $div = document.querySelector("div");
if ($div && $body) {
    console.log("true");
    $div.textContent = "Hello";
    $body.append($div);
}
function hello() {
    return "Hello";
}
exports.hello = hello;
var url = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(url).then(function(response) {
    return response.json();
}).then(function(response) {
    var _a;
    console.log(((_a = response.data) === null || _a === void 0 ? void 0 : _a.pokemon.name) || ""); // Safe
})["catch"](function(error) {
    var message = error instanceof Error ? error.message : "Unknown error";
    console.error(message);
}); // module.exports = hello

//# sourceMappingURL=index.c36f364e.js.map
