<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-left" href="/"><img src="../assets/logo.png"></a>
          <div class="navbar-brand navbar-text d-none d-sm-inline">
            <!-- <a class="navbar-brand" href="/">Amazon Cognito with Vue.js</a> -->
          </div>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <profile></profile>
        </ul>
      </div>
    </nav>
    <main>
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
    <app-header></app-header>
    <app-footer></app-footer>
    <ga-analytics ua="UA-31484897-2"></ga-analytics>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Profile from '../components/authentication/Profile'

export default {
  name: 'app',
  components: {
    Profile,
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'ga-analytics': GoogleAnalytics
  }
}
</script>

<!--<style lang="scss">
  @import '../../config/_variables.scss';
  // @import '~bulma';
  // @import '../assets/fontello/css/fontello.css';
-->
<style>
body {
  margin: 0px;
}

main .container-fluid {
  padding: 16px;
}

main h1,
main h2 {
  font-weight: normal;
  margin-top: 8px;
  margin-bottom: 16px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  main .container-fluid {
    padding: 24px;
  }
  main h1 {
    margin-top: 12px;
    margin-bottom: 24px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  main .container-fluid {
    padding: 36px;
  }
  main h1 {
    margin-top: 0px;
    margin-bottom: 24px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}

a {
  color: #35495e;
}

nav {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #252f3e;
  color: #ffffff;
}

.navbar-brand {
  color: #ffffff;
}

nav a:hover {
  color: inherit; /* Inherits color property from its parent */
}

nav img {
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  margin-right: 16px;
}

pre {
  font-size: 10px !important;
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}

.btn {
  vertical-align: middle;
  margin: 4px;
}

.btn .fa-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.btn .fa-icon:last-child {
  vertical-align: middle;
  margin-right: 8px;
}
</style>
