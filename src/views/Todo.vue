<template>
  <div class="todo">
    <h1>Todo</h1>
    <p>Number of things left to do: {{ count }}</p>
    <NewItem />
    <DisplayItems />
  </div>
</template>

<script>
import DisplayItems from "@/components/DisplayItems.vue";
import NewItem from "@/components/NewItem.vue";

import { ref, computed } from "vue";
import { filter } from "lodash";

export default {
  components: {
    DisplayItems,
    NewItem,
  },
  setup() {
    const itemsToDisplay = ref([]);
    const count = computed(
      () => filter(itemsToDisplay.value, (item) => !item.isComplete).length
    );

    function addItem(item) {
      if (!item) return;
      itemsToDisplay.value.unshift({
        text: item,
        isComplete: false,
      });
    }

    return {
      count,
      addItem,
      itemsToDisplay,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo {
  text-align: center;
}
</style>
