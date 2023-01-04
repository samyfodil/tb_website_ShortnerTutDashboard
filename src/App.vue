<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welsome to our URL Shortner"/>
  <input v-model="url"/>
  <input type="submit" @click="shorten()"/>
  <h2><a :href="surl">{{ surl }}</a></h2>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      api: "https://daatrnjz0.g.tau.link",
      url: "",
      surl: "",
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    shorten: async function() {
      let resp = await axios.post(this.api+"/shorten",{
        base_url: "daatrnjz0.g.tau.link",
        url: this.url
      })
      this.surl = resp.data.url
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
