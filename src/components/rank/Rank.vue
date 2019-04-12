<template>
  <div>
    <ul class="rank-container">
      <li class="rank-item"  v-for="item in topList " v-bind:key="item.id">
         <router-link to="/" class="songtop-wrapper">
           <div class="songtop-pic">
              <img  v-bind:src="item.picUrl">
              <span class="topic-listen">
                <i class="icon icon-listener"></i>
                {{(item.listenCount/10000)?(item.listenCount/10000).toFixed(1) + '万':item.listenCount}}
              </span>
           </div>
           <div class="songtop-info">
             <h3 class="songtop-title">{{item.topTitle}}</h3>
        
               <p class="song-inf" v-for="(song,index) in item.songList" v-bind:key="index">
                   {{index+1}} 、 <span class="songname">{{song.songname}}</span>-{{song.singername}}   
               </p>
               <i class="topic-arrow"></i>
           </div>
         </router-link>
      </li>
    </ul>
     
  </div>
    
</template>

<script>
   import jsonp from 'jsonp'
   export default {
       name: 'rank',
       data(){
          return {
            topList:[]
          }
       },
       created(){
         
          jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1555036333633&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1', {
             param : 'jsonpCallback'
          },(err,response) =>{
               this.topList = response.data.topList;
          })
       }
   }
</script>


<style scoped>

.rank-container{
  list-style:none;
  margin: 0 10px;
  padding:0;
}

.rank-item{
  background: #fff;
  margin: 15px 0 15px 0;
}

.songtop-wrapper{
  display: flex;

}

.songtop-pic{
  position:relative;
  display:inline-block;
  margin:0 10px 0 0 ;
}

.topic-listen{
    position: absolute;
    left: 3px;
    bottom: 5px;
    color: #fff;
    opacity: 0.5;
    font-size: 12px;
}
.songtop-title{
  margin:0 0 5px 0;
   font-weight:400;
   font-size:16px;
}

.songtop-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    position:relative;
    width:66%;
    color:#000;
    text-align:left
}

.songtop-pic img{
  width: 100px;
  height: 100px;
  vertical-align:bottom;
}

.song-inf{
  color:#00000080;
  font-size:14px;
  margin:0px;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}

.songname{
  color:#000;
}

.topic-arrow {
    position: absolute;
    top: 50%;
    right: 15px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #b2b2b2;
    border-top: 1px solid #b2b2b2;
    transform: rotate(45deg);
   
}


  .icon{
     display: inline-block;
    background:url(../../assets/image/list_sprite.png) no-repeat;
   
  }

  .icon-listener{
    width: 21px;
    height: 12px;
    background-position: 5px -63px;
    background-size: 30px 76px;
  }
</style>