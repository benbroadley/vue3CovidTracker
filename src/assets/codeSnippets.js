const vue2GlobalApi = `
// Vue 2
import Vue from "vue";
import App from "./App.vue";

Vue.config.ignoredElements = [/^app-/];
Vue.use(/* ... */);
Vue.mixin(/* ... */);
Vue.component(/* ... */);
Vue.directive(/* ... */);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
`;

const vue3GlobalApi = `
// Vue 3
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp();

app.config.ignoredElements = [/^app-/];
app.use(/* ... */);
app.mixin(/* ... */);
app.component(/* ... */);
app.directive(/* ... */);

app.mount(App, "#app");`;

const multipleRootNodes = `
<template>
  <h1>Title</h1>
  <p>content</p>
  <p>content</p>
  <p>content</p>
</template>`;

const teleport = `
<teleport to="body">
  <div v-if="modalOpen" class="modal">
    <div>
      I'm a teleported modal! (My parent is "body")
      <button @click="modalOpen = false">Close</button>
    </div>
  </div>
</teleport>`;

const vue2CompositionApi = `
<template>
  <!-- Vue 2 example. -->
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

<style scoped></style>`;

const vue3CompositionApi = `
<template>
  <!-- Vue 3 example. -->
  <p>My new item component:</p>
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

<style scoped></style>`;

export default {
  vue2GlobalApi,
  vue3GlobalApi,
  multipleRootNodes,
  teleport,
  vue2CompositionApi,
  vue3CompositionApi,
};
