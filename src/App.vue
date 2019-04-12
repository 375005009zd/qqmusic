<template>
  <div class="main" id="app">
    <div>
      <header class="title">
      <img class="logo-header" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt="QQ音乐">   
      </header>
    </div>
    <nav class="nav-tab">
      <router-link  v-bind:class="{'current-active':id==1}" to="/recommend">推荐</router-link>
      <router-link   v-bind:class="{'current-active':id==2}" to="/rank">排行榜</router-link>
      <router-link   v-bind:class="{'current-active':id==3}" to="/searchsing">搜索</router-link>
    </nav>
    <div >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      id:1
    }
  },
  methods:{
    changeActive(index){
      alert(index);
        this.id = index;
    }
  }
}
</script>

<style>
body{
  margin:0;
}

a{
  text-decoration:none
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
   background:#fff;
   padding:15px 0;
}

.logo-header{
  height:35px;
}

.nav-tab{
  background:#fff;
  font-size:0;
  border-top: 2px solid #f8f8f8;
}

.nav-tab a{
  display: inline-block;
  width: 33%;
  font-size: 1rem;
  color: #00000099;
  padding: 10px 0;
}

.nav-tab a.current-active{
  border-bottom: 2px solid #49c98b;
  color: #49c98b;
}

.main{
      background: #f4f4f4;
}
</style>
