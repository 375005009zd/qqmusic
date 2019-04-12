<template>
<div>
  <!-- 图片轮播图 -->
  <Carousel v-bind:iterms = "slideItem">
  </Carousel>
  
  <RadioList v-bind:items = "radioItem"></RadioList>

  <HotList  v-bind:items = "hotItem"></HotList>
</div>

</template>

<script>
  import jsonp from 'jsonp'
  import Carousel from '@/base/scroll/carousel'
  import RadioList from './radiolist'
  import HotList from './hotlist'

  export default {
      name: 'recommend',
      components:{
          Carousel,
          RadioList,
          HotList
      },
      data() {
          return {
             slideItem:[],
             radioItem:[],
             hotItem:[],
             topList:[]
              }
      },
      created() {
        this.$emit('changeActive',1);
         jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1554691949882&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
          {
             param : 'jsonpCallback'
          },(err,response) =>{
               this.slideItem = response.data.slider;
               this.radioItem =response.data.radioList ;
               this.hotItem = response.data.songList;
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