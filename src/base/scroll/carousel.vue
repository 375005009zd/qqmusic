<template>
    <div>
      <div class="wrapper">
        <ul class="content" ref="picCarousel">
            <li class="item" v-for="item in iterms" v-bind:key="item.id" v-bind:ref="item.id">
                <router-link to=""><img v-bind:src="item.picUrl"></router-link>
            </li>
        </ul>
        </div> 
<!--         <div class="dot">
            <ul>
                <li class="slide-dot">hao</li>
                <li class="slide-dot">hao</li>
                <li class="slide-dot">hao</li>
                <li class="slide-dot">hao</li>
                <li class="slide-dot">hao</li>
            </ul>
        </div> -->
    </div>
</template>

<script>

   export default {
       name:'carousel',
       props:['iterms'],
       data(){
           return {
               pos:0
           } 
       },
       created(){
       
       },
       mounted(){
           console.log(this.iterms);
        //    this.initPicturePost();
        //    autoPlay();
       },
       methods: {
     
            //,
        //    autoPlay(){
        //     var _this_ = this;
        //     setInterval(() => {
        //        let liElemnts = _this_.$refs.picCarousel.children;
        //        if(liElemnts){
        //           liElemnts.foreach(function(v){
        //               prev = v.previousElementSibling? v.previousElementSibling : firstElement;
        //           });
        //        }
           
        //    },1000);
        //  }
       }
   }
</script>

<style>
   .wrapper {
       position:relative;
       width:100%;
       /* overflow:hidden; */
   }

   .content {
     width: 300%;
     list-style: none;
     font-size:0;
     padding:0;
   }
  .item{
    position:absolute;
    left:0;
  }

  .item img{
      width:100%;
  }
</style>

