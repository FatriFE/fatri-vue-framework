<template>
  <el-container class="fe-layout">
    <!-- aside -->
    <menu-aside></menu-aside>
    <el-container style="overflow-x: hidden;">
      <!-- header -->
      <el-header class="fe-layout-header">
        <!-- collapse trigger icon -->
        <i v-if="!collapsed" class="el-icon-s-fold font-20 fe-lauout-trigger" @click="toogle"></i>
        <i v-if="collapsed" class="el-icon-s-unfold font-20 fe-lauout-trigger" @click="toogle"></i>
        <!-- user info -->
        <header-user></header-user>
        <!-- locales -->
        <header-locales></header-locales>
        <!-- fullscreen -->
        <!-- <header-fullscreen></header-fullscreen> -->
      </el-header>
      <!-- content -->
      <el-main class="fe-layout-content">
        <div class="fe-layout-content-container">
          <router-view></router-view>
        </div>
      </el-main>
      <!-- footer -->
      <el-footer
        class="fe-layout-footer"
      >{{ $t('common.copyright1') + new Date().getFullYear() + $t('common.copyright2') }}</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import MenuAside from './components/menu-aside/index.vue';
import HeaderUser from './components/header-user/index.vue';
import HeaderLocales from './components/header-locales/index.vue';
// import HeaderFullscreen from './components/header-fullscreen/index.vue';

export default {
  name: 'fe-layout',
  components: {
    MenuAside,
    HeaderUser,
    HeaderLocales,
    // HeaderFullscreen,
  },
  computed: {
    ...mapState('system/layout', ['collapsed']),
  },
  methods: {
    ...mapMutations({
      COLLAPSED: 'system/layout/COLLAPSED',
    }),
    toogle() {
      this.COLLAPSED(!this.collapsed);
    },
  },
};
</script>

<style lang="less">
.fe-layout {
  height: 100%;
  .fe-layout-header {
    padding: 0;
    background-color: @color-white-bg;
    box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  .fe-layout-content {
    width: 100%;
    height: calc(100% - 122px);
    padding: 0;
    background-color: @color-content-bg;
    box-sizing: border-box;
    position: relative;
    .fe-layout-content-container {
      position: relative;
      height: 100%;
      padding: 20px;
      color: #333;
      box-sizing: border-box;
      min-width: 970px;
      min-height: 360px;
      background-color: @color-content-bg;
    }
  }
  .fe-layout-footer {
    height: 42px !important;
    text-align: center;
    font-size: 12px;
    line-height: 42px;
    padding: 0;
    box-sizing: border-box;
    color: @color-text-normal;
  }
  .fe-lauout-trigger {
    float: left;
    padding: 0 24px;
    line-height: 60px;
    cursor: pointer;
    transform: color, 0.3s;
    &:hover {
      color: @color-primary;
    }
  }
  .fe-layout-dropdown {
    float: right;
    margin: 20px;
    .el-dropdown-link {
      cursor: pointer;
      &:hover {
        color: @color-primary;
      }
    }
  }
  .fe-layout-fullscreen-button {
    float: right;
    margin: 10px 20px;
    color: @color-text-normal;
    &:hover {
      color: @color-primary;
    }
  }
}
</style>
