<template>
<div>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title"><a>Projects</a></template>
    <el-menu-item index="2-1" >Athena</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    
  </el-submenu>
  <el-menu-item index="3" class="about" :router="true" :default-active="$route.path">About</el-menu-item>
  
</el-menu>
<div class="line"></div>
</div>
</template>

<script>
 export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

ul.el-menu--horizontal.el-menu {
  display: inline-block;
}

li.el-menu-item.about {
  font-family: trattatello;
  font-size: 1.4em;
  text-decoration: none;
  color: #2c3e50;
}

</style>


