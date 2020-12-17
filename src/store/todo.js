import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      todos: [{ text: "hi", isComplete: false }],
    };
  },
  getters: {
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    addTodo: (state, item) => {
      console.log("called", item);

      state.todos.unshift({
        text: item,
        isComplete: false,
      });
    },
    markDone: (state, idx) => {
      state.todos[idx].isComplete = !state.todos[idx].isComplete;
    },
  },
  actions: {
    addTodo: ({ commit }, item) => {
      console.log("called", item);
      if (!item) return;
      commit("addTodo", item);
    },
    markDone: ({ commit }, idx) => {
      console.log("markingDone", idx);
      commit("markDone", idx);
    },
  },
});
