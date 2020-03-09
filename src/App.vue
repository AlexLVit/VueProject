<template>
  <div id="app">
    
      <router-view @authenticated="setAuthenticated"/>
  </div>
  
</template>

<script>

export default {
  name:"App",
  data(){
    return{
      authenticated:false

    }
  },
  mounted(){
    if(!this.authenticated){
      this.$router.push("/login");
    }
  },
  methods:{
    setAuthenticated(status){
      this.authenticated = status;
    }
  }
};
</script>

<style scoped>
  main{
    background-color: red;
  }
</style>