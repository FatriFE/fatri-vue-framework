<template>
  <div class="modal">
    <el-dialog
      :title="options.title"
      :width="options.width || '600px'"
      :visible.sync="visible"
      :before-close="handleCancel"
      :close-on-click-modal="false"
    >
      <p>{{ options.winData.text || '--' }}</p>
      <span slot="footer" class="modal_footer">
        <el-button size="medium" @click="handleCancel">{{ $t('common.cancel') }}</el-button>
        <el-button size="medium" type="primary" @click="handleConfirm">{{ $t('common.confirm') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import modalMixin from '@/plugins/modal/mixin';

export default {
  name: 'example-modal',
  mixins: [modalMixin],
};
</script>
<style lang="less">
.modal {
  .el-dialog__wrapper {
    .el-dialog__body {
      max-height: 400px;
      overflow: auto;
    }
  }
}
</style>
