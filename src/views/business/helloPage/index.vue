<i18n>
{
  "zh-CN": {
    "title": "首页",
    "helpTip": "这里是首页",
    "test": "你好，西人马",
    "openModal": "打开弹窗"
  },
  "en": {
    "title": "Index",
    "helpTip": "Here is the index location.",
    "test": "Hello, fatritech",
    "openModal": "Open modal"
  }
}
</i18n>
<template>
  <div>
    <create-header :header="createHeader.header"></create-header>
    <h3>{{ $t('test') }}</h3>
    <el-button type="primary" @click="openModal">{{ $t('openModal') }}</el-button>
  </div>
</template>
<script>
import CreateHeader from '@/components/create-header/index.vue';
import Modal from './modal.vue';

export default {
  name: 'helloPage',
  components: {
    CreateHeader,
  },
  data() {
    return {
      createHeader: {
        header: {
          title: this.$t('title'),
          helpTip: {
            content: this.$t('helpTip'),
            position: 'top-start',
          },
        },
      },
    };
  },
  methods: {
    openModal() {
      const title = 'Example title';
      const winData = {
        text: 'Hello, I am the modal content of fatri vue project.',
      };
      this.$modal.show(title, Modal, winData, '700px', this.onConfirm, this.onCancel);
    },
    onConfirm(option) {
      console.log(option);
    },
    onCancel() {
      console.log('onCancel');
    },
  },
};
</script>
<style></style>
