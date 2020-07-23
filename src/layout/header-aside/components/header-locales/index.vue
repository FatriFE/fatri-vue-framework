<template>
  <el-dropdown class="fe-layout-dropdown" trigger="hover" szie="small" @command="changeLocale">
    <span class="el-dropdown-link">
      <i class="fa fa-language mr-5"></i>
      {{ $i18n.locale === 'zh-CN' ? '中文' : 'English' }}
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh-CN">
        <i
          :class="{ 'fa fa-dot-circle-o': $i18n.locale === 'zh-CN', 'fa fa-circle-o': $i18n.locale === 'en' }"
        ></i>
        中文
      </el-dropdown-item>
      <el-dropdown-item command="en">
        <i
          :class="{ 'fa fa-circle-o': $i18n.locale === 'zh-CN', 'fa fa-dot-circle-o': $i18n.locale === 'en' }"
        ></i>
        English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import CookieService from '@/util/CookieService';

export default {
  name: 'header-locales',
  methods: {
    changeLocale(e) {
      if (this.$i18n.locale === e) {
        return;
      }
      this.$i18n.locale = e;
      CookieService.setCookie('Business-Lang', e, 1);
      window.location.reload(true);
    },
  },
};
</script>
