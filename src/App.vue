<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" v-if="nameRoute">
      <h4>
        <router-link to="/">monhttp</router-link>
      </h4>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">Dasboard</router-link>
          <router-link to="/services">services</router-link>
          <router-link to="/import">import</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/login">Logout</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      nameRoute() {
        return this.$route.name !== 'login';
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
.navbar{
  background: #3f51b5 !important;
  a{
    color: #fff;
    margin: 0 .8em;
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
