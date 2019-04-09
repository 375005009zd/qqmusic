<template>
    <div>
       <List v-bind:title="title" v-bind:items = "items"></List>
    </div>
</template>

<script>
   import List from '@/base/list/list'  
 
  export default{
      name : 'hostlist',
      components:{
          List
      },
      props: ['items'],
      data(){
          return {
              title: '热门歌单'
          }
      }
  }
</script>
