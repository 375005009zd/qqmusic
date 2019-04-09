<template>
  <div>
   <List v-bind:title="title" v-bind:items = "items"></List>
  </div>
    
</template>

<script>
  import List from '@/base/list/list'
  export default {
    name:'radiolist',
    props:['items'],
    data(){
     return { title:"电台" ,
              radioItems:[]
            }
    },
    components:{
        List
    },
    mounted(){

    }
  }
</script>

