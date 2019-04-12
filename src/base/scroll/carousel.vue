<template>
       <div class="wrapper">
        <ul class="content" ref="picCarousel" style="height:150px">
            <li v-for="(item,index) in iterms"  v-bind:key="item.id" v-bind:ref="item.id" v-bind:class="getClass(index)" >
                <router-link to=""><img v-bind:src="item.picUrl"></router-link>
            </li>
        </ul>
        <!-- <div class="dot-wrapper" ref="dot" >
                <i class="slide-dot" v-for="item in iterms" v-bind:key="item.id + 'dot'"></i>
         </div>  -->
     </div> 
</template>

<script>

   export default {
       name:'carousel',
       props:['iterms'],
       data(){
           return {
               pos:0,
               liElemnts : [],
               height:'',
               firstIndex:0,
               lastIndex:4,
               flagAnimation:true
           } 
       },
       created(){
        
       },
       mounted(){
      
         
          this.$nextTick(()=>{
               var _this_ = this;
                this.liElemnts = _this_.$refs.picCarousel.children;
   
              this.initPicturePost();
          });

       },
       methods: {
         getClass(id){
         
           let obj =  {
              item : true
           };
           obj[`li${id}`] = true;
           return obj;
         },
        initPicturePost(){
             var _this_ = this;
                      
              
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
                           v.style.transitionDuration = ''
                      }
                     
                  });
               }
                 this.autoPlay();
            },
           autoPlay(){
            var _this_ = this;
           let n=1,m=1;
            this.timer = setInterval(() => {
              // alert("n:" + n++);
              if(_this_.flagAnimation){
              
               _this_.lastIndex = (_this_.firstIndex<=0)? 4:_this_.firstIndex-1; 
            
               let currentEl = _this_.liElemnts[_this_.firstIndex],
                   leftEl = _this_.liElemnts[_this_.lastIndex];
        
                
                _this_.firstIndex = (_this_.firstIndex>=4)? 0:++_this_.firstIndex;

               let nextVisible = _this_.liElemnts[_this_.firstIndex];

                    leftEl.style.transform = 'translateX(100%)';
                    leftEl.style.transitionDuration = '0ms'
                    
                    nextVisible.style.transform = 'translateX(0%)';
                    nextVisible.style.transitionDuration = '300ms';
                
                    currentEl.style.transform = 'translateX(-100%)'; 
                    currentEl.style.transitionDuration = '300ms'
                _this_.flagAnimation = true;
                //  alert("m:" + m++);
              }
        
   


                // tempTransform = currentEl.style.transform;
                // tempTransitionDuration = currentEl.style.transitionDuration;

                // currentEl.style.transform = leftEl.style.transform;
                // currentEl.style.transitionDuration = leftEl.style.transitionDuration;

                // leftEl.style.transform = nextVisible.style.transform;
                // leftEl.style.transitionDuration = nextVisible.style.transitionDuration;
                     
                // nextVisible.style.transform  = tempTransform;
                // nextVisible.style.transitionDuration = tempTransitionDuration;
           },7000);
         }
       }
   }
</script>

<style scoped>
   .wrapper {
       position:relative;
       width:100%;
       height:100%;
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
    float:left;
    overflow:hidden;
    width:100%;
  }

  .item img{
      width:100%;
  }

  .dot-wrapper{
    position: relative;
    top: -30px;
  }

  .slide-dot{
    display:inline-block;
    width: 10px;
    height: 10px;
    background: #9c8c8c;
    border-radius: 5px;
    margin-right:5px;
  }

  .current-dot{
    background: #fff;
    opacity:0.8
  }
</style>

