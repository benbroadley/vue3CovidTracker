<template>
  <!-- Vue 2 example -->
  <div>
    <p>My new item component:</p>
    <form @submit.prevent="addNewItem">
      <input type="text" v-model="itemToAdd" />
      <button>Add item</button>
    </form>
  </div>
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
