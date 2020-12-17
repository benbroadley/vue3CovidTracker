<template>
  <transition-group name="list">
    <p
      v-for="(item, idx) in items"
      :key="item"
      class="list-item"
      @click="markAsDone(idx)"
    >
      {{ item.isComplete ? "✔" : "◼" }}
      <span :class="{ 'is-complete': item.isComplete }">{{ item.text }}</span>
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

    return {
      items: computed(() => store.getters.todoList),
      markAsDone,
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
