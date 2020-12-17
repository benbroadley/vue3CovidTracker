<template>
  <div class="writeup container">
    <div class="heading">
      <div>
        <h1>Vue.js 3 - A view into what's new 🆕</h1>
      </div>
      <div class="logo"><img src="@/assets/logo.png" height="100" /></div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>Smaller, <em>Better</em>, Faster, Stronger 🤖</h2>
          <p>
            Vue 3 was released on 18th September 2020 and it represents two
            years of development efforts to make it smaller, <em>better</em>,
            faster, stronger. This development can be split into
            <strong>2600+</strong> commits, <strong>628</strong> pull requests
            from <strong>99</strong> contributors.
          </p>
          <p>
            Vue had a very simple mission from the beginning which was &#39;to
            be an approachable framework that anyone can quickly learn&#39;.
            Today, there are over <strong>1.3 million</strong> users worldwide.
          </p>
          <p>
            For version 3, Vue was completely re-written from the ground up into
            a collection of decoupled modules. It was also written in
            TypeScript, with automatically generated, tested and bundled type
            definitions so they are always up-to-date. This was primarily done
            for improved maintainability but it also offers the end users the
            ability to benefit more from tree-shaking. Some of these decoupled
            modules can also be used on their own, such as the
            <code>@vue/reactivity</code> module which provides direct access
            into Vue&#39;s reactivity system without needing to be used
            alongside the UI elements.
          </p>
          <p>
            Possibly the <em>biggest</em> and <em>most controversial</em> update
            is the inclusion of a new set of APIs aimed at addressing some of
            the pain points that of using Vue in large scale applications - this
            is called the <strong>Composition API</strong> (I&#39;ll talk more
            about this later down there 👇).
          </p>
          <p>
            Performance is a big topic for any/all developers and Vue 3 has
            demonstrated significant performance improvements over Vue 2 in
            terms of bundling size, initial render, updates and memory usage.
          </p>
        </div>
      </div>
      <div></div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>The Re-write 📝</h2>
          <p>
            Vue 3 has been completely re-written from the ground up, using
            TypeScript. There were a few reasons for this but the main two were
            for better maintenance and improved performance.
          </p>
          <p>
            DOM (Document Object Model) is an abstraction of structured text,
            where HTML Tags become nodes in the DOM. While HTML is text, the DOM
            is an in-memory representation of this text in form of nodes. The
            DOM provides an interface (API) to traverse and modify the nodes by
            methods like
            <code>getElementByID</code> or <code>removeChild</code>. It is
            basically a way of connecting HTML and JavaScript.
          </p>
          <p>
            Vue uses something called the <strong>Virtual DOM</strong> (VDOM)
            which is a way of representing the actual DOM with JavaScript
            Objects. It is basically just a component tree of all the virtual
            nodes and it&#39;s a more efficient way to make updates to the
            actual DOM.
          </p>
          <p>
            Within a traditional VDOM, the watcher is the bottleneck, i.e. the
            &#39;has something changed yet?&#39; loop to then make the required
            updates. The performance of a traditional VDOM is mostly determined
            by the total size of the template as opposed to just the amount of
            dynamic content.
          </p>
          <p>
            With the Vue 3 re-write, they&#39;ve focused on a
            &#39;compiler-informed Virtual DOM&#39; so that performance can now
            be determined by the amount of dynamic content instead of the total
            template size. Benchmarking has shown this to improve performance by
            <strong>120-130%</strong>.
          </p>
          <p>
            The performance improvements don&#39;t stop there and over Vue 2,
            the following has been seen:
          </p>
          <ul>
            <li>
              Bundle sizes of <strong>41%</strong> lighter with tree-shaking.
            </li>
            <li>Initial render times of <strong>55%</strong> faster.</li>
            <li>Updates happening <strong>133%</strong> faster.</li>
            <li>and memory usage being up to <strong>54%</strong> less.</li>
          </ul>
        </div>
      </div>
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
          <div class="text-center">
            <iframe
              src="https://giphy.com/embed/xT1XGzXhVgWRLN1Cco"
              width="480"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>Global API changes 🌍</h2>
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
              <code>{{ vue2GlobalApi }}</code>
            </pre>
              <pre class="language-javascript spacer">
              <code>{{ vue3GlobalApi }}</code>
            </pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-sidebyside">
        <div></div>
        <div class="text-left">
          <h2>Multiple root nodes</h2>
          <p>
            This is a really simple change and something I always wondered why
            it wasn't in from the beginning, but now we're able to have multiple
            root nodes, rather than having to wrap everything in a superfluous
            `div` tag.
          </p>
          <p>In the documentation, these are referred to as `fragments`.</p>
        </div>
        <div class="centered">
          <div v-highlight>
            <pre class="language-html">
              <code>{{ multipleRootNodes }}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>Teleport 🧝‍♂️</h2>
          <p>
            Ooo, teleporting?! Are we really going to be able to move things
            across space? Well, yes actually.
          </p>
          <p>
            Teleport is a new feature in Vue 3 which allows us to continue to
            group elements logically but allow us to move them elsewhere in the
            DOM to help with styling.
          </p>
          <p>
            The example the vuejs.org website gives is where we want to display
            a full screen modal but have that modal live within a smaller
            component that already has <code>position: relative</code> set. If
            we then wanted to display the modal using
            <code>position: absolute</code>, it would take the parent relatively
            positioned <code>div</code> as it&#39;s reference and wouldn&#39;t
            give us our desired outcome. This could be overcome with some CSS
            trickery, moving the modal code somewhere else or by teleporting.
          </p>
          <p>
            Teleport allows us to move the code to have a new parent. The
            teleport tag looks easy to use as it works as a wrapper around the
            element you want to move and you just need to pass the
            <code>to</code> prop to it which is the parent element, take the
            following code as an example:
          </p>
          <div class="text-center">
            <div v-highlight>
              <pre class="language-html">
              <code>
                {{ teleport }}
              </code>
            </pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>Composition API</h2>
          <p>
            The Composition API is arguably the <strong>biggest</strong> and
            <em>most controversial</em> change to happen in Vue 3. But what is
            it?! 🤔
          </p>
          <p>
            This addition is focused around how we create the script to go
            inside of our components. Traditionally, we&#39;ve been using the
            <strong>Options API</strong> which allows us to split all of our
            code into neat buckets, such as our reactive <code>data</code>, our
            <code>methods</code>, <code>computeds</code> or
            <code>watchers</code>. And at a glance, it would be clear to see the
            instances of each type that we have. The idea with the Composition
            API is to flip that on it&#39;s head and allow the user to define
            and layout each of these types however they&#39;d like to by
            offering these types as exports from the Vue module and wrapping it
            all in one single <code>setup</code> function.
          </p>
          <p>
            The <code>setup</code> function serves as the entry point for the
            composition API, it is called prior to
            <code>beforeCreate()</code> hook and the idea is to use it in place
            of <code>created()</code>.
          </p>
          <p>
            The API is a purely additive feature that can be happily used
            alongside the traditional method of the Options API. So as you read
            this and start to form an opinion, just remember that change
            doesn&#39;t need to happen.
          </p>
          <p>
            The reason for this change is to try and address some of the
            limitations of using the Options API:
          </p>
          <ul>
            <li>
              Code organisation - as components become larger, it could become
              more difficult to maintain as the code for a singular feature is
              split into the different options.
            </li>
            <li>
              Logic reuse - as complexity is added, it can cause some logic to
              be reused.
            </li>
          </ul>
          <h3>Maintainable code === Better code 😍</h3>
          <p>
            This is one of the reasons why the Composition API exists as it
            allows you to group functions, logic, variables / consts etc. how
            you&#39;d like to group them as it might not always be best to split
            code up by the options that we have available.
          </p>
          <h3>Reuse business logic 😍</h3>
          <p>
            However hard we try, there&#39;s always going to be an element of
            code duplication. In Vue 2 we could always abstract some of this
            code to mixins, renderless components or other ways but Vue 3 has
            added the ability to bring in external logic for use within the
            component.
          </p>
          <h3>When should the Composition API be used? 🤷‍♂️</h3>
          <p>
            So when should we use it? That&#39;s quite a difficult question to
            answer so broadly, but if any of these bullets resonate, then it
            should be used:
          </p>
          <ul>
            <li>
              Organisation of a large component by feature rather than options.
            </li>
            <li>Need to reuse code across other components.</li>
            <li>You&#39;d like better TypeScript support.</li>
            <li>You just want to use it.</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>Composition API Vue 2 vs Vue 3 🥊</h2>
          <p>
            The below code is <strong>not</strong> perfect and it is by no means
            a great example of the changes available, but it serves to show how
            easy it can be read, understood and written when coming from a Vue 2
            world.
          </p>
          <div class="text-center">
            <div v-highlight>
              <pre class="language-html">
              <code>{{ vue2CompositionApi }}</code>
            </pre>
              <pre class="language-html spacer">
              <code>{{ vue3CompositionApi }}</code>
            </pre>
            </div>
          </div>
          <p>
            Hopefully the above code shows the simplicity of the changes and
            that it can remove the options from the export and allows us to
            specify the component as a function.
          </p>
        </div>
      </div>
    </div>

    <div class="content-middle">
      <div></div>
      <div class="content">
        <h2>Experimental 👩‍🔬 and submitted for comments 💬</h2>
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

    <div class="content-middle">
      <div></div>
      <div class="content">
        <h2>
          &quot;This sounds great, should I use it in Production and how can I
          migrate⁉&quot; I hear you shout 😎📣
        </h2>
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

    <div class="content">
      <div class="content-middle">
        <div></div>
        <div>
          <h2>Opinions 💭</h2>
          <p>
            This section is very much my opinion on what I've read of a period
            of a few days and my opinion is likely to change if and when I use
            Vue 3 more.
          </p>
        </div>
        <div></div>
      </div>

      <div class="content-sidebyside">
        <div></div>
        <div class="text-left">
          <h3>✔ Pros</h3>
          <ul>
            <li>
              Composition API seems more explicit in what we need and what
              we&#39;re using
            </li>
            <li>
              I like the Composition API as it would appear we have more freedom
            </li>
            <li>
              I like that the Composition API is optional, as I can see the
              Options API still being preferred for some circumstances
            </li>
            <li>
              More TypeScript support - how could this be a bad thing?
            </li>
            <li>
              Fragments / multiple nodes at the root of a component
            </li>
            <li>
              Performance improvements - although I've not tested the claims
            </li>
          </ul>
        </div>
        <div class="text-right">
          <h3>❌ Cons</h3>
          <ul>
            <li>
              No migration available just yet for complex Vue 2 applications
            </li>
            <li>Seems like quite a few breaking changes to contend with</li>
            <li>
              As it's new, support in the community appears a little limited
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-sources">
      <div></div>
      <div class="content">
        <h2>Sources 🔗</h2>
        <p>
          Not <strong>all</strong> of this information was made up, some of it
          came from some good places on the internet, here are some links:
        </p>
        <ul>
          <li v-for="source in sources" :key="source.link">
            {{ source.title }} -
            <a :href="source.link" target="_blank" class="url">{{
              source.link
            }}</a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import codeSnippets from "@/assets/codeSnippets";
import sources from "@/assets/sources";
export default {
  setup() {
    return {
      ...codeSnippets,
      sources,
    };
  },
};
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
    margin-bottom: 15vh;

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
    grid-template-columns: 15% 35% 50%;
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
