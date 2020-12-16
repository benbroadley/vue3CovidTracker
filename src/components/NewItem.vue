<template>
  <form @submit.prevent="addNewItem">
    <input type="text" v-model="itemToAdd" />
    <button>Add item</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    addItem: {
      required: true,
    },
  },
  setup(props) {
    const itemToAdd = ref("");

    function addNewItem() {
      props.addItem(itemToAdd.value);
      itemToAdd.value = "";
    }

    return {
      itemToAdd,
      addNewItem,
    };
  },
};
</script>

<style scoped></style>
