# Vue.js 3 - A <u>_view_</u> into what's nue

## Smaller, *Better*, Faster, Stronger 🤖

Vue 3 was released on 18th September 2020 and it represents two years of development efforts to make it smaller, *better*, faster, stronger. This development can be split into **2600+** commits, **628** pull requests from **99** contributors.

Vue had a very simple mission from the beginning which was 'to be an approachable framework that anyone can quickly learn'. Today, there are over **1.3 million** users worldwide.

For version 3, Vue was completely re-written from the ground up into a collection of decoupled modules. It was also written in TypeScript, with automatically generated, tested and bundled type definitions so they are always up-to-date. This was primarily done for improved maintainability but it also offers the end users the ability to benefit more from tree-shaking. Some of these decoupled modules can also be used on their own, such as the `@vue/reactivity` module which provides direct access into Vue's reactivity system without needing to be used alongside the UI elements.

Possibly the *biggest* and *most controversial* update is the inclusion of a new set of APIs aimed at addressing some of the pain points that of using Vue in large scale applications - this is called the **Composition API** (I'll talk more about this later down there 👇).

Performance is a big topic for any/all developers and Vue 3 has demonstrated significant performance improvements over Vue 2 in terms of bundling size, initial render, updates and memory usage.

## The Re-write 📝

Vue 3 has been completely re-written from the ground up, using TypeScript. There were a few reasons for this but the main two were for better maintenance and improved performance.

DOM (Document Object Model) is an abstraction of structured text, where HTML Tags become nodes in the DOM. While HTML is text, the DOM is an in-memory representation of this text in form of nodes. The DOM provides an interface (API) to traverse and modify the nodes by methods like `getElementByID` or `removeChild`. It is basically a way of connecting HTML and JavaScript.

Vue uses something called the **Virtual DOM** (VDOM) which is a way of representing the actual DOM with JavaScript Objects. It is basically just a component tree of all the virtual nodes and it's a more efficient way to make updates to the actual DOM.

Within a traditional VDOM, the watcher is the bottleneck, i.e. the 'has something changed yet?' loop to then make the required updates. The performance of a traditional VDOM is mostly determined by the total size of the template as opposed to just the amount of dynamic content.

With the Vue 3 re-write, they've focused on a compiler-informed Virtual DOM' so that performance can now be determined by the amount of dynamic content instead of the total template size. Benchmarking has shown this to improve performance by **120-130%**.

The performance improvements don't stop there and over Vue 2, the following has been seen:

Bundle sizes of **41%** lighter with tree-shaking.

- Initial render times of **55%** faster.
- Updates happening **133%** faster.
- and memory usage being up to **54%** less.

## Show me some code 👨‍💻

Let's jump into some changes and see what has actually changed with Vue 3 and how it can be used in <u>your</u> applications.

We're going to start with the Global API changes.

## Global API changes 🌍

The Global API changes are going to impact anyone using and setting up a Vue application as it changes how we need to create an instantiate an app. With Vue 3, we now have more freedom to run multiple application with differing options and configuration as we have a concept of an `app` and we're able to apply configuration settings to this rather than globally. Take a look at the snippet below 👇.

As you can see in the example, with Vue 2, we set all the behaviours and configuration at `Vue` level which means that it is set globally. Whereas, in Vue 3, we create an instance of an `app` and then can make the changes and additions just to that one instance.

```javascript
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
```

```javascript
// Vue 3
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp();

app.config.ignoredElements = [/^app-/];
app.use(/* ... */);
app.mixin(/* ... */);
app.component(/* ... */);
app.directive(/* ... */);

app.mount(App, "#app");
```

## Multiple root nodes

This is a really simple change and something I always wondered why it wasn't in from the beginning, but now we're able to have multiple root nodes, rather than having to wrap everything in a superfluous `div` tag.

In the documentation, these are referred to as `fragments`.

```html
<template>
  <h1>Title</h1>
  <p>content</p>
  <p>content</p>
  <p>content</p>
</template>
```

## Teleport 🧝‍♂️

Ooo, teleporting?! Are we really going to be able to move things across space? Well, yes actually.

Teleport is a new feature in Vue 3 which allows us to continue to group elements logically but allow us to move them elsewhere in the DOM to help with styling.

The example the vuejs.org website gives is where we want to display a full screen modal but have that modal live within a smaller component that already has `position: relative` set. If we then wanted to display the modal using `position: absolute`, it would take the parent relatively positioned `div` as it's reference and wouldn't give us our desired outcome. This could be overcome with some CSS trickery, moving the modal code somewhere else or by teleporting.

Teleport allows us to move the code to have a new parent. The teleport tag looks easy to use as it works as a wrapper around the element you want to move and you just need to pass the `to` prop to it which is the parent element, take the following code as an example:

```html
<teleport to="body">
  <div v-if="modalOpen" class="modal">
    <div>
      I'm a teleported modal! (My parent is "body")
      <button @click="modalOpen = false">Close</button>
    </div>
  </div>
</teleport>
```

## Composition API

The Composition API is arguably the **biggest** and *most controversial* change to happen in Vue 3. But what is it?! 🤔

This addition is focused around how we create the script to go inside of our components. Traditionally, we've been using the **Options API** which allows us to split all of our code into neat buckets, such as our reactive `data`, our `methods`, `computeds` or `watchers`. And at a glance, it would be clear to see the instances of each type that we have. The idea with the Composition API is to flip that on it's head and allow the user to define and layout each of these types however they'd like to by offering these types as exports from the Vue module and wrapping it all in one single `setup` function.

The `setup` function serves as the entry point for the composition API, it is called prior to `beforeCreate()` hook and the idea is to use it in place of `created()`.

The API is a purely additive feature that can be happily used alongside the traditional method of the Options API. So as you read this and start to form an opinion, just remember that change doesn't need to happen.

The reason for this change is to try and address some of the limitations of using the Options API:

- Code organisation - as components become larger, it could become  more difficult to maintain as the code for a singular feature is split into the different options.

- Logic reuse - as complexity is added, it can cause some logic to be reused.

### Maintainable code === Better code 😍

This is one of the reasons why the Composition API exists as it allows you to group functions, logic, variables / consts etc. how you'd like to group them as it might not always be best to split code up by the options that we have available.

### Reuse business logic 😍

However hard we try, there's always going to be an element of code duplication. In Vue 2 we could always abstract some of this code to mixins, renderless components or other ways but Vue 3 has added the ability to bring in external logic for use within the component.

### When should the Composition API be used? 🤷‍♂️

So when should we use it? That's quite a difficult question to answer so broadly, but if any of these bullets resonate, then it should be used:

- Organisation of a large component by feature rather than options.
- Need to reuse code across other components.
- You'd like better TypeScript support.
- You just want to use it.

## Composition API Vue 2 vs Vue 3 🥊

The below code is **not** perfect and it is by no means a great example of the changes available, but it serves to show how easy it can be read, understood and written when coming from a Vue 2 world.

```html
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

<style scoped></style>
```

```html
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

<style scoped></style>
```

Hopefully the above code shows the simplicity of the changes and that it can remove the options from the export and allows us to specify the component as a function.

## Experimental 👩‍🔬 and submitted for comments 💬

As well as all the features that have been released and should / can be used, Vue have also released a few *new / experimental* features that they would appreciate comments on. These are:

- [Style variables](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-style-variables.md)
- [Script setup](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)

- [Scope style changes](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)

## "This sounds great, should I use it in Production and how can I migrate?!" I hear you shout 😎📣

Although it's early days for version 3, it can be used for new,
green-field projects 😁.

But for existing projects - on the Vue.js website, at the time of writing, it is strongly recommended to wait for a Migration Build to be released before updating a non-trivial Vue 2 app to version 3.

For those that are interested, it does look to be a relatively long list of breaking changes from version 2 to version 3 and I would imagine there to be some time consuming changes required. For more information, visit the [Breaking Changes section](https://v3.vuejs.org/guide/migration/introduction.html#breaking-changes) on the vuejs.org website.

## Opinions 💭

This section is very much my opinion on what I've read of a period
of a few days and my opinion is likely to change if and when I use
Vue 3 more.

### ✔ Pros

- Composition API seems more explicit in what we need and what we're using
- I like the Composition API as it would appear we have more freedom
- I like that the Composition API is optional, as I can see the Options API still being preferred for some circumstances
- More TypeScript support - how could this be a bad thing?
- Fragments / multiple nodes at the root of a component
- Performance improvements - although I've not tested the claims

### ❌ Cons

- No migration available just yet for complex Vue 2 applications
- Seems like quite a few breaking changes to contend with
- As it's new, support in the community appears a little limited

## Sources 🔗

Not **all** of this information was made up, some of it came from some good places on the internet, here are some links:

- Vue 3.0 Better, Faster, and Stronger: CodeMash - https://app.pluralsight.com/course-player?courseId=93623a8f-a551-4939-9527-5c8d1a88360a
- Vue 2 Composition API Introduction - https://www.youtube.com/watch?v=bwItFdPt-6M
- Vue Composition API - https://composition-api.vuejs.org/api.html#setup
- Intro to Vue 3 + Composition API: Build a Todo App - https://www.youtube.com/watch?v=rncY1tlWShM
- Vue V3.0.0 Release notes - https://github.com/vuejs/vue-next/releases/tag/v3.0.0?ref=madewithvuejs.com
- Vue Migration guide - https://v3.vuejs.org/guide/migration/introduction.html
- Teleporting - https://v3.vuejs.org/api/built-in-components.html#teleport
