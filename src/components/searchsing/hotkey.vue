<template>
  <div class="hotkey-containter">
    <h3 class="hotkey-title">热门搜索</h3>
    <div>
      <a class="tag-s tags-hot" >{{hotkeydata.special_key}}</a>
      <a class="tag-s" v-for="item in hotkeydata.hotkey" v-bind:key="item.id">{{item.k}}</a>
    </div>
  </div>
    
</template>

<script>
  export default {
      name:'hotkey',
      props:['hotkeydata']
  }

</script>

<style>
.hotkey-containter{
  background-color:#fff;
  padding: 10px 10px 0 10px;
}

.hotkey-title{
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    padding: 0px 0 8px 0;
    margin: 0;
}

.tag-s{
    display: inline-block;
    border: 1px solid #000;
    border-radius: 22px;
    padding: 5px 11px;
    margin: 5px 10px;
    font-size:12px;
}

.tags-hot{
 border: 1px solid #fc4524;
 color: #fc4524;

}

</style>