<template>
  <div class="hello">
    <h1><div id="nav">
      <a :class="{'link-active' : isActive}" v-on:mouseenter="isActived" v-on:mouseleave="isActived" target="_blank" href="http://www.joshvardey.com/">Journalist <span class="space"></span> </a> |
      <router-link to="/about" v-on:mouseenter.native="changePic" v-on:mouseleave.native="changeBack"> <span class="space"></span> Web Developer</router-link>
    </div></h1>

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isActive: false,
      devActive: false
    }  
  },

  methods: {
    changePic() {
      this.$emit("dev")
      this.offColor
      this.devActivated()
    },
    
    changeBack() {
      this.$emit("dey")
      this.onColor
      this.devActivated()
    },
    isActived () {
      if (this.isActive === false) {
        this.isActive = true;
      } else this.isActive = false
  },
  devActivated () {
    if (this.devActive === false) {
        this.devActive = true;
      } else this.devActive = false
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 1.5em
}
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

.link-active {
  font-family: trattatello;
  font-size: 1.5em;
  text-decoration: none;
  color: #42b983
}

a:hover {
  color: #42b983
}

.space {
  margin: 0 10px
}

</style>
