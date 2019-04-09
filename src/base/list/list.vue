<template>
    <div class="list-content">
        <header>
            <h6 class="list-title">{{title}}</h6>
        </header>
        <div>
            <ul class="list-wrapper">
                <li class="list-item" v-for="item in items" v-bind:key="item.id">
                    <router-link to=''>
                        <img v-bind:src="item.picUrl">
                        <p class="songDesc">{{item.songListDesc}}</p>
                        <p class="songAuthor">{{item.songListAuthor}}</p>
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
</style>
