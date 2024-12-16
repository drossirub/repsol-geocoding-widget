System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/repsol-widget-geocoding/src/config.ts":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/config.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultConfig: () => (/* binding */ defaultConfig)
/* harmony export */ });
const defaultConfig = {
    GeocodeAPI: {
        Values: "https://srvarcgisdev.nexusgeografics.com/repsol/GeocodeAPI/GeocodePros/Values",
        Upload: "https://srvarcgisdev.nexusgeografics.com/repsol/GeocodeAPI/GeocodePros/Upload",
        Descargar: "https://srvarcgisdev.nexusgeografics.com/repsol/GeocodeAPI/GeocodePros/Descargar",
        Borrar: "https://srvarcgisdev.nexusgeografics.com/repsol/GeocodeAPI/GeocodePros/Borrar",
        GetMap: "https://srvarcgisdev.nexusgeografics.com/repsol/GeocodeAPI/GeocodePros/GetMap",
    },
    gridConfig: {
        rowsPerPage: 6
    },
};


/***/ }),

/***/ "./your-extensions/widgets/repsol-widget-geocoding/src/setting/translations/default.ts":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/setting/translations/default.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Secciones
    table_config: "Configuración de la Tabla",
    geocode_api_config: "Configuración de Geocode API",
    // Labels para Geocode API
    geocode_api_values: "API Valores",
    geocode_api_upload: "API Subida",
    geocode_api_download: "API Descarga",
    geocode_api_delete: "API Borrar",
    geocode_api_get_map: "API Obtener Mapa",
    // Configuración de Tabla
    table_rows_per_page: "Filas por Página",
    // Labels tabla
    label_codigo_pedido: "Codigo Pedido",
    label_nombre_fichero: "Nombre Fichero",
    label_tipo: "Tipo",
    label_filas_procesar: "Filas procesar",
    label_descripcion: "Descripcion",
    label_estado: "Estado",
    label_fecha_solicitud: "Fecha Solicitud",
    label_fecha_fin: "Fecha Fin",
    label_log_error: "LOG_ERROR",
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/setting/setting.tsx ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/repsol-widget-geocoding/src/config.ts");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/repsol-widget-geocoding/src/setting/translations/default.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");





const Setting = (props) => {
    var _a;
    const { config, onSettingChange, id } = props;
    const onAPIChange = (key, value) => {
        const updatedConfig = config.setIn(["GeocodeAPI", key], value);
        onSettingChange({ id, config: updatedConfig });
    };
    const onRowsPerPageChange = (value) => {
        const updatedConfig = config.setIn(["gridConfig", "rowsPerPage"], value);
        onSettingChange({ id, config: updatedConfig });
    };
    const geocodeAPIOptions = [
        {
            key: "Values",
            id: "geocode_api_values",
            defaultValue: _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.GeocodeAPI.Values,
        },
        {
            key: "Upload",
            id: "geocode_api_upload",
            defaultValue: _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.GeocodeAPI.Upload,
        },
        {
            key: "Descargar",
            id: "geocode_api_download",
            defaultValue: _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.GeocodeAPI.Descargar,
        },
        {
            key: "Borrar",
            id: "geocode_api_delete",
            defaultValue: _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.GeocodeAPI.Borrar,
        },
        {
            key: "GetMap",
            id: "geocode_api_get_map",
            defaultValue: _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.GeocodeAPI.GetMap,
        },
    ];
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "geocode_api_config", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].geocode_api_config }) }, geocodeAPIOptions.map(({ key, id, defaultValue }) => {
            var _a;
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { key: key, label: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: id, defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"][id] }), flow: "wrap" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { value: String(((_a = config === null || config === void 0 ? void 0 : config.GeocodeAPI) === null || _a === void 0 ? void 0 : _a[key]) || defaultValue), onChange: (e) => onAPIChange(key, e.target.value) })));
        })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "table_config", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].table_config }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "table_rows_per_page", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].table_rows_per_page }), flow: "wrap" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.NumericInput, { value: ((_a = config === null || config === void 0 ? void 0 : config.gridConfig) === null || _a === void 0 ? void 0 : _a.rowsPerPage) ||
                        _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.gridConfig.rowsPerPage, onChange: (value) => onRowsPerPageChange(value), min: 1 })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9yZXBzb2wtd2lkZ2V0LWdlb2NvZGluZy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVPLE1BQU0sYUFBYSxHQUFXO0lBQ25DLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFDSiwrRUFBK0U7UUFDakYsTUFBTSxFQUNKLCtFQUErRTtRQUNqRixTQUFTLEVBQ1Asa0ZBQWtGO1FBQ3BGLE1BQU0sRUFDSiwrRUFBK0U7UUFDakYsTUFBTSxFQUNKLCtFQUErRTtLQUNsRjtJQUNELFVBQVUsRUFBRTtRQUNWLFdBQVcsRUFBRSxDQUFDO0tBQ2Y7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JGLGlFQUFlO0lBQ2IsWUFBWTtJQUNaLFlBQVksRUFBRSwyQkFBMkI7SUFDekMsa0JBQWtCLEVBQUUsOEJBQThCO0lBRWxELDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBRSxhQUFhO0lBQ2pDLGtCQUFrQixFQUFFLFlBQVk7SUFDaEMsb0JBQW9CLEVBQUUsY0FBYztJQUNwQyxrQkFBa0IsRUFBRSxZQUFZO0lBQ2hDLG1CQUFtQixFQUFFLGtCQUFrQjtJQUV2Qyx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUUsa0JBQWtCO0lBRXZDLGVBQWU7SUFDZixtQkFBbUIsRUFBRSxlQUFlO0lBQ3BDLG9CQUFvQixFQUFFLGdCQUFnQjtJQUN0QyxVQUFVLEVBQUUsTUFBTTtJQUNsQixvQkFBb0IsRUFBRSxnQkFBZ0I7SUFDdEMsaUJBQWlCLEVBQUUsYUFBYTtJQUNoQyxZQUFZLEVBQUUsUUFBUTtJQUN0QixxQkFBcUIsRUFBRSxpQkFBaUI7SUFDeEMsZUFBZSxFQUFFLFdBQVc7SUFDNUIsZUFBZSxFQUFFLFdBQVc7Q0FFN0IsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJGOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VB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QUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsVUFBVSwwQ0FBRyxHQUFHLENBQUMsS0FBSSxZQUFZLENBQUMsRUFDeEQsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQ2pELENBQ1MsQ0FDZDtTQUFBLENBQUMsQ0FDYTtRQUVqQiwyREFBQywrRUFBYyxJQUNiLEtBQUssRUFDSCwyREFBQyx1REFBZ0IsSUFDZixFQUFFLEVBQUMsY0FBYyxFQUNqQixjQUFjLEVBQUUsNkRBQWUsQ0FBQyxZQUFZLEdBQzVDO1lBR0osMkRBQUMsMkVBQVUsSUFDVCxLQUFLLEVBQ0gsMkRBQUMsdURBQWdCLElBQ2YsRUFBRSxFQUFDLHFCQUFxQixFQUN4QixjQUFjLEVBQUUsNkRBQWUsQ0FBQyxtQkFBbUIsR0FDbkQsRUFFSixJQUFJLEVBQUMsTUFBTTtnQkFFWCwyREFBQyxpREFBWSxJQUNYLEtBQUssRUFDSCxhQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsVUFBVSwwQ0FBRSxXQUFXO3dCQUMvQixrREFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBRXRDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQy9DLEdBQUcsRUFBRSxDQUFDLEdBQ04sQ0FDUyxDQUNFLENBQ2IsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUUYsaUVBQWUsT0FBTyxFQUFDO0FBRWYsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcmVwc29sLXdpZGdldC1nZW9jb2Rpbmcvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcmVwc29sLXdpZGdldC1nZW9jb2Rpbmcvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yZXBzb2wtd2lkZ2V0LWdlb2NvZGluZy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEltbXV0YWJsZU9iamVjdCB9IGZyb20gXCJzZWFtbGVzcy1pbW11dGFibGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBHZW9jb2RlQVBJOiB7XHJcbiAgICBWYWx1ZXM6IHN0cmluZztcclxuICAgIFVwbG9hZDogc3RyaW5nO1xyXG4gICAgRGVzY2FyZ2FyOiBzdHJpbmc7XHJcbiAgICBCb3JyYXI6IHN0cmluZztcclxuICAgIEdldE1hcDogc3RyaW5nO1xyXG4gIH07XHJcbiAgZ3JpZENvbmZpZzoge1xyXG4gICAgcm93c1BlclBhZ2U6IG51bWJlcjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogQ29uZmlnID0ge1xyXG4gIEdlb2NvZGVBUEk6IHtcclxuICAgIFZhbHVlczpcclxuICAgICAgXCJodHRwczovL3NydmFyY2dpc2Rldi5uZXh1c2dlb2dyYWZpY3MuY29tL3JlcHNvbC9HZW9jb2RlQVBJL0dlb2NvZGVQcm9zL1ZhbHVlc1wiLFxyXG4gICAgVXBsb2FkOlxyXG4gICAgICBcImh0dHBzOi8vc3J2YXJjZ2lzZGV2Lm5leHVzZ2VvZ3JhZmljcy5jb20vcmVwc29sL0dlb2NvZGVBUEkvR2VvY29kZVByb3MvVXBsb2FkXCIsXHJcbiAgICBEZXNjYXJnYXI6XHJcbiAgICAgIFwiaHR0cHM6Ly9zcnZhcmNnaXNkZXYubmV4dXNnZW9ncmFmaWNzLmNvbS9yZXBzb2wvR2VvY29kZUFQSS9HZW9jb2RlUHJvcy9EZXNjYXJnYXJcIixcclxuICAgIEJvcnJhcjpcclxuICAgICAgXCJodHRwczovL3NydmFyY2dpc2Rldi5uZXh1c2dlb2dyYWZpY3MuY29tL3JlcHNvbC9HZW9jb2RlQVBJL0dlb2NvZGVQcm9zL0JvcnJhclwiLFxyXG4gICAgR2V0TWFwOlxyXG4gICAgICBcImh0dHBzOi8vc3J2YXJjZ2lzZGV2Lm5leHVzZ2VvZ3JhZmljcy5jb20vcmVwc29sL0dlb2NvZGVBUEkvR2VvY29kZVByb3MvR2V0TWFwXCIsXHJcbiAgfSxcclxuICBncmlkQ29uZmlnOiB7XHJcbiAgICByb3dzUGVyUGFnZTogNlxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRGaWVsZCB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gU2VjY2lvbmVzXHJcbiAgdGFibGVfY29uZmlnOiBcIkNvbmZpZ3VyYWNpw7NuIGRlIGxhIFRhYmxhXCIsXHJcbiAgZ2VvY29kZV9hcGlfY29uZmlnOiBcIkNvbmZpZ3VyYWNpw7NuIGRlIEdlb2NvZGUgQVBJXCIsXHJcblxyXG4gIC8vIExhYmVscyBwYXJhIEdlb2NvZGUgQVBJXHJcbiAgZ2VvY29kZV9hcGlfdmFsdWVzOiBcIkFQSSBWYWxvcmVzXCIsXHJcbiAgZ2VvY29kZV9hcGlfdXBsb2FkOiBcIkFQSSBTdWJpZGFcIixcclxuICBnZW9jb2RlX2FwaV9kb3dubG9hZDogXCJBUEkgRGVzY2FyZ2FcIixcclxuICBnZW9jb2RlX2FwaV9kZWxldGU6IFwiQVBJIEJvcnJhclwiLFxyXG4gIGdlb2NvZGVfYXBpX2dldF9tYXA6IFwiQVBJIE9idGVuZXIgTWFwYVwiLFxyXG5cclxuICAvLyBDb25maWd1cmFjacOzbiBkZSBUYWJsYVxyXG4gIHRhYmxlX3Jvd3NfcGVyX3BhZ2U6IFwiRmlsYXMgcG9yIFDDoWdpbmFcIixcclxuXHJcbiAgLy8gTGFiZWxzIHRhYmxhXHJcbiAgbGFiZWxfY29kaWdvX3BlZGlkbzogXCJDb2RpZ28gUGVkaWRvXCIsXHJcbiAgbGFiZWxfbm9tYnJlX2ZpY2hlcm86IFwiTm9tYnJlIEZpY2hlcm9cIixcclxuICBsYWJlbF90aXBvOiBcIlRpcG9cIixcclxuICBsYWJlbF9maWxhc19wcm9jZXNhcjogXCJGaWxhcyBwcm9jZXNhclwiLFxyXG4gIGxhYmVsX2Rlc2NyaXBjaW9uOiBcIkRlc2NyaXBjaW9uXCIsXHJcbiAgbGFiZWxfZXN0YWRvOiBcIkVzdGFkb1wiLFxyXG4gIGxhYmVsX2ZlY2hhX3NvbGljaXR1ZDogXCJGZWNoYSBTb2xpY2l0dWRcIixcclxuICBsYWJlbF9mZWNoYV9maW46IFwiRmVjaGEgRmluXCIsXHJcbiAgbGFiZWxfbG9nX2Vycm9yOiBcIkxPR19FUlJPUlwiLFxyXG5cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRDb25maWcsIENvbmZpZywgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgU2V0dGluZ1JvdyxcclxuICBTZXR0aW5nU2VjdGlvbixcclxufSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljSW5wdXQsIFRleHRJbnB1dCB9IGZyb20gXCJqaW11LXVpXCI7XHJcblxyXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgeyBjb25maWcsIG9uU2V0dGluZ0NoYW5nZSwgaWQgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBvbkFQSUNoYW5nZSA9IChrZXk6IGtleW9mIElNQ29uZmlnW1wiR2VvY29kZUFQSVwiXSwgdmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGNvbmZpZy5zZXRJbihbXCJHZW9jb2RlQVBJXCIsIGtleV0sIHZhbHVlKTtcclxuICAgIG9uU2V0dGluZ0NoYW5nZSh7IGlkLCBjb25maWc6IHVwZGF0ZWRDb25maWcgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Sb3dzUGVyUGFnZUNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQ29uZmlnID0gY29uZmlnLnNldEluKFtcImdyaWRDb25maWdcIiwgXCJyb3dzUGVyUGFnZVwiXSwgdmFsdWUpO1xyXG4gICAgb25TZXR0aW5nQ2hhbmdlKHsgaWQsIGNvbmZpZzogdXBkYXRlZENvbmZpZyB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZW9jb2RlQVBJT3B0aW9uczogR2VvY29kZUFQSU9wdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBrZXk6IFwiVmFsdWVzXCIsXHJcbiAgICAgIGlkOiBcImdlb2NvZGVfYXBpX3ZhbHVlc1wiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRDb25maWcuR2VvY29kZUFQSS5WYWx1ZXMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6IFwiVXBsb2FkXCIsXHJcbiAgICAgIGlkOiBcImdlb2NvZGVfYXBpX3VwbG9hZFwiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRDb25maWcuR2VvY29kZUFQSS5VcGxvYWQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6IFwiRGVzY2FyZ2FyXCIsXHJcbiAgICAgIGlkOiBcImdlb2NvZGVfYXBpX2Rvd25sb2FkXCIsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdENvbmZpZy5HZW9jb2RlQVBJLkRlc2NhcmdhcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJCb3JyYXJcIixcclxuICAgICAgaWQ6IFwiZ2VvY29kZV9hcGlfZGVsZXRlXCIsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdENvbmZpZy5HZW9jb2RlQVBJLkJvcnJhcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJHZXRNYXBcIixcclxuICAgICAgaWQ6IFwiZ2VvY29kZV9hcGlfZ2V0X21hcFwiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRDb25maWcuR2VvY29kZUFQSS5HZXRNYXAsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmdcIj5cclxuICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgaWQ9XCJnZW9jb2RlX2FwaV9jb25maWdcIlxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdE1lc3NhZ2VzLmdlb2NvZGVfYXBpX2NvbmZpZ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2dlb2NvZGVBUElPcHRpb25zLm1hcCgoeyBrZXksIGlkLCBkZWZhdWx0VmFsdWUgfSkgPT4gKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aWR9IGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXNbaWRdfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsb3c9XCJ3cmFwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcoY29uZmlnPy5HZW9jb2RlQVBJPy5ba2V5XSB8fCBkZWZhdWx0VmFsdWUpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25BUElDaGFuZ2Uoa2V5LCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICBpZD1cInRhYmxlX2NvbmZpZ1wiXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMudGFibGVfY29uZmlnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgIGlkPVwidGFibGVfcm93c19wZXJfcGFnZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy50YWJsZV9yb3dzX3Blcl9wYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmxvdz1cIndyYXBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOdW1lcmljSW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgIGNvbmZpZz8uZ3JpZENvbmZpZz8ucm93c1BlclBhZ2UgfHxcclxuICAgICAgICAgICAgICBkZWZhdWx0Q29uZmlnLmdyaWRDb25maWcucm93c1BlclBhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvblJvd3NQZXJQYWdlQ2hhbmdlKHZhbHVlKX1cclxuICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEdlb2NvZGVBUElPcHRpb24ge1xyXG4gIGtleToga2V5b2YgSU1Db25maWdbXCJHZW9jb2RlQVBJXCJdO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmc7XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=