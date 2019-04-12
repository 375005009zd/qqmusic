<template>
    <div class="list-content">
        <header>
            <h6 class="list-title">{{title}}</h6>
        </header>
        <div>
            <ul class="list-wrapper">
                <li class="list-item" v-for="item in items" v-bind:key="item.id">
                    <router-link to=''>
                        <div class="list-img">
                            <img v-bind:src="item.picUrl">
                            <div class="list-info">
                                <div>
                                   <span class="icon icon-listener" v-show="item.accessnum"> </span>
                                   <span class="accessnum">{{(item.accessnum/10000 >=1)? (item.accessnum/10000).toFixed(1) + '万': item.accessnum}}</span>
                                </div> 
                                <span class="icon icon-play"></span>
                            </div>
                           
                        </div>
                       
                        <p v-show="item.Ftitle" class="songAuthor">{{item.Ftitle}}</p>
                        <p v-show="item.songListDesc" class="songDesc">{{item.songListDesc}}</p>
                        <p v-show="item.songListDesc" class="songAuthor">{{item.songListAuthor}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script scoped>
   export default {
       name: 'list',
       props:['title','items'],
    //    computed:{
    //          items:function(){
    //              this.items.forEach((v) =>{
    //                  v.accessnum = (v.accessnum/10000 >=1)? (v.accessnum/10000).toFixed(1) + '万': v.accessnum;
    //              });
    //          }
    //    },
       methods:{
        //    getAccessnum(num) {
        //       return (num/1000).toFixed(1)  + '万';
        //    }
       }
   }
</script>

<style scoped>
  .list-content{
      margin: 10px 0 10px 0px;
  }

  .list-title{
      font-size:1rem;
      text-align:left;
      margin: 1rem 0;
      padding: 0 0 0 1em;
  }
  .list-wrapper{
      list-style:none;
      margin: 0;
      padding: 0;
  }

  .list-item{
      display:inline-block;
      width:46%;
      background:#fff;
      margin-bottom: 15px;
  }

  .list-item:nth-child(2n+1){
      margin-right:10px;
  }

  .list-item img{
      width:100%;
  }

  .songDesc,.songAuthor{
      white-space:nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
      margin: 5px ;
      text-align:left;
      font-size:12px;
      color:#000;
  }

  .list-img{
      position:relative;
  }

  .list-info{
      position:absolute;
      bottom: 10px;
      width:100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color:#fff;
      font-size:8px;
  }

  .icon{
     display: inline-block;
    background:url(../../assets/image/list_sprite.png) no-repeat;
   
  }

  .icon-listener{
    width: 25px;
    height: 22px;
    background-position: 5px -81px;
    background-size: 44px 100px;
  }

  .icon-play {
    width: 28px;
    height: 25px;
    background-position: 0px 0px;
    background-size: 24px 60px;
  }
  
  .accessnum {
      vertical-align: super;
  }
</style>
