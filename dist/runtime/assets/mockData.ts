import { GeocodeResponse } from "../interfaces/GeocodingOrder"


const Values_Ok: GeocodeResponse = {
  success: true,
  message: "Se ha recuperado la informacion correctamente.",
  data: [
    {
      "COD_PEDIDO": 1,
      "NOM_FICHERO": "geocoding_1.xlsx",
      "RUTA_FICHERO": "/uploads/geocoding_1.xlsx",
      "COD_USUARIO": "user123",
      "TIPO_GEO": 0,
      "ESTADO": 1,
      "FEC_SOLICITUD": "2024-12-22T12:00:00",
      "FEC_FIN_GEO": "2024-12-23T14:00:00",
      "COLUMNA_X": "Longitude",
      "COLUMNA_Y": "Latitude",
      "COLUMNA_DIRECCION": "Address",
      "SRS": "4326",
      "DESCRIPCION": "Mock geocoding process",
      "FILAS_PROCESAR": 150,
      "EMAIL": "user123@example.com"
    },
    {
      "COD_PEDIDO": 2,
      "NOM_FICHERO": "geocoding_2.xlsx",
      "RUTA_FICHERO": "/uploads/geocoding_2.xlsx",
      "COD_USUARIO": "user456",
      "TIPO_GEO": 1,
      "ESTADO": 0,
      "FEC_SOLICITUD": "2024-12-22T14:00:00",
      "FEC_FIN_GEO": null,
      "COLUMNA_X": "X",
      "COLUMNA_Y": "Y",
      "COLUMNA_DIRECCION": null,
      "SRS": "102100",
      "DESCRIPCION": "Mock reverse geocoding process",
      "FILAS_PROCESAR": 250,
      "EMAIL": "user456@example.com"
    }
  ]
}
const Values_Er: GeocodeResponse = {
  "success": false,
  "errorCode": 8,
  "message": "Error al recopilar datos de la base de datos."
}

const Descargar_Ok: GeocodeResponse = {
  message: "Se ha recuperado el archivo de descarga correctamente.",
  success: true,
  file: {
    fileName: "geocoding_1_GEO.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    size: 512000,
    downloadUrl: "/downloads/geocoding_1_GEO.xlsx"
  },
}

const Descargar_Er: GeocodeResponse = {
  "success": false,
  "errorCode": 7,
  "message": "El fichero no está en un estado que permita su descarga."
}

const Borrar_Ok: GeocodeResponse = {
  "success": true,
  "message": "El registro fue eliminado correctamente."
}

const Borrar_Er: GeocodeResponse = {
  "success": false,
  "errorCode": 13,
  "message": "El registro no pudo ser eliminado. Parámetro de entrada no válido."
}

const Update_Ok: GeocodeResponse = {
  "success": true,
  "message": "El registro fue creado correctamente."
}

const Update_Er: GeocodeResponse = {
  "success": false,
  "errorCode": 4,
  "message": "Error al insertar los datos en la tabla para procesos."
}



export const MockData = {
  Values: {
    ok: Values_Ok,
    error: Values_Er,
  },
  Update: {
    ok: Update_Ok,
    error: Update_Er,
  },
  Descargar: {
    ok: Descargar_Ok,
    error: Descargar_Er,
  },
  Borrar: {
    ok: Borrar_Ok,
    error: Borrar_Er,
  }
}