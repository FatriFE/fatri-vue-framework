<template>
  <div>
    <el-menu
      class="fe-aside"
      :collapse="collapsed"
      :unique-opened="true"
      :default-active="active"
      background-color="#192129"
      text-color="#fff"
      active-text-color="#ea4505"
      @select="handleSelect"
    >
      <div class="fe-aside-logo">
        <img v-if="!collapsed" src="/images/logo_white.png" alt="logo" class="fe-aside-logo-img animated fadeInRight" />
        <img v-if="collapsed" src="/images/logo_white2.png" alt="logo" class="fe-aside-logo-img animated fadeInRight" />
      </div>
      <template v-if="asideList && asideList.length > 0">
        <template v-for="(menu, index) in asideList">
          <menu-item v-if="menu.children === undefined" :key="index + ''" :menu="menu"></menu-item>
          <sub-menu v-else :key="index + ''" :menu="menu"></sub-menu>
        </template>
      </template>
      <div v-else>没有侧栏菜单</div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SubMenu from '../menu/subMenu.vue';
import MenuItem from '../menu/menuItem.vue';

export default {
  name: 'menu-aside',
  components: { SubMenu, MenuItem },
  data() {
    return {
      active: '',
    };
  },
  computed: {
    ...mapState('system/layout', ['collapsed']),
    ...mapState('system/aside', ['asideList']),
  },
  watch: {
    '$route.fullPath': {
      handler(value) {
        this.active = value;
      },
      immediate: true,
    },
  },
  methods: {
    handleSelect(index) {
      if (!index) {
        return;
      }
      this.$router.push({
        path: index,
      });
    },
  },
};
</script>

<style lang="less">
.fe-aside {
  width: 200px;
  height: 100%;
  &.el-menu--collpase {
    width: 64px;
    min-height: 400px;
  }
  .fe-aside-logo {
    padding: 14px 20px;
    height: 60px;
    background-color: #192129;
    box-sizing: border-box;
    .fe-aside-logo-img {
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>
