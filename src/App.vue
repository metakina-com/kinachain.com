<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // changeValue(){
    //     if(this.value == "Chinese"){
    //                 this.$i18n.locale = 'zh'			//切换为新加坡
    //                 sessionStorage.setItem("language", "Chinese");
    //             }else if(this.value == "English"){
    //                 this.$i18n.locale = 'en'			//切换为英文
    //                 sessionStorage.setItem("language", "English");
    //             }
    //     },
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
