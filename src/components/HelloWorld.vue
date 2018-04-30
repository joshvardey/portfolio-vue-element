<template>
  <div class="hello">
    <h1><div id="nav">
      <a target="_blank" href="http://www.joshvardey.com/">Journalist</a> |
      <router-link to="/about"><span v-on:mouseenter="changePic" v-on:mouseleave="changeBack">Coder</span></router-link>
    </div></h1>

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  methods: {
    changePic() {
      this.$emit("dev")
    },
    changeBack() {
      this.$emit("dey")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
