/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/page",{

/***/ "(app-pages-browser)/./messages lazy recursive ^\\.\\/.*\\.json$":
/*!********************************************************!*\
  !*** ./messages/ lazy ^\.\/.*\.json$ namespace object ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./de.json": [
		"(app-pages-browser)/./messages/de.json",
		"_app-pages-browser_messages_de_json"
	],
	"./en.json": [
		"(app-pages-browser)/./messages/en.json",
		"_app-pages-browser_messages_en_json"
	],
	"./es.json": [
		"(app-pages-browser)/./messages/es.json",
		"_app-pages-browser_messages_es_json"
	],
	"./fr.json": [
		"(app-pages-browser)/./messages/fr.json",
		"_app-pages-browser_messages_fr_json"
	],
	"./it.json": [
		"(app-pages-browser)/./messages/it.json",
		"_app-pages-browser_messages_it_json"
	],
	"./ja.json": [
		"(app-pages-browser)/./messages/ja.json",
		"_app-pages-browser_messages_ja_json"
	],
	"./pt.json": [
		"(app-pages-browser)/./messages/pt.json",
		"_app-pages-browser_messages_pt_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "(app-pages-browser)/./messages lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ })

});