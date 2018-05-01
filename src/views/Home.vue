<template>
  <div class="home">
    <Navbar/>
    
    <img class="pic" v-show="!dev" src="../assets/varddev.png">
    <img class="pic" v-show="dev" src="../assets/varddev2.png">

    <HelloWorld @dev="devPic" @dey="deyPic"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar
  },
  data () {
    return {
      dev: false
    }
  },
  methods: {
    devPic () {
      return this.dev = true
    },
    deyPic () {
      return this.dev = false
    }
  }
}
</script>

<style>
img.pic {
  margin: 5% 0 5% 0;
}
</style>

