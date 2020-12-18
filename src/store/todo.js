import { createStore } from "vuex";
import { toUpper } from "lodash";

// Create a new store instance.
export default createStore({
  state() {
    return {
      todos: [],
      msg: {},
    };
  },
  getters: {
    todoList(state) {
      return state.todos;
    },
    msg(state) {
      return state.msg;
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
    removeTodo: (state, idx) => {
      state.todos.splice(idx, 1);
    },
    msg: (state, { type, text }) => {
      state.msg = { text: `${toUpper(type)}: ${text}`, type };
      setTimeout(() => {
        state.msg = {};
      }, 1500);
    },
  },
  actions: {
    addTodo: ({ commit }, item) => {
      if (!item) {
        commit("msg", { type: "error", text: "Cannot add an empty item." });
        return;
      }
      commit("addTodo", item);
    },
    markDone: ({ commit }, idx) => {
      commit("msg", {
        type: "success",
        text: "Yes! Go you for completing a task.",
      });
      commit("markDone", idx);
    },
    removeTodo: ({ commit }, idx) => {
      commit("msg", { type: "info", text: "Todo has been removed." });
      commit("removeTodo", idx);
    },
  },
});
