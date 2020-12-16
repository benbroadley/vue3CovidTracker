<template>
  <transition-group name="list">
    <p
      v-for="item in items"
      :key="item"
      class="list-item"
      @click="markAsDone(item)"
    >
      {{ item.isComplete ? "✔" : "◼" }}
      <span :class="{ 'is-complete': item.isComplete }">{{ item.text }}</span>
    </p>
  </transition-group>
</template>

<script>
export default {
  name: "DisplayItems",
  props: {
    items: {
      required: true,
      default: [],
    },
  },
  setup(props) {
    function markAsDone(item) {
      item.isComplete = !item.isComplete;
    }

    return {
      items: props.items,
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
