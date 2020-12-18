<template>
  <transition-group name="list">
    <p v-for="(item, idx) in items" :key="item" class="list-item">
      {{ item.isComplete ? "✔" : "◼" }}
      <span
        @click="markAsDone(idx)"
        :class="{ 'is-complete': item.isComplete }"
        >{{ item.text }}</span
      >
      <span @click="removeTodo(idx)" class="remove-todo">❌</span>
    </p>
  </transition-group>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "DisplayItems",
  setup() {
    const store = useStore();

    function markAsDone(idx) {
      store.dispatch("markDone", idx);
    }
    function removeTodo(idx) {
      store.dispatch("removeTodo", idx);
    }

    return {
      items: computed(() => store.getters.todoList),
      markAsDone,
      removeTodo,
    };
  },
};
</script>

<style lang="scss" scoped>
.is-complete {
  text-decoration: line-through;
}
.list-item {
  cursor: pointer;
  display: block;
  margin-right: 10px;
}
.remove-todo {
  margin-left: 5px;
}
</style>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
