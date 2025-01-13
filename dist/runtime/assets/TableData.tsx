import { React } from "jimu-core";
import { TableColumnGeocodingDeclaration, GeocodingDataValue } from "../interfaces/TableGeocoding";
import { CalciteIcon } from "@esri/calcite-components-react";
import { SpatialReference } from "esri/geometry";
import { GeocodingSpatialReference } from "../interfaces/GeocodingOrder";

export const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante a augue sollicitudin ultricies. "
  + "Donec eget dolor sem. Nulla tincidunt urna et ante pretium consequat. Pellentesque mattis at lacus quis vehicula. "
  + "Quisque varius tristique diam quis fringilla. Pellentesque tincidunt finibus dolor. Etiam quis neque magna. "
  + "Vestibulum venenatis lorem metus, quis posuere nisl consequat eu. Ut in libero in nulla congue cursus. "
  + "Mauris lacus risus, laoreet in hendrerit sed, pulvinar quis mi. Morbi sit amet turpis nisi. "
  + "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam efficitur posuere congue. "
  + "Duis lorem quam, pharetra commodo mauris in, pretium molestie nisl. Ut finibus suscipit nisi.";

export const GeocodingSpatialReferences: GeocodingSpatialReference[] = [
  {
    name: "WGS84",
    label: "WGS84",
    spatialRef: SpatialReference.WGS84,
  },
  {
    name: "WebMercator",
    label: "Web Mercator",
    spatialRef: SpatialReference.WebMercator
  }
]

export const TableColumnsDeclarations: TableColumnGeocodingDeclaration[] = [
  {
    defaultMessage: "field_order_code",
    field: {
      key: "order_code",
      name: "COD_PEDIDO"
    }
  },
  {
    defaultMessage: "field_file_name",
    field: {
      key: "file_name",
      name: "NOM_FICHERO"
    }
  },
  {
    defaultMessage: "field_type",
    field: {
      key: "type",
      name: "TIPO_GEO"
    }
  },
  {
    defaultMessage: "field_rows_to_process",
    field: {
      key: "rows_to_process",
      name: "FILAS_PROCESAR"
    }
  },
  {
    defaultMessage: "field_description",
    field: {
      key: "description",
      name: "DESCRIPCION"
    }
  },
  {
    defaultMessage: "field_status",
    field: {
      key: "status",
      name: "ESTADO"
    },
  },
  {
    defaultMessage: "field_request_date",
    field: {
      key: "request_date",
      name: "FEC_SOLICITUD"
    },
  },
  {
    defaultMessage: "field_completion_date",
    field: {
      key: "completion_date",
      name: "FEC_FIN_GEO"
    },
  },
  {
    defaultMessage: "field_error_log",
    field: {
      key: "error_log"
    },
    icon: <CalciteIcon icon="exclamation-mark-circle" scale="s"> </CalciteIcon>
  },
  {
    defaultMessage: "field_view_data",
    field: {
      key: "view_data"
    },
    icon: <CalciteIcon icon="view-visible" scale="s"> </CalciteIcon>,
    iconDisabled: <CalciteIcon icon="view-hide" scale="s"> </CalciteIcon>
  },
  {
    defaultMessage: "field_download",
    field: {
      key: "download"
    },
    icon: <CalciteIcon icon="save" scale="s"> </CalciteIcon>
  },
  {
    defaultMessage: "field_delete",
    field: {
      key: "delete"
    },
    icon: <CalciteIcon icon="trash" scale="s"> </CalciteIcon>
  },
];