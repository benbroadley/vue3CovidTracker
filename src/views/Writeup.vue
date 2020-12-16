<template>
  <div class="writeup container">
    <h1>Vue.js</h1>
    <h2 id="intro">
      <router-link :to="{ path: '/writeup', hash: '#intro' }">#</router-link
      >Intro
    </h2>

    <div v-highlight>
      <pre class="language-javascript">
        <code>
          {{`
      <template>
        <Main />
      </template>

      <script>
        // @ is an alias to /src
        import Main from "@/components/Main.vue";

        export default {
          name: "Home",
          components: {
            Main,
          },
        };
      </script>
      `}}
        </code>
      </pre>
    </div>

    <p>&nbsp;</p>
    <p><strong>smaller,faster, stronger</strong></p>
    <p>&nbsp;</p>
    <p><em>What is it?</em></p>
    <p><em>When was it released?</em></p>
    <p>&nbsp;</p>
    <h2 id="mainFeatures">
      <router-link :to="{ path: '/writeup', hash: '#mainFeatures' }"
        >#</router-link
      >Main features
    </h2>
    <h3>Rewritten in Typescript</h3>
    <h4>Treeshaking</h4>
    <h4>Typescript</h4>
    <ul>
      <li>Vue 3 completely rewritten in typescript</li>
      <li>Can still just use JavaScript.</li>
      <li>Why? More maintainable codebase</li>
      <li>Typescript definitions help javascript developers as well.</li>
      <li>
        Decoupled packages, monorepo, split the internal into different
        packages. Can use just part of Vue in a package if you wanted to, like
        reactivity, doesn&#39;t need all the rest of Vue.
      </li>
    </ul>
    <h4>Global API change</h4>
    <ul>
      <li>Will impact everyone.</li>
      <li>
        Global APIs that globally mutate Vue&#39;s behaviour are now moved to
        app instances created using the new <code>createApp()</code> method, and
        their effects are now scoped to that app instance only.
      </li>
      <li>
        Global APIs that are do not mutate Vue&#39;s behaviour (e.g.
        <code>nextTick</code>) are now named exports
      </li>
      <li></li>
      <li>Vue 2 doesn&#39;t have a concept of an <code>app</code></li>
      <li></li>
      <li>Treeshaking - have to use named imports only</li>
      <li></li>
      <li>
        &#39; the new baseline is about 10kb gzipped, which is less than half of
        the current runtime&#39;
      </li>
      <li>
        compiler generates (template explorer GET LINK) tree shakeable code.
      </li>
    </ul>
    <h4>Multiple root notes in Vue 3</h4>
    <ul>
      <li>Always had to have only one root node. Can now have multiple</li>
    </ul>
    <p>&nbsp;</p>
    <h4>Fragments</h4>
    <p>&nbsp;</p>
    <h3>Virtual DOM</h3>
    <ul>
      <li>
        DOM (Document Object Model) is an abstraction of a strucred text, where
        HTML Tags become nodes in the DOM. While HTML is a text, the DOM is an
        in-memory representation of this text in form of nodes. The DOM provides
        an interface (API) to traverse and modify the node, and it contains
        methods like <code>getElementByID</code> or <code>removeChild</code>.
      </li>
      <li>Connecting HTML and JavaScript.</li>
      <li>
        The virtual DOM is a way of representing the actual DOM with JavaScript
        Objects.
      </li>
      <li>Basically just a component tree of all the virtual nodes.</li>
      <li>It&#39;s a way to make efficient updates to the actual DOM.</li>
      <li>WHAT&#39;S CHANGING?</li>
      <li>Watcher is the bottleneck of traditional virtual DOM</li>
      <li>
        The performance of tradition VDOM is determinded by the total size of
        the template rather than the amount of dynamic content in it.
      </li>
      <li>
        Vue3 - uses a new strategy to update performance is determind by the
        amount of dynamic content instead of the total template size.
      </li>
      <li>Benchmarking showed 120-130% performance improvements</li>
      <li></li>
    </ul>
    <h3>Reactivity System</h3>
    <ul>
      <li>c</li>
    </ul>
    <p>&nbsp;</p>
    <h3>Composition API</h3>
    <ul>
      <li>
        <p>Biggest and <em>most controversial</em> changes (but why?! 🤔)</p>
      </li>
      <li>
        <p>
          Purely additive and can be used alongside the Options API. It is an
          alternative.
        </p>
      </li>
      <li>
        <p>
          Do not need to rewrite entire applications - possibly one or two
          components?
        </p>
      </li>
      <li>
        <p>
          Vue is options based. You create an instance and pass it some options.
        </p>
      </li>
      <li>
        <p>Options API limitations:</p>
        <ul>
          <li>
            Code organisation - components grow and it could become harder to
            maintain
          </li>
          <li>Logic reuse - more complexity, causes some logic to be reused</li>
          <li>
            Better TypeScript support - Some developers ask for more TypeScript
            support.
          </li>
        </ul>
      </li>
      <li>
        <p>Code Organisation: maintainable code === Better 😍</p>
        <ul>
          <li>
            Organised by Options. Might not always be the best way to split code
            up. As we can have different features organised into different
            options.
          </li>
          <li>Composition API allows you to group things by feature.</li>
        </ul>
      </li>
      <li>
        <p>Logic Reuse: Reuse business logic.</p>
        <ul>
          <li>
            <p>
              Vue 2 - Can use Mixins, Higher Order components, Renderless
              components (via scoped slots)
            </p>
          </li>
          <li>
            <p>
              The setup function - new component options, serves as the entry
              point for the composition API.
            </p>
            <ul>
              <li>
                Called prior to <code>beforeCreate()</code> use it in place of
                <code>created()</code>
              </li>
              <li>
                <code>data</code> is replaced with <code>reactive</code> (or
                <code>ref</code>)
              </li>
            </ul>
          </li>
          <li>
            <p>
              Can use functions easily to import and then assign to variables
              into other components
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>When to use?</p>
        <ul>
          <li>When you need to organize a large component by feature</li>
          <li>When you need to reuse code across other components</li>
          <li>When you want better TypeScript support</li>
          <li>Preference</li>
        </ul>
      </li>
    </ul>
    <p>&nbsp;</p>
    <h2>Opinions</h2>
    <ul>
      <li>More explicit in what we need and what we&#39;re using</li>
    </ul>
    <h3></h3>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h2>Should we use it in Production?</h2>
    <p><em>No, Vue.js say not to use it for production products, yet.</em></p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h2>Sources:</h2>
    <ul>
      <li>
        Vue 3.0 Better, Faster, and Stronger: CodeMash -
        <a
          href="https://app.pluralsight.com/course-player?courseId=93623a8f-a551-4939-9527-5c8d1a88360a"
          target="_blank"
          class="url"
          >https://app.pluralsight.com/course-player?courseId=93623a8f-a551-4939-9527-5c8d1a88360a</a
        >
      </li>
      <li>
        Vue 2 Composition API Introduction -
        <a
          href="https://www.youtube.com/watch?v=bwItFdPt-6M"
          target="_blank"
          class="url"
          >https://www.youtube.com/watch?v=bwItFdPt-6M</a
        >
      </li>
      <li>
        Vue Composition API -
        <a
          href="https://composition-api.vuejs.org/api.html#setup"
          target="_blank"
          class="url"
          >https://composition-api.vuejs.org/api.html#setup</a
        >
      </li>
      <li>
        Intro to Vue 3 + Composition API: Build a Todo App -
        <a
          href="https://www.youtube.com/watch?v=rncY1tlWShM"
          target="_blank"
          class="url"
          >https://www.youtube.com/watch?v=rncY1tlWShM</a
        >
      </li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.writeup {
  h1 {
    padding: 4rem 2rem;
    background-color: #f3f3f3;
  }

  a {
    margin-right: 1rem;
  }
}
</style>
