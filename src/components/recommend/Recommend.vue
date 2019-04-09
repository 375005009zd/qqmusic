<template>
<div>
  <carousel v-bind:iterms = "slideItem">
   
  </carousel>
</div>

</template>

<script>
  import jsonp from 'jsonp'
  import carousel from '@/base/scroll/carousel'

  export default {
      name: 'recommend',
      components:{
          carousel
      },
      data() {
          return {
             slideItem:[]
              }
      },
      created() {
         jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1554691949882&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
          {
             param : 'jsonpCallback'
          },(err,response) =>{
               this.slideItem = response.data.slider;
          });
      },
      mounted(){
        //   this.initPicturePost();
      },
      methods:{
 
      }
  }

</script>


<style scoped>

</style>