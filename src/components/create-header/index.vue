<template>
  <div class="fe-create-header clearfix">
    <div class="fe-create-header-left pull-left">
      <span class="fe-create-title">{{ header.title }}</span>
      <template v-if="header.helpTip">
        <el-tooltip
          effect="dark"
          :content="header.helpTip.content"
          :placement="header.helpTip.position || 'top'"
          :open-delay="500"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </template>
    </div>
    <div class="fe-create-header-right pull-right">
      <template v-if="btns.length > 0">
        <template v-for="btn in btns">
          <el-button class="fe-create-btn" :key="btn.id" :icon="btn.icon" type="primary" @click="btn.click">
            {{ btn.text }}
          </el-button>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'feCreateHeader',
  props: {
    header: {
      type: Object,
      default: () => {},
    },
    btns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="less" scoped>
.fe-create-header {
  width: 100%;
  height: 72px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  .fe-create-header-left {
    padding: 24px 0 24px 20px;
    .fe-create-title {
      margin-right: 10px;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
    }
  }
  .fe-create-header-right {
    padding: 16px 20px 16px 0;
    .fe-create-btn {
      margin-left: 10px;
    }
  }
}
</style>
