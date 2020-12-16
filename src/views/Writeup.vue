<template>
  <div class="writeup container">
    <div class="heading">
      <div>
        <h1>Vue.js 3 - A view into what's new 🆕</h1>
      </div>
      <div class="logo"><img src="@/assets/logo.png" height="100" /></div>
    </div>

    <div class="content-middle">
      <div></div>
      <div class="content">
        <h2>Smaller, <em>Better</em>, Faster, Stronger 🤖</h2>
        <p>
          Vue 3 was released on 18th September 2020 and it represents two years
          of development efforts to make it smaller, <em>better</em>, faster,
          stronger. This development can be split into
          <strong>2600+</strong> commits, <strong>628</strong> pull requests
          from <strong>99</strong> contributors.
        </p>
        <p>
          Vue had a very simple mission from the beginning which was &#39;to be
          an approachable framework that anyone can quickly learn&#39;. Today,
          there are over <strong>1.3 million</strong> users worldwide.
        </p>
        <p>
          For version 3, Vue was completely re-written from the ground up into a
          collection of decoupled modules. It was also written in TypeScript,
          with automatically generated, tested and bundled type definitions so
          they are always up-to-date. This was primarily done for improved
          maintainability but it also offers the end users the ability to
          benefit more from tree-shaking. Some of these decoupled modules can
          also be used on their own, such as the
          <code>@vue/reactivity</code> module which provides direct access into
          Vue&#39;s reactivity system without needing to be used alongside the
          UI elements.
        </p>
        <p>
          Possibly the <em>biggest</em> and <em>most controversial</em> update
          is the inclusion of a new set of APIs aimed at addressing some of the
          pain points that of using Vue in large scale applications - this is
          called the <strong>Composition API</strong> (I&#39;ll talk more about
          this later down there 👇).
        </p>
        <p>
          Performance is a big topic for any/all developers and Vue 3 has
          demonstrated significant performance improvements over Vue 2 in terms
          of bundling size, initial render, updates and memory usage.
        </p>
      </div>
      <div></div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>Show me some code 👨‍💻</h2>
          <p>
            Let&#39;s jump into some changes and see what has actually changed
            with Vue 3 and how it can be used in <u>your</u> applications.
          </p>
          <p>We&#39;re going to start with the Global API changes.</p>
          <h3>Global API changes 🌍</h3>
          <p>
            The Global API changes are going to impact anyone using and setting
            up a Vue application as it changes how we need to create an
            instantiate an app. With Vue 3, we now have more freedom to run
            multiple application with differing options and configuration as we
            have a concept of an <code>app</code> and we&#39;re able to apply
            configuration settings to this rather than globally. Take a look at
            the snippet below 👇.
          </p>
          <p>
            As you can see in the example, with Vue 2, we set all the behaviours
            and configuration at <code>Vue</code> level which means that it is
            set globally. Whereas, in Vue 3, we create an instance of an
            <code>app</code> and then can make the changes and additions just to
            that one instance.
          </p>
          <div class="text-center">
            <div v-highlight>
              <pre class="language-javascript">
              <code>
{{`// Vue 2
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
`}}
              </code>
            </pre>
              <pre class="language-javascript spacer">
              <code>
{{`// Vue 3
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp();

app.config.ignoredElements = [/^app-/];
app.use(/* ... */);
app.mixin(/* ... */);
app.component(/* ... */);
app.directive(/* ... */);

app.mount(App, "#app");`}}
              </code>
            </pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-sidebyside">
      <div class="text-left">
        <h3>Multiple root nodes</h3>
        <p>
          This is a really simple change and something I always wondered why it
          wasn't in from the beginning, but now we're able to have multiple root
          nodes, rather than having to wrap everything in a superfluous `div`
          tag.
        </p>
      </div>
      <div class="centered">
        <div v-highlight>
          <pre class="language-html">
        <code>
          {{`
      <template>
        <h1>Title</h1>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </template>

      <script>

      </script>
      `}}
        </code>
      </pre>
        </div>
      </div>
    </div>

    <div class="content-middle">
      <div></div>
      <div>
        <h3>This is another heading</h3>
        <p>Here is an explanation of the heading.</p>
        <div>
          <div v-highlight>
            <pre class="language-html">
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
        </div>
      </div>
    </div>

    <div class="content-sidebyside">
      <div class="centered">
        <div v-highlight>
          <pre class="language-html">
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
      </div>
      <div class="text-right">
        <h3>Composition API</h3>
        <p>Explanation on the right.</p>
      </div>
    </div>

    <h2 id="intro">
      <router-link :to="{ path: '/writeup', hash: '#intro' }">#</router-link
      >Intro
    </h2>

    <div v-highlight>
      <pre class="language-html">
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

    <div v-highlight>
      <pre class="language-html">
        <code>
          {{`
      <!--
        Vue 2
        A wrapper div around all of the content.
      -->
      <template>
        <div>
          <h1>Title</h1>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
      </template>

      <!--
        Vue 3
        You now don't need the wrapper and can have multiple root level nodes.
      -->
      <template>
        <h1>Title</h1>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </template>

      `}}
        </code>
      </pre>
    </div>

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

    <div class="content-middle">
      <div></div>
      <div class="content">
        <h3>
          &quot;This sounds great, should I use it in Production and how can I
          migrate⁉&quot; I hear you shout 😎📣
        </h3>
        <p>
          Although it&#39;s early days for version 3, it can be used for new,
          green-field projects 😁.
        </p>
        <p>
          But for existing projects - on the Vue.js website, at the time of
          writing, it is strongly recommended to wait for a Migration Build to
          be released before updating a non-trivial Vue 2 app to version 3.
        </p>
        <p>
          For those that are interested, it does look to be a relatively long
          list of breaking changes from version 2 to version 3 and I would
          imagine there to be some time consuming changes required. For more
          information, visit the
          <a
            href="https://v3.vuejs.org/guide/migration/introduction.html#breaking-changes"
            target="_blank"
            >Breaking Changes section</a
          >
          on the vuejs.org website.
        </p>
      </div>
      <div></div>
    </div>

    <div class="content-middle">
      <div></div>
      <div class="content">
        <h3>Experimental 👩‍🔬 and submitted for comments 💬</h3>
        <p>
          As well as all the features that have been released and should / can
          be used, Vue have also released a few
          <em>new / experimental</em> features that they would appreciate
          comments on. These are:
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-style-variables.md"
              target="_blank"
              >Style variables</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md"
              target="_blank"
              >Script setup</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md"
              target="_blank"
              >Scope style changes</a
            >
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
      <div></div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>💭 Opinions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            ratione asperiores minus ducimus earum error facere dicta animi
            voluptatibus! Provident aliquam quo nam dicta in ullam eveniet.
            Animi, officiis eveniet?Eligendi repudiandae quo deserunt error
            accusantium commodi illum eius earum odio qui! Debitis nostrum
            deserunt nobis, et velit dignissimos aliquam saepe. Pariatur minus
            mollitia vitae dolores! Blanditiis porro quibusdam deserunt.
          </p>
        </div>
        <div></div>
      </div>

      <div class="content-sidebyside">
        <div class="text-left">
          <h3>✔ Pros</h3>
          <ul>
            <li>More explicit in what we need and what we&#39;re using</li>
          </ul>
        </div>
        <div class="text-right">
          <h3>❌ Cons</h3>
          <ul>
            <li>More explicit in what we need and what we&#39;re using</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-sources">
      <div></div>
      <div class="content">
        <h2>🔗 Sources</h2>
        <p>
          Not <strong>all</strong> of this information was made up, some of it
          came from some good places on the internet, here are some links:
        </p>
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
          <li>
            Vue V3.0.0 Release notes -
            <a
              href="https://github.com/vuejs/vue-next/releases/tag/v3.0.0?ref=madewithvuejs.com"
              target="_blank"
              class="url"
              >https://github.com/vuejs/vue-next/releases/tag/v3.0.0?ref=madewithvuejs.com</a
            >
          </li>
          <li>
            Vue Migration guide -
            <a
              href="https://v3.vuejs.org/guide/migration/introduction.html"
              target="_blank"
              class="url"
              >https://v3.vuejs.org/guide/migration/introduction.html</a
            >
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.writeup {
  p,
  li {
    font-size: 16px;
  }

  .centered {
    text-align: center;
  }

  .heading {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100px;
    padding: 4rem 2rem;
    background-color: #f3f3f3;
    border-radius: 5px;
    line-height: 100px;
  }

  .content {
    min-height: 80vh;

    .text-center {
      text-align: center;
    }
  }

  .spacer {
    margin-left: 5px;
  }

  .content-sidebyside {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;

    list-style-position: inside;

    ul {
      padding-inline-start: 10px;
    }

    .text-left {
      text-align: right;
      padding-right: 2rem;
    }

    .text-right {
      padding-left: 4rem;
    }
  }

  .content-middle {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: auto;

    text-align: left;
    p {
      padding-right: 1rem;
    }
  }

  .content-sources {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: auto;

    text-align: left;
    p {
      padding-right: 1rem;
    }
  }

  .logo {
    text-align: right;
  }

  .code {
    width: 100%;
    margin-right: 0;
  }

  h1 {
    margin: 0;
  }
}
</style>
