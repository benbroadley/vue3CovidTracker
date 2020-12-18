<template>
  <div class="todo">
    <h1>Todo</h1>
    <transition name="fade">
      <div v-if="msg.text" :class="`notification msg-text ${msg.type}`">
        <p>{{ msg.text }}</p>
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
      msg: computed(() => store.getters.msg),
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
  background-color: #e0474b;
}

.info {
  background-color: #2357ad;
}

.success {
  background-color: #359b47;
}

.notification {
  position: fixed;
  bottom: 0;
  right: 0;
  color: #ffffff;
}
.msg-text {
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 1rem 1.5rem;
}
</style>
