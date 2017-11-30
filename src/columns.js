const columns = [
  {
    columnId: "S1",
    headerName: "image",
    fileHeaderName: "image",
    type: "IMAGE",
    width: 150,
    sticky: true
  },
  {
    columnId: "S2",
    headerName: "title",
    fileHeaderName: "title",
    type: "TEXT",
    width: 150,
    sticky: true,
    sortable: true,
    filterType: "TEXT"
  },
  {
    columnId: "S3",
    headerName: "asin",
    fileHeaderName: "asin",
    type: "TEXT",
    width: 150,
    editType: "TEXT",
    editable: true,
    sortable: true,
    filterType: "TEXT"
  },
  {
    columnId: "S4",
    headerName: "parent_asin",
    fileHeaderName: "parent_asin",
    type: "TEXT",
    width: 150,
    editType: "TEXT",
    editable: true,
    sortable: true,
    filterType: "TEXT"
  },
  {
    columnId: "S5",
    headerName: "marketplace",
    fileHeaderName: "marketplace",
    type: "TEXT",
    sortable: true,
    width: 150
  },
  {
    columnId: "S22",
    headerName: "impressions",
    fileHeaderName: "impressions",
    type: "NUMBER",
    width: 150,
    sortable: true,
    filterType: "NUMBER",
    comparison: [
      {
        columnId: "S23",
        headerName: "impressions",
        fileHeaderName: "impressions",
        type: "NUMBER",
        width: 150
      },
      {
        columnId: "S24",
        headerName: "Previous",
        fileHeaderName: "Previous",
        type: "NUMBER",
        width: 150
      },
      {
        columnId: "S25",
        headerName: "Delta",
        fileHeaderName: "Delta",
        type: "NUMBER",
        width: 150
      },
      {
        columnId: "S26",
        headerName: "Delta %",
        fileHeaderName: "Delta %",
        type: "NUMBER",
        width: 150
      }
    ]
  },
  {
    columnId: "S6",
    headerName: "channel",
    fileHeaderName: "channel",
    type: "CHANNEL",
    width: 150
  },
  {
    columnId: "S7",
    headerName: "publisher",
    fileHeaderName: "publisher",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S8",
    headerName: "upc",
    fileHeaderName: "upc",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S9",
    headerName: "ean",
    fileHeaderName: "ean",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S10",
    headerName: "brand",
    fileHeaderName: "brand",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S11",
    headerName: "availability",
    fileHeaderName: "availability",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S12",
    headerName: "price",
    fileHeaderName: "price",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S13",
    headerName: "lowest_price",
    fileHeaderName: "lowest_price",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S14",
    headerName: "customer_review",
    fileHeaderName: "customer_review",
    type: "NUMBER",
    width: 150
  },
  {
    columnId: "S15",
    headerName: "department",
    fileHeaderName: "department",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S16",
    headerName: "import_date",
    fileHeaderName: "import_date",
    type: "DATE",
    width: 150
  },
  {
    columnId: "S17",
    headerName: "color",
    fileHeaderName: "color",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S18",
    headerName: "manufacturer",
    fileHeaderName: "manufacturer",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S19",
    headerName: "model",
    fileHeaderName: "model",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S20",
    headerName: "mpn",
    fileHeaderName: "mpn",
    type: "TEXT",
    width: 150
  },
  {
    columnId: "S21",
    headerName: "similiar_products",
    fileHeaderName: "similiar_products",
    type: "TEXT",
    width: 150
  }
];

export default columns;
