import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      todos: [],
      error: null,
    };
  },
  getters: {
    todoList(state) {
      return state.todos;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    addTodo: (state, item) => {
      state.todos.unshift({
        text: item,
        isComplete: false,
      });
    },
    markDone: (state, idx) => {
      state.todos[idx].isComplete = !state.todos[idx].isComplete;
    },
    error: (state, errText) => {
      state.error = `ERROR: ${errText}`;
      setTimeout(() => {
        state.error = "";
      }, 1500);
    },
  },
  actions: {
    addTodo: ({ commit }, item) => {
      if (!item) {
        commit("error", "Cannot add an empty item.");
        return;
      }
      commit("addTodo", item);
    },
    markDone: ({ commit }, idx) => {
      commit("markDone", idx);
    },
  },
});
