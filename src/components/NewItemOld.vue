<template>
  <input type="text" v-model="itemToAdd" />
  <button v-on:click="addNewItem()">Add item</button>
</template>

<script>
export default {
  name: "NewItem",
  props: {
    addItem: {
      required: true,
    },
  },
  data() {
    return {
      itemToAdd: "",
    };
  },
  methods: {
    addNewItem() {
      this.addItem(this.itemToAdd);
      this.itemToAdd = "";
    },
  },
};
</script>

<style scoped></style>
