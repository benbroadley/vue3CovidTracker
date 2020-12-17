<template>
  <form @submit.prevent="addNewItem">
    <input type="text" v-model="itemToAdd" />
    <button>Add item</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup(props) {
    const store = useStore();
    const itemToAdd = ref("");

    function addNewItem() {
      store.dispatch("addTodo", itemToAdd.value);
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
