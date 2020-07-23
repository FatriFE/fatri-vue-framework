<template>
  <el-dropdown class="fe-layout-dropdown" trigger="hover" szie="small" @command="changeUser">
    <span class="el-dropdown-link">
      <i class="el-icon-user el-icon--right"></i>
      {{ info.name }}
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="userInfo">
        <i class="el-icon-info"></i>
        用户信息
      </el-dropdown-item>
      <el-dropdown-item command="changePwd">
        <i class="el-icon-edit-outline"></i>
        修改密码
      </el-dropdown-item>
      <el-dropdown-item command="logout">
        <i class="fa fa-power-off"></i>
        退出登录
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CookieService from '@/util/CookieService';

export default {
  name: 'header-user',
  computed: {
    ...mapState('system/user', ['info']),
  },
  methods: {
    ...mapMutations({
      INFO: 'system/user/INFO',
    }),
    changeUser(e) {
      if (e === 'logout') {
        this.logout();
      }
    },
    logout() {
      CookieService.delCookie('Business-Token');
      this.INFO({});
      this.$router.replace('/login');
    },
  },
};
</script>
