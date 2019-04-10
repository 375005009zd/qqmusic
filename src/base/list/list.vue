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
                                <span class="icon icon-listener"> </span>
                                <span class="accessnum">{{item.accessnum}}</span>
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
       props:['title','items']
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
    background:url(../../assets/image/list_sprite.png) no-repeat;
   
  }

  .icon-listener{
    display: inline-block;
    width: 25px;
    height: 22px;
    background-position: 5px -81px;
    background-size: 44px 100px;
  }

  .icon-play {
      display: inline-block;
      width: 25px;
      height: 22px;
      background-position: 5px -81px;
      background-size: 44px 100px;
  }

</style>
