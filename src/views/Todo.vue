<template>
  <div class="todo">
    <h1>Todo</h1>
    <transition name="fade">
      <div v-if="errorText" class="error">
        <p>{{ errorText }}</p>
      </div>
    </transition>
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
import { useStore } from "vuex";

export default {
  components: {
    DisplayItems,
    NewItem,
  },
  setup() {
    const store = useStore();
    const count = computed(
      () => filter(store.getters.todoList, (item) => !item.isComplete).length
    );

    return {
      errorText: computed(() => store.getters.error),
      count,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo {
  text-align: center;
}

.error {
  position: fixed;
  bottom: 0;
  right: 0;

  p {
    border-radius: 5px;
    margin-right: 10px;
    padding: 1rem 1.5rem;
    background-color: #d00000;
    color: #ffffff;
  }
}
</style>
