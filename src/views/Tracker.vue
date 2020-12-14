<template>
  <div class="about">
    <h1>This is where my Covid 19 Tracking page will live</h1>
    <DisplayData v-if="c19Data" :data="c19Data" />
  </div>
</template>

<script>
import axios from "axios";
import DisplayData from "@/components/DisplayData.vue";
import { sortBy } from "lodash";

export default {
  data() {
    return {
      c19Data: null,
    };
  },
  components: {
    DisplayData,
  },
  async created() {
    let c19 = await axios.get("http://localhost:3000/c19Data");
    this.c19Data = c19.data.body;
  },
};
</script>
