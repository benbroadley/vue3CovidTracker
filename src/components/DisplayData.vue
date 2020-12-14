<template>
  <ag-grid-vue
    style="height: 500px;"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :gridOptions="gridOptions"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "DisplayData",
  props: { data: { required: true } },
  data() {
    return {
      columnDefs: null,
      rowData: [],
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "Date", field: "date", sortable: true },
      {
        headerName: "Area Name",
        field: "areaName",
        sortable: true,
        filter: true,
      },
      { headerName: "New Admissions", field: "newAdmissions", sortable: true },
      {
        headerName: "New Cases by Specimen date",
        field: "newCasesBySpecimenDate",
        sortable: true,
      },
      {
        headerName: "New Deaths by Death date",
        field: "newDeathsByDeathDate",
        sortable: true,
      },
      { headerName: "New Virus Tests", field: "newVirusTests", sortable: true },
      {
        headerName: "New Cases by Publish date",
        field: "newCasesByPublishDate",
        sortable: true,
      },
    ];

    this.rowData = this.data;

    this.gridOptions = {
      enableCharts: true,
      enableRangeSelection: true,
    };
  },
};
</script>

<style lang="scss"></style>
