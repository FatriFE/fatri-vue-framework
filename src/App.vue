<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import CookieService from '@/util/CookieService';
export default {
  name: 'app',
  watch: {
    '$i18n.locale': 'i18nHandle',
  },
  created() {
    this.i18nHandle(this.$i18n.locale);
  },
  methods: {
    i18nHandle(val, oldVal) {
      CookieService.setCookie('Business-Lang', val);
      document.querySelector('html').setAttribute('lang', val);
    },
  },
};
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
