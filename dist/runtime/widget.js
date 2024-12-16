System.register(["jimu-core","jimu-ui","jimu-core/react","calcite-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__[key] = module[key];
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

/***/ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/assets/table_data.tsx":
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/runtime/assets/table_data.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOREM_IPSUM: () => (/* binding */ LOREM_IPSUM),
/* harmony export */   MockData: () => (/* binding */ MockData),
/* harmony export */   TableColumnsDeclarations: () => (/* binding */ TableColumnsDeclarations)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");


const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante a augue sollicitudin ultricies. Donec eget dolor sem. Nulla tincidunt urna et ante pretium consequat. Pellentesque mattis at lacus quis vehicula. Quisque varius tristique diam quis fringilla. Pellentesque tincidunt finibus dolor. Etiam quis neque magna. Vestibulum venenatis lorem metus, quis posuere nisl consequat eu. Ut in libero in nulla congue cursus. Mauris lacus risus, laoreet in hendrerit sed, pulvinar quis mi. Morbi sit amet turpis nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam efficitur posuere congue. Duis lorem quam, pharetra commodo mauris in, pretium molestie nisl. Ut finibus suscipit nisi.";
const TableColumnsDeclarations = [
    {
        defaultMessage: "field_order_code",
        field: "order_code",
    },
    {
        defaultMessage: "field_file_name",
        field: "file_name",
    },
    {
        defaultMessage: "field_type",
        field: "type",
    },
    {
        defaultMessage: "field_rows_to_process",
        field: "rows_to_process",
    },
    {
        defaultMessage: "field_description",
        field: "description",
    },
    {
        defaultMessage: "field_status",
        field: "status",
    },
    {
        defaultMessage: "field_request_date",
        field: "request_date",
    },
    {
        defaultMessage: "field_completion_date",
        field: "completion_date",
    },
    {
        defaultMessage: "field_error_log",
        field: "error_log",
        icon: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteIcon, { icon: "search", scale: "s" }, " ")
    },
    {
        defaultMessage: "field_view_data",
        field: "view_data",
        icon: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteIcon, { icon: "properties", scale: "s" }, " ")
    },
    {
        defaultMessage: "field_download",
        field: "download",
        icon: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteIcon, { icon: "save", scale: "s" }, " ")
    },
    {
        defaultMessage: "field_delete",
        field: "delete",
        icon: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteIcon, { icon: "trash", scale: "s" }, " ")
    },
];
const MockData = [
    {
        order_code: "001",
        file_name: "Archivo1.xlsx",
        type: "Directa",
        rows_to_process: "150",
        description: LOREM_IPSUM,
        status: "Pendiente",
        request_date: "2024-12-10",
        completion_date: "",
        error_log: "",
    },
    {
        order_code: "019",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "002",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "003",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "004",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "005",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "006",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "007",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "008",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "009",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "010",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "011",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "012",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "013",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "014",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "015",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "016",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "017",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
    {
        order_code: "018",
        file_name: "Archivo2.xlsx",
        type: "Inversa",
        rows_to_process: "200",
        description: "Descripción de prueba 2",
        status: "Finalizado",
        request_date: "2024-12-09",
        completion_date: "2024-12-10",
        error_log: "Error al procesar coordenadas.",
    },
];


/***/ }),

/***/ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/AddOrderModal.tsx":
/*!**************************************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/AddOrderModal.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



const baseOrderData = {
    type: "direct",
    description: "",
};
const AddOrderModal = ({ isOpen, onClose, onSubmit, fileName, }) => {
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [currentFileColumns, setCurrentFileColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(["Columna1", "Columna2"]);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(baseOrderData);
    const cleanData = () => {
        setFormData(baseOrderData);
        setStep(1);
    };
    const handleNext = () => {
        if (step === 1) {
            if (!formData.type) {
                alert("Seleccione el tipo de geocodificación.");
                return;
            }
        }
        else if (step === 2) {
            if (formData.type === "direct" && !formData.column) {
                alert("Seleccione la columna de direcciones.");
                return;
            }
            if (formData.type === "reverse" &&
                (!formData.coordX || !formData.coordY || !formData.referenceSystem)) {
                alert("Complete todos los campos para la geocodificación inversa.");
                return;
            }
        }
        if (step < 2) {
            setStep(step + 1);
        }
        else {
            onSubmit(formData);
            onClose();
        }
    };
    const onCloseModal = () => {
        cleanData();
        onClose();
    };
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    const handleChange = (key, value) => {
        setFormData(Object.assign(Object.assign({}, formData), { [key]: value }));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, { isOpen: isOpen, toggle: onCloseModal, size: "lg" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, { toggle: onCloseModal }, step === 1 ? "Añadir Pedido - Selección Básica" : "Añadir Pedido - Detalles"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ModalBody, null,
            step === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                    "Archivo seleccionado: ",
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, fileName)),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Seleccione el tipo de geocodificaci\u00F3n:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: formData.type, onChange: (e) => handleChange("type", e.target.value) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "direct" }, "Geocodificaci\u00F3n Directa"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "reverse" }, "Geocodificaci\u00F3n Inversa")))),
            step === 2 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                formData.type === "direct" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h1", null, "Geolocalizaci\u00F3n Directa")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                            "Las columnas del fichero seleccionado se muestran en la siguiente lista. ",
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("br", null),
                            "Seleccione la columna que contiene la direcci\u00F3n a geolocalizar."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                            "Columna direcci\u00F3n:",
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "overflow-hidden flex-grow-1 ml-5" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: formData.column, onChange: (e) => handleChange("column", e.target.value) }, currentFileColumns.map((col) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: col, value: col },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "text-truncate" }, col)))))))))),
                formData.type === "reverse" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Seleccione las columnas de coordenadas:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", null, "Coordenada X:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: formData.coordX, onChange: (e) => handleChange("coordX", e.target.value) }, currentFileColumns.map((col) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: col, value: col }, col))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", null, "Coordenada Y:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: formData.coordY, onChange: (e) => handleChange("coordY", e.target.value) }, currentFileColumns.map((col) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: col, value: col }, col))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", null, "Sistema de Referencia:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: formData.referenceSystem || "", onChange: (e) => handleChange("referenceSystem", e.target.value) })))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", null, "Descripci\u00F3n:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: formData.description, onChange: (e) => handleChange("description", e.target.value) }))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, null,
            step > 1 && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: handleBack }, "Atr\u00E1s"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", onClick: handleNext }, step === 2 ? "Añadir" : "Siguiente"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddOrderModal);


/***/ }),

/***/ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/DropFile.tsx":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/DropFile.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeocodingDropFile: () => (/* binding */ GeocodingDropFile),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/translations/default.ts");
/** @jsx jsx */




const GeocodingDropFile = ({ onFileAccepted, widgetProps, accept = ["*"], maxFiles = 1, }) => {
    const MAX_FILESIZE_MB = 50;
    const [isDragActive, setIsDragActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const isFileAccepted = (files) => {
        return files.filter((file) => (accept.includes("*") || accept.some((filetype) => file.type.includes(filetype))) &&
            file.size / (1024 * 1024) <= MAX_FILESIZE_MB);
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragActive(true);
    };
    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragActive(false);
    };
    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragActive(false);
        const files = Array.from(event.dataTransfer.files);
        addFileToList(files);
    };
    const handleFileSelection = (event) => {
        const files = Array.from(event.target.files || []);
        addFileToList(files);
    };
    const addFileToList = (files) => {
        const acceptedFiles = isFileAccepted(files);
        const limitedFiles = acceptedFiles.slice(0, maxFiles);
        if (limitedFiles.length > 0) {
            setFileList(limitedFiles);
            onFileAccepted(limitedFiles);
        }
        else {
            const maxFileSizeMessage = widgetProps.intl.formatMessage({
                id: "text_max_files",
                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].text_max_files,
            }).replace("{maxFileSize}", MAX_FILESIZE_MB.toString());
            alert(maxFileSizeMessage);
        }
    };
    const getListOfFiles = () => {
        const originalFileMessage = widgetProps.intl.formatMessage({
            id: "text_file_details",
            defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].text_file_details,
        });
        return fileList.map((file, index) => {
            let currentFileMessage = originalFileMessage.replace("{fileName}", file.name);
            currentFileMessage = currentFileMessage.replace("{fileSize}", (file.size / (1024 * 1024)).toFixed(2));
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { key: index, style: { fontSize: "14px", color: widgetProps.theme.typography.colors.caption || "gray" } }, currentFileMessage));
        });
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, style: {
            position: "relative",
            display: "flex",
            aspectRatio: "1",
            backgroundColor: isDragActive ? widgetProps.theme.colors.secondary : widgetProps.theme.colors.white,
            border: `2px dashed ${widgetProps.theme.colors.primary}`,
            borderRadius: "8px",
            padding: "12px",
            cursor: "pointer",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            height: "inherit",
            width: "100%",
        } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { style: {
                    fontSize: "16px",
                    color: "#333",
                    margin: "0 0 12px 0",
                } }, isDragActive ? widgetProps.intl.formatMessage({
                id: "drop_files_here",
                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].drop_files_here,
            }) : widgetProps.intl.formatMessage({
                id: "drop_files_active",
                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].drop_files_active,
            })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { hidden: isDragActive, size: "sm", style: { marginBottom: "12px" }, onClick: () => { var _a; return (_a = document.getElementById("file-input")) === null || _a === void 0 ? void 0 : _a.click(); } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "button_select_files", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].button_select_files })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { id: "file-input", type: "file", multiple: maxFiles > 1, accept: accept.join(","), style: { display: "none" }, onChange: handleFileSelection }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontSize: "14px", color: "#555" } }, widgetProps.intl.formatMessage({
                id: "text_max_files",
                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].text_max_files,
            })
                .replace("{maxFiles}", maxFiles.toString())
                .replace("{maxFileSize}", MAX_FILESIZE_MB.toString()))),
        fileList.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                position: "absolute",
                bottom: "10px",
                left: "10px",
                right: "10px",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                maxHeight: "100px",
                overflowY: "auto",
            } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontWeight: "bold", fontSize: "14px", margin: "0 0 8px 0" } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "text_selected_files", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].text_selected_files })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { style: { padding: "0", margin: "0", listStyle: "none" } }, getListOfFiles())))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeocodingDropFile);


/***/ }),

/***/ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/TableComponent.tsx":
/*!***************************************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/TableComponent.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeocodingTableComponent: () => (/* binding */ GeocodingTableComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");



const LargeColumns = [
    "file_name", "description"
];
const GeocodingTableComponent = (props) => {
    const { className = "", columns, rowsPerPage, data, widgetProps } = props;
    const cellClassName = "text-truncate p-1";
    const [currentPage, setCurrentPage] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(1);
    const [currentPageSize, setCurrentPageSize] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(rowsPerPage);
    const totalPage = Math.ceil(data.length / currentPageSize);
    const startIndex = (currentPage - 1) * currentPageSize;
    const endIndex = startIndex + currentPageSize;
    const paginatedData = data.slice(startIndex, endIndex);
    const handlePageChange = (current) => {
        setCurrentPage(current);
    };
    const handlePageSizeChange = (size) => {
        setCurrentPageSize(size);
        setCurrentPage(1);
    };
    const createTableRow = (row, rowIndex) => {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", { key: rowIndex }, columns.map((column, index) => createTableCell(row, index, column))));
    };
    const createTableCell = (row, index, column) => {
        const currentField = column.field;
        const label = row[currentField] !== undefined && row[currentField] !== null ? row[currentField] : "";
        const currentColumn = columns.find(col => col.field == currentField);
        const icon = currentColumn.icon ? (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(currentColumn.icon, {}) : null;
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { key: index, className: cellClassName + (icon ? " text-center" : ""), style: { maxWidth: "10rem" } }, LargeColumns.includes(currentField) ?
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: label, placement: "top", followCursor: true }, icon ? icon : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("a", null, label))
            :
                icon ? icon : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("a", null, label));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "table-component h-100 w-100 " + className },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Container, { fluid: true, className: "h-100 w-100" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { style: {
                    overflowY: "auto",
                    maxHeight: "220px",
                    height: "100%"
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Table, { bordered: true, size: "sm", striped: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("thead", { style: {
                            backgroundColor: widgetProps.theme.colors.primary,
                            color: widgetProps.theme.colors.white,
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: 'sticky',
                        } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null, columns.map((column) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", { style: {
                                width: column.icon ? "3%" : LargeColumns.includes(column.field) ? "17%" : "auto"
                            }, className: "p-1", scope: "column", key: column.field }, column.icon ? "" : column.label))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tbody", null, paginatedData.map(createTableRow)))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { className: "d-flex justify-content-between align-self-end" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Col, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Pagination, { boundaryCount: 1, defaultCurrent: 1, pageSize: currentPageSize, defaultPageSize: rowsPerPage, totalPage: totalPage, pageSizeOptions: [5, 10, 20], onChangePage: handlePageChange, onPageSizeChange: handlePageSizeChange, shape: "rounded", siblingCount: 1, size: "default", variant: "outlined" })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Col, null, props.children)))));
};


/***/ }),

/***/ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/translations/default.ts":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/runtime/translations/default.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    field_order_code: "Codigo Pedido",
    field_file_name: "Nombre Fichero",
    field_type: "Tipo",
    field_rows_to_process: "Filas procesar",
    field_description: "Descripcion",
    field_status: "Estado",
    field_request_date: "Fecha Solicitud",
    field_completion_date: "Fecha Fin",
    field_view_data: "",
    field_error_log: "",
    field_download: "",
    field_delete: "",
    button_add_order: "Añadir pedido",
    button_refresh: "Refrescar",
    // GeocodingDropFile
    drop_files_here: "Arrastra y suelta tus archivos aquí",
    drop_files_active: "Suelta los archivos aquí...",
    button_select_files: "Seleccionar Archivos",
    text_max_files: "Tamaño máximo: {maxFileSize} MB",
    alert_file_not_accepted: "Archivo no aceptado o excede {maxFileSize} MB.",
    text_selected_files: "Archivos seleccionados:",
    text_file_details: "{fileName} - {fileSize} MB",
});


/***/ }),

/***/ "@esri/calcite-components-react":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/repsol-widget-geocoding/src/runtime/widget.tsx ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/repsol-widget-geocoding/src/config.ts");
/* harmony import */ var _components_TableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TableComponent */ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/TableComponent.tsx");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/translations/default.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _assets_table_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/table_data */ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/assets/table_data.tsx");
/* harmony import */ var _components_DropFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/DropFile */ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/DropFile.tsx");
/* harmony import */ var _components_AddOrderModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AddOrderModal */ "./your-extensions/widgets/repsol-widget-geocoding/src/runtime/components/AddOrderModal.tsx");









const Widget = (props) => {
    var _a;
    const { config } = props;
    const [tableData, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [currentFiles, setCurrentFiles] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [isAddOrderModalOpen, setIsAddOrderModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const rowsPerPage = ((_a = config === null || config === void 0 ? void 0 : config.gridConfig) === null || _a === void 0 ? void 0 : _a.rowsPerPage) || _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.gridConfig.rowsPerPage;
    const tableColumns = _assets_table_data__WEBPACK_IMPORTED_MODULE_6__.TableColumnsDeclarations.map((declaration) => ({
        label: props.intl.formatMessage({
            id: declaration.defaultMessage,
            defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"][declaration.defaultMessage],
        }),
        field: declaration.field,
        icon: declaration.icon,
    }));
    const renderButtons = () => {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex justify-content-end" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { style: { marginRight: "8px", marginTop: "8px" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "button_refresh", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].button_refresh })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "primary", style: { marginTop: "8px" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "button_add_order", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].button_add_order }))));
    };
    console.log("Columns:", tableColumns);
    console.log("Data:", tableData);
    console.log({ props });
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-geocode h-100" },
        tableData && tableData.length > 0 ?
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_TableComponent__WEBPACK_IMPORTED_MODULE_2__.GeocodingTableComponent, { widgetProps: props, className: "h-100", columns: tableColumns, data: tableData, rowsPerPage: rowsPerPage }, renderButtons())
            :
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_DropFile__WEBPACK_IMPORTED_MODULE_7__["default"], { widgetProps: props, onFileAccepted: (files) => {
                        setCurrentFiles(files);
                        setIsAddOrderModalOpen(true);
                    } }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_AddOrderModal__WEBPACK_IMPORTED_MODULE_8__["default"], { isOpen: isAddOrderModalOpen, onClose: () => {
                setIsAddOrderModalOpen(false);
            }, onSubmit: (data) => {
                console.log({ data });
                setTableData(_assets_table_data__WEBPACK_IMPORTED_MODULE_6__.MockData);
                setIsAddOrderModalOpen(false);
            }, fileName: "" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9yZXBzb2wtd2lkZ2V0LWdlb2NvZGluZy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVPLE1BQU0sYUFBYSxHQUFXO0lBQ25DLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFDSiwrRUFBK0U7UUFDakYsTUFBTSxFQUNKLCtFQUErRTtRQUNqRixTQUFTLEVBQ1Asa0ZBQWtGO1FBQ3BGLE1BQU0sRUFDSiwrRUFBK0U7UUFDakYsTUFBTSxFQUNKLCtFQUErRTtLQUNsRjtJQUNELFVBQVUsRUFBRTtRQUNWLFdBQVcsRUFBRSxDQUFDO0tBQ2Y7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CK0I7QUFFNEI7QUFFdEQsTUFBTSxXQUFXLEdBQUcsK3RCQUErdEIsQ0FBQztBQUVwdkIsTUFBTSx3QkFBd0IsR0FBc0M7SUFDdkU7UUFDSSxjQUFjLEVBQUUsa0JBQWtCO1FBQ2xDLEtBQUssRUFBRSxZQUFZO0tBQ3RCO0lBQ0Q7UUFDSSxjQUFjLEVBQUUsaUJBQWlCO1FBQ2pDLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBQ0Q7UUFDSSxjQUFjLEVBQUUsWUFBWTtRQUM1QixLQUFLLEVBQUUsTUFBTTtLQUNoQjtJQUNEO1FBQ0ksY0FBYyxFQUFFLHVCQUF1QjtRQUN2QyxLQUFLLEVBQUUsaUJBQWlCO0tBQzNCO0lBQ0Q7UUFDSSxjQUFjLEVBQUUsbUJBQW1CO1FBQ25DLEtBQUssRUFBRSxhQUFhO0tBQ3ZCO0lBQ0Q7UUFDSSxjQUFjLEVBQUUsY0FBYztRQUM5QixLQUFLLEVBQUUsUUFBUTtLQUNsQjtJQUNEO1FBQ0ksY0FBYyxFQUFFLG9CQUFvQjtRQUNwQyxLQUFLLEVBQUUsY0FBYztLQUN4QjtJQUNEO1FBQ0ksY0FBYyxFQUFFLHVCQUF1QjtRQUN2QyxLQUFLLEVBQUUsaUJBQWlCO0tBQzNCO0lBQ0Q7UUFDSSxjQUFjLEVBQUUsaUJBQWlCO1FBQ2pD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LEVBQUUsS0FBSyxFQUNsQixjQUFjLEVBQUUsQ0FBQyxLQUFhLEVBQVEsRUFBRTt3QkFDdEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN2QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsQ0FBQyxHQUNEO1FBRUosMkRBQUMsaUVBQWEsSUFDWixNQUFNLEVBQUUsbUJBQW1CLEVBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUNELFFBQVEsRUFBRSxDQUFDLElBQWUsRUFBRSxFQUFFO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEIsWUFBWSxDQUFDLHdEQUFRLENBQUMsQ0FBQztnQkFDdkIsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUNELFFBQVEsRUFBRSxFQUFFLEdBQ1osQ0FDRSxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxNQUFNLEVBQUM7QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yZXBzb2wtd2lkZ2V0LWdlb2NvZGluZy9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yZXBzb2wtd2lkZ2V0LWdlb2NvZGluZy9zcmMvcnVudGltZS9hc3NldHMvdGFibGVfZGF0YS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JlcHNvbC13aWRnZXQtZ2VvY29kaW5nL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQWRkT3JkZXJNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JlcHNvbC13aWRnZXQtZ2VvY29kaW5nL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvRHJvcEZpbGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yZXBzb2wtd2lkZ2V0LWdlb2NvZGluZy9zcmMvcnVudGltZS9jb21wb25lbnRzL1RhYmxlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcmVwc29sLXdpZGdldC1nZW9jb2Rpbmcvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJjYWxjaXRlLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yZXBzb2wtd2lkZ2V0LWdlb2NvZGluZy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSBcInNlYW1sZXNzLWltbXV0YWJsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xyXG4gIEdlb2NvZGVBUEk6IHtcclxuICAgIFZhbHVlczogc3RyaW5nO1xyXG4gICAgVXBsb2FkOiBzdHJpbmc7XHJcbiAgICBEZXNjYXJnYXI6IHN0cmluZztcclxuICAgIEJvcnJhcjogc3RyaW5nO1xyXG4gICAgR2V0TWFwOiBzdHJpbmc7XHJcbiAgfTtcclxuICBncmlkQ29uZmlnOiB7XHJcbiAgICByb3dzUGVyUGFnZTogbnVtYmVyO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29uZmlnOiBDb25maWcgPSB7XHJcbiAgR2VvY29kZUFQSToge1xyXG4gICAgVmFsdWVzOlxyXG4gICAgICBcImh0dHBzOi8vc3J2YXJjZ2lzZGV2Lm5leHVzZ2VvZ3JhZmljcy5jb20vcmVwc29sL0dlb2NvZGVBUEkvR2VvY29kZVByb3MvVmFsdWVzXCIsXHJcbiAgICBVcGxvYWQ6XHJcbiAgICAgIFwiaHR0cHM6Ly9zcnZhcmNnaXNkZXYubmV4dXNnZW9ncmFmaWNzLmNvbS9yZXBzb2wvR2VvY29kZUFQSS9HZW9jb2RlUHJvcy9VcGxvYWRcIixcclxuICAgIERlc2NhcmdhcjpcclxuICAgICAgXCJodHRwczovL3NydmFyY2dpc2Rldi5uZXh1c2dlb2dyYWZpY3MuY29tL3JlcHNvbC9HZW9jb2RlQVBJL0dlb2NvZGVQcm9zL0Rlc2NhcmdhclwiLFxyXG4gICAgQm9ycmFyOlxyXG4gICAgICBcImh0dHBzOi8vc3J2YXJjZ2lzZGV2Lm5leHVzZ2VvZ3JhZmljcy5jb20vcmVwc29sL0dlb2NvZGVBUEkvR2VvY29kZVByb3MvQm9ycmFyXCIsXHJcbiAgICBHZXRNYXA6XHJcbiAgICAgIFwiaHR0cHM6Ly9zcnZhcmNnaXNkZXYubmV4dXNnZW9ncmFmaWNzLmNvbS9yZXBzb2wvR2VvY29kZUFQSS9HZW9jb2RlUHJvcy9HZXRNYXBcIixcclxuICB9LFxyXG4gIGdyaWRDb25maWc6IHtcclxuICAgIHJvd3NQZXJQYWdlOiA2XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZEZpZWxkIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz47XHJcbiIsImltcG9ydCB7IFJlYWN0fSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IFRhYmxlQ29sdW1uR2VvY29kaW5nRGVjbGFyYXRpb24sIFRhYmxlRGF0YUdlb2NvZGluZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1RhYmxlR2VvY29kaW5nXCI7XHJcbmltcG9ydCB7IENhbGNpdGVJY29uIH0gZnJvbSBcIkBlc3JpL2NhbGNpdGUtY29tcG9uZW50cy1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPUkVNX0lQU1VNID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiBldSBhbnRlIGEgYXVndWUgc29sbGljaXR1ZGluIHVsdHJpY2llcy4gRG9uZWMgZWdldCBkb2xvciBzZW0uIE51bGxhIHRpbmNpZHVudCB1cm5hIGV0IGFudGUgcHJldGl1bSBjb25zZXF1YXQuIFBlbGxlbnRlc3F1ZSBtYXR0aXMgYXQgbGFjdXMgcXVpcyB2ZWhpY3VsYS4gUXVpc3F1ZSB2YXJpdXMgdHJpc3RpcXVlIGRpYW0gcXVpcyBmcmluZ2lsbGEuIFBlbGxlbnRlc3F1ZSB0aW5jaWR1bnQgZmluaWJ1cyBkb2xvci4gRXRpYW0gcXVpcyBuZXF1ZSBtYWduYS4gVmVzdGlidWx1bSB2ZW5lbmF0aXMgbG9yZW0gbWV0dXMsIHF1aXMgcG9zdWVyZSBuaXNsIGNvbnNlcXVhdCBldS4gVXQgaW4gbGliZXJvIGluIG51bGxhIGNvbmd1ZSBjdXJzdXMuIE1hdXJpcyBsYWN1cyByaXN1cywgbGFvcmVldCBpbiBoZW5kcmVyaXQgc2VkLCBwdWx2aW5hciBxdWlzIG1pLiBNb3JiaSBzaXQgYW1ldCB0dXJwaXMgbmlzaS4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gTnVsbGFtIGVmZmljaXR1ciBwb3N1ZXJlIGNvbmd1ZS4gRHVpcyBsb3JlbSBxdWFtLCBwaGFyZXRyYSBjb21tb2RvIG1hdXJpcyBpbiwgcHJldGl1bSBtb2xlc3RpZSBuaXNsLiBVdCBmaW5pYnVzIHN1c2NpcGl0IG5pc2kuXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFibGVDb2x1bW5zRGVjbGFyYXRpb25zOiBUYWJsZUNvbHVtbkdlb2NvZGluZ0RlY2xhcmF0aW9uW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiZmllbGRfb3JkZXJfY29kZVwiLFxyXG4gICAgICAgIGZpZWxkOiBcIm9yZGVyX2NvZGVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiZmllbGRfZmlsZV9uYW1lXCIsXHJcbiAgICAgICAgZmllbGQ6IFwiZmlsZV9uYW1lXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcImZpZWxkX3R5cGVcIixcclxuICAgICAgICBmaWVsZDogXCJ0eXBlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcImZpZWxkX3Jvd3NfdG9fcHJvY2Vzc1wiLFxyXG4gICAgICAgIGZpZWxkOiBcInJvd3NfdG9fcHJvY2Vzc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogXCJmaWVsZF9kZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGZpZWxkOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcImZpZWxkX3N0YXR1c1wiLFxyXG4gICAgICAgIGZpZWxkOiBcInN0YXR1c1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogXCJmaWVsZF9yZXF1ZXN0X2RhdGVcIixcclxuICAgICAgICBmaWVsZDogXCJyZXF1ZXN0X2RhdGVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiZmllbGRfY29tcGxldGlvbl9kYXRlXCIsXHJcbiAgICAgICAgZmllbGQ6IFwiY29tcGxldGlvbl9kYXRlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcImZpZWxkX2Vycm9yX2xvZ1wiLFxyXG4gICAgICAgIGZpZWxkOiBcImVycm9yX2xvZ1wiLFxyXG4gICAgICAgIGljb246IDxDYWxjaXRlSWNvbiBpY29uPVwic2VhcmNoXCIgc2NhbGU9XCJzXCI+IDwvQ2FsY2l0ZUljb24+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcImZpZWxkX3ZpZXdfZGF0YVwiLFxyXG4gICAgICAgIGZpZWxkOiBcInZpZXdfZGF0YVwiLFxyXG4gICAgICAgIGljb246IDxDYWxjaXRlSWNvbiBpY29uPVwicHJvcGVydGllc1wiIHNjYWxlPVwic1wiPiA8L0NhbGNpdGVJY29uPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogXCJmaWVsZF9kb3dubG9hZFwiLFxyXG4gICAgICAgIGZpZWxkOiBcImRvd25sb2FkXCIsXHJcbiAgICAgICAgaWNvbjogPENhbGNpdGVJY29uIGljb249XCJzYXZlXCIgc2NhbGU9XCJzXCI+IDwvQ2FsY2l0ZUljb24+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcImZpZWxkX2RlbGV0ZVwiLFxyXG4gICAgICAgIGZpZWxkOiBcImRlbGV0ZVwiLFxyXG4gICAgICAgIGljb246IDxDYWxjaXRlSWNvbiBpY29uPVwidHJhc2hcIiBzY2FsZT1cInNcIj4gPC9DYWxjaXRlSWNvbj5cclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTW9ja0RhdGE6IFRhYmxlRGF0YUdlb2NvZGluZ1tdID0gW1xyXG4gIHtcclxuICAgIG9yZGVyX2NvZGU6IFwiMDAxXCIsXHJcbiAgICBmaWxlX25hbWU6IFwiQXJjaGl2bzEueGxzeFwiLFxyXG4gICAgdHlwZTogXCJEaXJlY3RhXCIsXHJcbiAgICByb3dzX3RvX3Byb2Nlc3M6IFwiMTUwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogTE9SRU1fSVBTVU0sXHJcbiAgICBzdGF0dXM6IFwiUGVuZGllbnRlXCIsXHJcbiAgICByZXF1ZXN0X2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgY29tcGxldGlvbl9kYXRlOiBcIlwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTlcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDJcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDNcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDRcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDVcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDZcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDdcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDhcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMDlcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTBcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTFcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTJcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTNcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTRcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTVcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTZcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMTdcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JkZXJfY29kZTogXCIwMThcIixcclxuICAgIGZpbGVfbmFtZTogXCJBcmNoaXZvMi54bHN4XCIsXHJcbiAgICB0eXBlOiBcIkludmVyc2FcIixcclxuICAgIHJvd3NfdG9fcHJvY2VzczogXCIyMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBwcnVlYmEgMlwiLFxyXG4gICAgc3RhdHVzOiBcIkZpbmFsaXphZG9cIixcclxuICAgIHJlcXVlc3RfZGF0ZTogXCIyMDI0LTEyLTA5XCIsXHJcbiAgICBjb21wbGV0aW9uX2RhdGU6IFwiMjAyNC0xMi0xMFwiLFxyXG4gICAgZXJyb3JfbG9nOiBcIkVycm9yIGFsIHByb2Nlc2FyIGNvb3JkZW5hZGFzLlwiLFxyXG4gIH0sXHJcbl07IiwiaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBCdXR0b24sIFNlbGVjdCwgVGV4dElucHV0LCBDb250YWluZXIsIExhYmVsIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgT3JkZXJEYXRhIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2VvY29kaW5nT3JkZXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIEFkZE9yZGVyTW9kYWxQcm9wcyB7XHJcbiAgICBpc09wZW46IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgb25TdWJtaXQ6IChkYXRhOiBPcmRlckRhdGEpID0+IHZvaWQ7XHJcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IGJhc2VPcmRlckRhdGE6IE9yZGVyRGF0YSA9IHtcclxuICAgIHR5cGU6IFwiZGlyZWN0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxufVxyXG5cclxuY29uc3QgQWRkT3JkZXJNb2RhbDogUmVhY3QuRkM8QWRkT3JkZXJNb2RhbFByb3BzPiA9ICh7XHJcbiAgICBpc09wZW4sXHJcbiAgICBvbkNsb3NlLFxyXG4gICAgb25TdWJtaXQsXHJcbiAgICBmaWxlTmFtZSxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEZpbGVDb2x1bW5zLCBzZXRDdXJyZW50RmlsZUNvbHVtbnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtcIkNvbHVtbmExXCIsIFwiQ29sdW1uYTJcIl0pXHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPE9yZGVyRGF0YT4oYmFzZU9yZGVyRGF0YSk7XHJcblxyXG4gICAgY29uc3QgY2xlYW5EYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKGJhc2VPcmRlckRhdGEpO1xyXG4gICAgICAgIHNldFN0ZXAoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc3RlcCA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZiAoIWZvcm1EYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU2VsZWNjaW9uZSBlbCB0aXBvIGRlIGdlb2NvZGlmaWNhY2nDs24uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YS50eXBlID09PSBcImRpcmVjdFwiICYmICFmb3JtRGF0YS5jb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU2VsZWNjaW9uZSBsYSBjb2x1bW5hIGRlIGRpcmVjY2lvbmVzLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS50eXBlID09PSBcInJldmVyc2VcIiAmJlxyXG4gICAgICAgICAgICAgICAgKCFmb3JtRGF0YS5jb29yZFggfHwgIWZvcm1EYXRhLmNvb3JkWSB8fCAhZm9ybURhdGEucmVmZXJlbmNlU3lzdGVtKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29tcGxldGUgdG9kb3MgbG9zIGNhbXBvcyBwYXJhIGxhIGdlb2NvZGlmaWNhY2nDs24gaW52ZXJzYS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwIDwgMikge1xyXG4gICAgICAgICAgICBzZXRTdGVwKHN0ZXAgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvblN1Ym1pdChmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBjbGVhbkRhdGEoKTtcclxuICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc3RlcCA+IDEpIHtcclxuICAgICAgICAgICAgc2V0U3RlcChzdGVwIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoa2V5OiBrZXlvZiBPcmRlckRhdGEsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBba2V5XTogdmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSB0b2dnbGU9e29uQ2xvc2VNb2RhbH0gc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e29uQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMSA/IFwiQcOxYWRpciBQZWRpZG8gLSBTZWxlY2Npw7NuIELDoXNpY2FcIiA6IFwiQcOxYWRpciBQZWRpZG8gLSBEZXRhbGxlc1wifVxyXG4gICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJjaGl2byBzZWxlY2Npb25hZG86IDxzdHJvbmc+e2ZpbGVOYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlbGVjY2lvbmUgZWwgdGlwbyBkZSBnZW9jb2RpZmljYWNpw7NuOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcInR5cGVcIiwgZS50YXJnZXQudmFsdWUgYXMgXCJkaXJlY3RcIiB8IFwicmV2ZXJzZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRpcmVjdFwiPkdlb2NvZGlmaWNhY2nDs24gRGlyZWN0YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJldmVyc2VcIj5HZW9jb2RpZmljYWNpw7NuIEludmVyc2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtzdGVwID09PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybURhdGEudHlwZSA9PT0gXCJkaXJlY3RcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5HZW9sb2NhbGl6YWNpw7NuIERpcmVjdGE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhcyBjb2x1bW5hcyBkZWwgZmljaGVybyBzZWxlY2Npb25hZG8gc2UgbXVlc3RyYW4gZW4gbGEgc2lndWllbnRlIGxpc3RhLiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmUgbGEgY29sdW1uYSBxdWUgY29udGllbmUgbGEgZGlyZWNjacOzbiBhIGdlb2xvY2FsaXphci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uYSBkaXJlY2Npw7NuOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gZmxleC1ncm93LTEgbWwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjb2x1bW5cIiwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRGaWxlQ29sdW1ucy5tYXAoKGNvbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NvbH0gdmFsdWU9e2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybURhdGEudHlwZSA9PT0gXCJyZXZlcnNlXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWxlY2Npb25lIGxhcyBjb2x1bW5hcyBkZSBjb29yZGVuYWRhczo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvb3JkZW5hZGEgWDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29vcmRYfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjb29yZFhcIiwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEZpbGVDb2x1bW5zLm1hcCgoY29sKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NvbH0gdmFsdWU9e2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvb3JkZW5hZGEgWTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29vcmRZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjb29yZFlcIiwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEZpbGVDb2x1bW5zLm1hcCgoY29sKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NvbH0gdmFsdWU9e2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNpc3RlbWEgZGUgUmVmZXJlbmNpYTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucmVmZXJlbmNlU3lzdGVtIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcInJlZmVyZW5jZVN5c3RlbVwiLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwY2nDs246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJkZXNjcmlwdGlvblwiLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA+IDEgJiYgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrfT5BdHLDoXM8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTmV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDIgPyBcIkHDsWFkaXJcIiA6IFwiU2lndWllbnRlXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE9yZGVyTW9kYWw7XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywgRm9ybWF0dGVkTWVzc2FnZSwgUmVhY3QsIGpzeCB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcblxyXG5pbnRlcmZhY2UgRHJvcEZpbGVQcm9wcyB7XHJcbiAgb25GaWxlQWNjZXB0ZWQ6IChmaWxlczogRmlsZVtdKSA9PiB2b2lkO1xyXG4gIGFjY2VwdD86IHN0cmluZ1tdO1xyXG4gIG1heEZpbGVzPzogbnVtYmVyO1xyXG4gIHdpZGdldFByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZW9jb2RpbmdEcm9wRmlsZTogUmVhY3QuRkM8RHJvcEZpbGVQcm9wcz4gPSAoe1xyXG4gIG9uRmlsZUFjY2VwdGVkLFxyXG4gIHdpZGdldFByb3BzLFxyXG4gIGFjY2VwdCA9IFtcIipcIl0sXHJcbiAgbWF4RmlsZXMgPSAxLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgTUFYX0ZJTEVTSVpFX01CID0gNTA7XHJcblxyXG4gIGNvbnN0IFtpc0RyYWdBY3RpdmUsIHNldElzRHJhZ0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZTxGaWxlW10+KFtdKTtcclxuXHJcbiAgY29uc3QgaXNGaWxlQWNjZXB0ZWQgPSAoZmlsZXM6IEZpbGVbXSkgPT4ge1xyXG4gICAgcmV0dXJuIGZpbGVzLmZpbHRlcihcclxuICAgICAgKGZpbGUpID0+XHJcbiAgICAgICAgKGFjY2VwdC5pbmNsdWRlcyhcIipcIikgfHwgYWNjZXB0LnNvbWUoKGZpbGV0eXBlKSA9PiBmaWxlLnR5cGUuaW5jbHVkZXMoZmlsZXR5cGUpKSkgJiZcclxuICAgICAgICBmaWxlLnNpemUgLyAoMTAyNCAqIDEwMjQpIDw9IE1BWF9GSUxFU0laRV9NQlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzRHJhZ0FjdGl2ZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0RyYWdBY3RpdmUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0RyYWdBY3RpdmUoZmFsc2UpO1xyXG4gICAgY29uc3QgZmlsZXMgPSBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICBhZGRGaWxlVG9MaXN0KGZpbGVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0aW9uID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgZmlsZXMgPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5maWxlcyB8fCBbXSk7XHJcbiAgICBhZGRGaWxlVG9MaXN0KGZpbGVzKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGFkZEZpbGVUb0xpc3QgPSAoZmlsZXM6IEZpbGVbXSkgPT4ge1xyXG4gICAgY29uc3QgYWNjZXB0ZWRGaWxlcyA9IGlzRmlsZUFjY2VwdGVkKGZpbGVzKTtcclxuICAgIGNvbnN0IGxpbWl0ZWRGaWxlcyA9IGFjY2VwdGVkRmlsZXMuc2xpY2UoMCwgbWF4RmlsZXMpO1xyXG4gICAgaWYgKGxpbWl0ZWRGaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEZpbGVMaXN0KGxpbWl0ZWRGaWxlcyk7XHJcbiAgICAgIG9uRmlsZUFjY2VwdGVkKGxpbWl0ZWRGaWxlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtYXhGaWxlU2l6ZU1lc3NhZ2UgPSB3aWRnZXRQcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGlkOiBcInRleHRfbWF4X2ZpbGVzXCIsXHJcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy50ZXh0X21heF9maWxlcyxcclxuICAgICAgfSkucmVwbGFjZShcInttYXhGaWxlU2l6ZX1cIiwgTUFYX0ZJTEVTSVpFX01CLnRvU3RyaW5nKCkpXHJcbiAgICAgIGFsZXJ0KG1heEZpbGVTaXplTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMaXN0T2ZGaWxlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9yaWdpbmFsRmlsZU1lc3NhZ2UgPSB3aWRnZXRQcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICBpZDogXCJ0ZXh0X2ZpbGVfZGV0YWlsc1wiLFxyXG4gICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnRleHRfZmlsZV9kZXRhaWxzLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsZUxpc3QubWFwKChmaWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgY3VycmVudEZpbGVNZXNzYWdlID0gb3JpZ2luYWxGaWxlTWVzc2FnZS5yZXBsYWNlKFwie2ZpbGVOYW1lfVwiLCBmaWxlLm5hbWUpO1xyXG4gICAgICBjdXJyZW50RmlsZU1lc3NhZ2UgPSBjdXJyZW50RmlsZU1lc3NhZ2UucmVwbGFjZShcIntmaWxlU2l6ZX1cIiwgKGZpbGUuc2l6ZSAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMikpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGNvbG9yOiAgd2lkZ2V0UHJvcHMudGhlbWUudHlwb2dyYXBoeS5jb2xvcnMuY2FwdGlvbiB8fCBcImdyYXlcIiB9fT5cclxuICAgICAgICAgIHtjdXJyZW50RmlsZU1lc3NhZ2V9XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWdPdmVyfVxyXG4gICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhc3BlY3RSYXRpbzogXCIxXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0RyYWdBY3RpdmUgPyB3aWRnZXRQcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5IDogd2lkZ2V0UHJvcHMudGhlbWUuY29sb3JzLndoaXRlLFxyXG4gICAgICAgIGJvcmRlcjogYDJweCBkYXNoZWQgJHt3aWRnZXRQcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjEycHhcIixcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgMCAxMnB4IDBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzRHJhZ0FjdGl2ZSA/IHdpZGdldFByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBcImRyb3BfZmlsZXNfaGVyZVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmRyb3BfZmlsZXNfaGVyZSxcclxuICAgICAgICAgIH0pIDogd2lkZ2V0UHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IFwiZHJvcF9maWxlc19hY3RpdmVcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5kcm9wX2ZpbGVzX2FjdGl2ZSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPEJ1dHRvbiBoaWRkZW49e2lzRHJhZ0FjdGl2ZX0gc2l6ZT1cInNtXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEycHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik/LmNsaWNrKCl9PlxyXG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJidXR0b25fc2VsZWN0X2ZpbGVzXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy5idXR0b25fc2VsZWN0X2ZpbGVzfSAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJmaWxlLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG11bHRpcGxlPXttYXhGaWxlcyA+IDF9XHJcbiAgICAgICAgICBhY2NlcHQ9e2FjY2VwdC5qb2luKFwiLFwiKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZVNlbGVjdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgY29sb3I6IFwiIzU1NVwiIH19PlxyXG4gICAgICAgICAge3dpZGdldFByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBcInRleHRfbWF4X2ZpbGVzXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMudGV4dF9tYXhfZmlsZXMsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAucmVwbGFjZShcInttYXhGaWxlc31cIiwgbWF4RmlsZXMudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoXCJ7bWF4RmlsZVNpemV9XCIsIE1BWF9GSUxFU0laRV9NQi50b1N0cmluZygpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtmaWxlTGlzdC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICBib3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBsZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgcmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6IFwiMTRweFwiLCBtYXJnaW46IFwiMCAwIDhweCAwXCIgfX0+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidGV4dF9zZWxlY3RlZF9maWxlc1wiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMudGV4dF9zZWxlY3RlZF9maWxlc30gLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDx1bCBzdHlsZT17eyBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAge2dldExpc3RPZkZpbGVzKCl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdlb2NvZGluZ0Ryb3BGaWxlO1xyXG4iLCJpbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywgUmVhY3QsIGpzeCB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIENvbnRhaW5lciwgQ29sLCBSb3csIFRvb2x0aXAgfSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQge1xyXG4gIFRhYmxlQ29sdW1uR2VvY29kaW5nLFxyXG4gIFRhYmxlRGF0YUdlb2NvZGluZyxcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9UYWJsZUdlb2NvZGluZ1wiO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FsY2l0ZUljb24gfSBmcm9tICdAZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMtcmVhY3QnO1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmludGVyZmFjZSBUYWJsZUNvbXBvbmVudFByb3BzIGV4dGVuZHMgUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW4ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBjb2x1bW5zOiBUYWJsZUNvbHVtbkdlb2NvZGluZ1tdO1xyXG4gIGRhdGE6IFRhYmxlRGF0YUdlb2NvZGluZ1tdO1xyXG4gIHJvd3NQZXJQYWdlOiBudW1iZXI7XHJcbiAgd2lkZ2V0UHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPlxyXG59XHJcblxyXG5jb25zdCBMYXJnZUNvbHVtbnM6IChrZXlvZiBUYWJsZURhdGFHZW9jb2RpbmcpW10gPSBbXHJcbiAgXCJmaWxlX25hbWVcIiwgXCJkZXNjcmlwdGlvblwiXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBHZW9jb2RpbmdUYWJsZUNvbXBvbmVudDogUmVhY3QuRkM8VGFibGVDb21wb25lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjbGFzc05hbWUgPSBcIlwiLFxyXG4gICAgY29sdW1ucyxcclxuICAgIHJvd3NQZXJQYWdlLFxyXG4gICAgZGF0YSxcclxuICAgIHdpZGdldFByb3BzXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjZWxsQ2xhc3NOYW1lID0gXCJ0ZXh0LXRydW5jYXRlIHAtMVwiO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlU2l6ZSwgc2V0Q3VycmVudFBhZ2VTaXplXSA9IFJlYWN0LnVzZVN0YXRlKHJvd3NQZXJQYWdlKTtcclxuXHJcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gY3VycmVudFBhZ2VTaXplKTtcclxuICBjb25zdCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBjdXJyZW50UGFnZVNpemU7XHJcbiAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgY3VycmVudFBhZ2VTaXplO1xyXG4gIGNvbnN0IHBhZ2luYXRlZERhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChjdXJyZW50OiBudW1iZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VTaXplQ2hhbmdlID0gKHNpemU6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2VTaXplKHNpemUpO1xyXG4gICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVGFibGVSb3cgPSAocm93OiBUYWJsZURhdGFHZW9jb2RpbmcsIHJvd0luZGV4OiBudW1iZXIpOiBqc3guSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17cm93SW5kZXh9PlxyXG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4gY3JlYXRlVGFibGVDZWxsKHJvdywgaW5kZXgsIGNvbHVtbikpfVxyXG4gICAgICA8L3RyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVUYWJsZUNlbGwgPSAocm93OiBUYWJsZURhdGFHZW9jb2RpbmcsIGluZGV4OiBudW1iZXIsIGNvbHVtbjogVGFibGVDb2x1bW5HZW9jb2RpbmcpOiBqc3guSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEZpZWxkID0gY29sdW1uLmZpZWxkO1xyXG4gICAgY29uc3QgbGFiZWwgPSByb3dbY3VycmVudEZpZWxkXSAhPT0gdW5kZWZpbmVkICYmIHJvd1tjdXJyZW50RmllbGRdICE9PSBudWxsID8gcm93W2N1cnJlbnRGaWVsZF0gOiBcIlwiO1xyXG4gICAgY29uc3QgY3VycmVudENvbHVtbiA9IGNvbHVtbnMuZmluZChjb2wgPT4gY29sLmZpZWxkID09IGN1cnJlbnRGaWVsZCk7XHJcbiAgICBjb25zdCBpY29uID0gY3VycmVudENvbHVtbi5pY29uID8gY2xvbmVFbGVtZW50PHR5cGVvZiBDYWxjaXRlSWNvbj4oY3VycmVudENvbHVtbi5pY29uLCB7fSkgOiBudWxsO1xyXG4gICAgcmV0dXJuIDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NlbGxDbGFzc05hbWUgKyAoaWNvbiA/IFwiIHRleHQtY2VudGVyXCIgOiBcIlwiKX0gc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTByZW1cIiB9fT5cclxuICAgICAge0xhcmdlQ29sdW1ucy5pbmNsdWRlcyhjdXJyZW50RmllbGQpID9cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17bGFiZWx9IHBsYWNlbWVudD1cInRvcFwiIGZvbGxvd0N1cnNvcj5cclxuICAgICAgICAgIHtpY29uID8gaWNvbiA6IDxhPntsYWJlbH08L2E+fVxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA6XHJcbiAgICAgICAgaWNvbiA/IGljb24gOiA8YT57bGFiZWx9PC9hPlxyXG4gICAgICB9XHJcbiAgICA8L3RkPjtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1widGFibGUtY29tcG9uZW50IGgtMTAwIHctMTAwIFwiICsgY2xhc3NOYW1lfSA+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDBcIj5cclxuICAgICAgICA8Um93IHN0eWxlPXt7XHJcbiAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgbWF4SGVpZ2h0OiBcIjIyMHB4XCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgc3RyaXBlZD5cclxuICAgICAgICAgICAgPHRoZWFkIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB3aWRnZXRQcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeSxcclxuICAgICAgICAgICAgICBjb2xvcjogIHdpZGdldFByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSxcclxuICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICB6SW5kZXg6IDIsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdzdGlja3knLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uLmljb24gPyBcIjMlXCIgOiBMYXJnZUNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmZpZWxkKSA/IFwiMTclXCIgOiBcImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJwLTFcIiBzY29wZT1cImNvbHVtblwiIGtleT17Y29sdW1uLmZpZWxkfT57Y29sdW1uLmljb24gPyBcIlwiIDogY29sdW1uLmxhYmVsfTwvdGg+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRlZERhdGEubWFwKGNyZWF0ZVRhYmxlUm93KX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24tc2VsZi1lbmRcIj5cclxuICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgYm91bmRhcnlDb3VudD17MX1cclxuICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVudD17MX1cclxuICAgICAgICAgICAgICBwYWdlU2l6ZT17Y3VycmVudFBhZ2VTaXplfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgdG90YWxQYWdlPXt0b3RhbFBhZ2V9XHJcbiAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbNSwgMTAsIDIwXX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17aGFuZGxlUGFnZVNpemVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZGVkXCJcclxuICAgICAgICAgICAgICBzaWJsaW5nQ291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZpZWxkX29yZGVyX2NvZGU6IFwiQ29kaWdvIFBlZGlkb1wiLFxyXG4gICAgZmllbGRfZmlsZV9uYW1lOiBcIk5vbWJyZSBGaWNoZXJvXCIsXHJcbiAgICBmaWVsZF90eXBlOiBcIlRpcG9cIixcclxuICAgIGZpZWxkX3Jvd3NfdG9fcHJvY2VzczogXCJGaWxhcyBwcm9jZXNhclwiLFxyXG4gICAgZmllbGRfZGVzY3JpcHRpb246IFwiRGVzY3JpcGNpb25cIixcclxuICAgIGZpZWxkX3N0YXR1czogXCJFc3RhZG9cIixcclxuICAgIGZpZWxkX3JlcXVlc3RfZGF0ZTogXCJGZWNoYSBTb2xpY2l0dWRcIixcclxuICAgIGZpZWxkX2NvbXBsZXRpb25fZGF0ZTogXCJGZWNoYSBGaW5cIixcclxuICAgIGZpZWxkX3ZpZXdfZGF0YTogXCJcIixcclxuICAgIGZpZWxkX2Vycm9yX2xvZzogXCJcIixcclxuICAgIGZpZWxkX2Rvd25sb2FkOiBcIlwiLFxyXG4gICAgZmllbGRfZGVsZXRlOiBcIlwiLFxyXG4gICAgYnV0dG9uX2FkZF9vcmRlcjogXCJBw7FhZGlyIHBlZGlkb1wiLFxyXG4gICAgYnV0dG9uX3JlZnJlc2g6IFwiUmVmcmVzY2FyXCIsXHJcblxyXG4gICAgLy8gR2VvY29kaW5nRHJvcEZpbGVcclxuICAgIGRyb3BfZmlsZXNfaGVyZTogXCJBcnJhc3RyYSB5IHN1ZWx0YSB0dXMgYXJjaGl2b3MgYXF1w61cIixcclxuICAgIGRyb3BfZmlsZXNfYWN0aXZlOiBcIlN1ZWx0YSBsb3MgYXJjaGl2b3MgYXF1w60uLi5cIixcclxuICAgIGJ1dHRvbl9zZWxlY3RfZmlsZXM6IFwiU2VsZWNjaW9uYXIgQXJjaGl2b3NcIixcclxuICAgIHRleHRfbWF4X2ZpbGVzOiBcIlRhbWHDsW8gbcOheGltbzoge21heEZpbGVTaXplfSBNQlwiLFxyXG4gICAgYWxlcnRfZmlsZV9ub3RfYWNjZXB0ZWQ6IFwiQXJjaGl2byBubyBhY2VwdGFkbyBvIGV4Y2VkZSB7bWF4RmlsZVNpemV9IE1CLlwiLFxyXG4gICAgdGV4dF9zZWxlY3RlZF9maWxlczogXCJBcmNoaXZvcyBzZWxlY2Npb25hZG9zOlwiLFxyXG4gICAgdGV4dF9maWxlX2RldGFpbHM6IFwie2ZpbGVOYW1lfSAtIHtmaWxlU2l6ZX0gTUJcIixcclxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZXNyaV9jYWxjaXRlX2NvbXBvbmVudHNfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRDb25maWcsIElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHZW9jb2RpbmdUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvVGFibGVDb21wb25lbnRcIjtcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRhYmxlQ29sdW1uR2VvY29kaW5nLFxyXG4gIFRhYmxlRGF0YUdlb2NvZGluZyxcclxufSBmcm9tIFwiLi9pbnRlcmZhY2VzL1RhYmxlR2VvY29kaW5nXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IE1vY2tEYXRhLCBUYWJsZUNvbHVtbnNEZWNsYXJhdGlvbnMgfSBmcm9tIFwiLi9hc3NldHMvdGFibGVfZGF0YVwiO1xyXG5pbXBvcnQgR2VvY29kaW5nRHJvcEZpbGVBcmVhIGZyb20gXCIuL2NvbXBvbmVudHMvRHJvcEZpbGVcIjtcclxuaW1wb3J0IEFkZE9yZGVyTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9BZGRPcmRlck1vZGFsXCI7XHJcbmltcG9ydCB7IE9yZGVyRGF0YSB9IGZyb20gXCIuL2ludGVyZmFjZXMvR2VvY29kaW5nT3JkZXJcIjtcclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgeyBjb25maWcgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IFt0YWJsZURhdGEsIHNldFRhYmxlRGF0YV0gPSB1c2VTdGF0ZTxUYWJsZURhdGFHZW9jb2RpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50RmlsZXMsIHNldEN1cnJlbnRGaWxlc10gPSB1c2VTdGF0ZTxGaWxlW10+KFtdKTtcclxuICBjb25zdCBbaXNBZGRPcmRlck1vZGFsT3Blbiwgc2V0SXNBZGRPcmRlck1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvd3NQZXJQYWdlID1cclxuICAgIGNvbmZpZz8uZ3JpZENvbmZpZz8ucm93c1BlclBhZ2UgfHwgZGVmYXVsdENvbmZpZy5ncmlkQ29uZmlnLnJvd3NQZXJQYWdlO1xyXG4gIGNvbnN0IHRhYmxlQ29sdW1uczogVGFibGVDb2x1bW5HZW9jb2RpbmdbXSA9IFRhYmxlQ29sdW1uc0RlY2xhcmF0aW9ucy5tYXAoKGRlY2xhcmF0aW9uKSA9PiAoe1xyXG4gICAgbGFiZWw6IHByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgIGlkOiBkZWNsYXJhdGlvbi5kZWZhdWx0TWVzc2FnZSxcclxuICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tkZWNsYXJhdGlvbi5kZWZhdWx0TWVzc2FnZV0sXHJcbiAgICB9KSxcclxuICAgIGZpZWxkOiBkZWNsYXJhdGlvbi5maWVsZCxcclxuICAgIGljb246IGRlY2xhcmF0aW9uLmljb24sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCByZW5kZXJCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiOHB4XCIsIG1hcmdpblRvcDogXCI4cHhcIiB9fT5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiYnV0dG9uX3JlZnJlc2hcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdE1lc3NhZ2VzLmJ1dHRvbl9yZWZyZXNofSAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiOHB4XCIgfX0+XHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImJ1dHRvbl9hZGRfb3JkZXJcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdE1lc3NhZ2VzLmJ1dHRvbl9hZGRfb3JkZXJ9IC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCJDb2x1bW5zOlwiLCB0YWJsZUNvbHVtbnMpO1xyXG4gIGNvbnNvbGUubG9nKFwiRGF0YTpcIiwgdGFibGVEYXRhKTtcclxuICBjb25zb2xlLmxvZyh7IHByb3BzIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1nZW9jb2RlIGgtMTAwXCIgPlxyXG4gICAgICB7dGFibGVEYXRhICYmIHRhYmxlRGF0YS5sZW5ndGggPiAwID9cclxuICAgICAgICA8R2VvY29kaW5nVGFibGVDb21wb25lbnRcclxuICAgICAgICAgIHdpZGdldFByb3BzPXtwcm9wc31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAwXCJcclxuICAgICAgICAgIGNvbHVtbnM9e3RhYmxlQ29sdW1uc31cclxuICAgICAgICAgIGRhdGE9e3RhYmxlRGF0YX1cclxuICAgICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cmVuZGVyQnV0dG9ucygpfVxyXG4gICAgICAgIDwvR2VvY29kaW5nVGFibGVDb21wb25lbnQ+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxHZW9jb2RpbmdEcm9wRmlsZUFyZWFcclxuICAgICAgICAgIHdpZGdldFByb3BzPXtwcm9wc31cclxuICAgICAgICAgIG9uRmlsZUFjY2VwdGVkPXsoZmlsZXM6IEZpbGVbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RmlsZXMoZmlsZXMpO1xyXG4gICAgICAgICAgICBzZXRJc0FkZE9yZGVyTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgIDxBZGRPcmRlck1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtpc0FkZE9yZGVyTW9kYWxPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgIHNldElzQWRkT3JkZXJNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyhkYXRhOiBPcmRlckRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcclxuICAgICAgICAgIHNldFRhYmxlRGF0YShNb2NrRGF0YSk7XHJcbiAgICAgICAgICBzZXRJc0FkZE9yZGVyTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZpbGVOYW1lPXtcIlwifVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==