<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Home</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Projects</template>
    <el-menu-item index="2-1">Athena</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    
  </el-submenu>
  <el-menu-item index="3">About</el-menu-item>
  
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

