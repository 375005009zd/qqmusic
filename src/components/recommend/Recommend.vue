<template>
    <div class="wrapper">
       <ul class="content">
           <li v-for="item in slideItem" v-bind:key="item.id">
               {{item}}
           </li>
       </ul>
    </div>
</template>

<script>
  export default {
      name: 'recommend',
      data() {
          return {
              slideItem:[]
              }
      },
      created() {
            this.$axios.get('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',{Origin:'https://m.y.qq.com'})
            .then(function(response){
                console.log(response);
            });
      }
  }

</script>


<style>

</style>