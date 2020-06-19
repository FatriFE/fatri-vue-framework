<template>
  <div>
    <el-submenu :index="menu.path || 'null'">
      <template slot="title">
        <i v-if="menu.icon" slot="title" :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </template>
      <template v-if="menu.children && menu.children.length > 0">
        <template v-for="(c, index) in menu.children">
          <menu-item v-if="c.children === undefined" :key="index + ''" :menu="c"></menu-item>
          <sub-menu v-else :key="index + ''" :menu="c"></sub-menu>
        </template>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import MenuItem from './menuItem.vue';

export default {
  name: 'sub-menu',
  components: {
    MenuItem,
  },
  props: {
    menu: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
