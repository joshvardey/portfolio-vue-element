<template>
  <div class="home">
    <Navbar/>
    <HelloWorld @dev="devPic" @dey="deyPic"/>
    <img v-show="!dev" src="../assets/varddev.png">
    <img v-show="dev" src="../assets/varddev2.png">
    
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
