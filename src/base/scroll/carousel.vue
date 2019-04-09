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
               pos:0,
               liElemnts : []
           } 
       },
       created(){
       
       },
       updated(){
           console.log(this.iterms);
          this.$nextTick(()=>{
              this.initPicturePost();
              this.autoPlay();
          }); 
        
       },
       methods: {
        initPicturePost(){
             var _this_ = this;
            this.liElemnts = _this_.$refs.picCarousel.children;
             if(this.liElemnts.length){
               Array.prototype.slice.call(this.liElemnts).forEach(function(v){

                      if(v.previousElementSibling && v.nextElementSibling){
                           v.style.transform = 'translateX(100%)';
                            v.style.transitionDuration = '0ms'
                      }else if(!v.previousElementSibling){
                           v.style.transform = 'translateX(0%)';
                           v.style.transitionDuration = '300ms';
                      }else{
                          v.style.transform = 'translateX(-100%)'; 
                           v.style.transitionDuration = '300ms'
                      }
                     
                  });
               }
            },
           autoPlay(){
            var _this_ = this;
            setInterval(() => {
               let lastElement = this.liElemnts[this.liElemnts.length-1];
               let tempTransform,tempTransitionDuration;
               let loop=0,v=lastElement;
               if(this.liElemnts.length){
               do{
                  
                  let  prev = v.previousElementSibling? v.previousElementSibling : lastElement;
                    tempTransform = prev.style.transform;
                    tempTransitionDuration = prev.style.transitionDuration;

                    prev.style.transform = v.style.transform;
                    prev.style.transitionDuration = v.style.transitionDuration;

                    v.style.transform = tempTransform;
                    v.style.transitionDuration = tempTransitionDuration;
                    v = prev;
                    
                 }while(v.previousElementSibling );
               }
           
           },2000);
         }
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

