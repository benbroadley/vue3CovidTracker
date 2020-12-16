<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/writeup">Writeup</router-link> |
    <router-link to="/todo">Todo</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: "century gothic", Helvetica, Arial, sans-serif, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #888888;
}

h1,
h2,
h3,
h4 {
  color: #666666;
}

.container {
  margin: 0 2rem;
  text-align: left;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
