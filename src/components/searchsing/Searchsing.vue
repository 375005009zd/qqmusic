<template>
   <div>
      <div>
         <form class="search-form">
          <i class="icon-search"></i>
          <input type="text" class="search-input" placeholder="搜索歌曲、歌单、专辑"/>
          <span class="search-delete">删除</span>
         </form>
         <div class="search-cancel">取消</div>
      </div>
      <HotKey v-bind:hotkeydata="hotKey"></HotKey>
    <div>

    </div>
   </div>
</template>

<script>
   import jsonp from 'jsonp'
   import HotKey from './hotkey'
  export default {
      name: 'Searchsing',
      data(){
         return  {
                  hotKey:{}
                  }
      },
      components:{
         HotKey
      },
      created(){
           jsonp('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?_=1555062822433&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
          {
             param : 'jsonpCallback'
          },(err,response) =>{
           
               this.hotKey = response.data;
          });
      }
  }
</script>


<style>

.icon-search {
    display: inline-block;
    position: absolute;
    left: 9px;
    width: 20px;
    height: 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZjUzNjE3YS0yODYxLTkwNDUtYTU3MS0wZjY3N2I4ZjcxY2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTdDRjRGMjY3MzE4MTFFNThFMDE4OEE4MDY3MERGOEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTdDRjRGMjU3MzE4MTFFNThFMDE4OEE4MDY3MERGOEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlNzM5N2M4LWRiMGItODQ0Zi1iOWYxLTFlNWJjNTAxMWY2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiZjUzNjE3YS0yODYxLTkwNDUtYTU3MS0wZjY3N2I4ZjcxY2MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6uN3S5AAACj0lEQVR42syYTUgUYRjH10jKTSEswaiwQrQOm57Uyo3yVBEi4kHPKpgn01N+XJTVg26GCKVF1zqkIBJ421Sk8iSphwUREQQh7aSWXrb/Q/+BYcid950Pdwd+PLOzM+/8eOaZmeedjFgsFkin5VQgzZbTmvuXgjpQCYpAHrf/BHGwAD6BJb+FHoAIuHvM/5eI7NdFsW7wxetLFgTvQIwyO2AUPAWF4Bwp5Db5bxfc4zHjIEtHKCNJUV8An0E5OAD94BXYtxlTBNuYKZH5RtldNxkKmmTWGSMKMgHuI/uWgQ1QwbGCboRGKLHG9K84qM8VFv8axxp2KvQQNILfoAZsu7iLt0Atx2oG950IRRj7wKoHj5ZlMCD1yqglJM+ZO7ybRjx83g2zqOVOLdERqmX8qFjAqssexzSfQ0kozDjjw1thxnIOJaFixh8+CMUZb+kIXWTc9kHIGDM3Xd72R4wJHaEdxnwfhPIt51ASMq5ziQ9Cty3nUBKaZ3zkg9BjyzmUhCYZ60G2hzIyVgPXJ3SElthcSevx3EMhGes8mOOrROsu6+Kd8AKEPJCReuzkmN1OXq6z4C2bqylwxYXMVTANzoIxu/pJ9hySFH8H1zlIyGFm5iklTV67mwZNWtYn4Cu4BhaZbpVCzwE9bF0LuO0GeOa2yf8FqpjqM+yPNsFrUA1u8uQ5XK/mf7JPL495A1pZP1GVLNlNg/6AFvCBQmH+brE5bo4ZNWrmkLOXKH+/dDsvm2X7GWI/E2axXwaZfB3EKTLxnx78PaOtlO7MddnuOZJkUZI66bm9SDWZaqrDbYa8kjIyNcT1aCqFkkql8nOM+fINcsaTsgxZMxU0PuGkWsgs9e/rRyKRSKsvaH8FGAAtc45viyHBdwAAAABJRU5ErkJggg==);
    background-size:cover;
    vertical-align:middle;
}

.search-form{
    position: relative;
    display: inline-block;
    width: 80%;
    background:#fff;
    margin: 10px auto;
    padding: 8px 10px;
    border-radius:5px;
}

.search-input{
   width:66%;
   font-size: 16px;
   caret-color:rgba(0,0,0,0.3);
   border:none;
}

.search-input::-webkit-input-placeholder{
   font-size:12px;
   color:#cacaca;
}

.search-input:hover,.search-input:focus,.search-input:active{
   border:none;
   outline:none;
}

.search-cancel{
   display:inline-block;
   font-size:14px;
}

.search-delete {
   text-indent: -9999px;
    width: 10px;
    height: 10px;
    float: right;
}

</style>