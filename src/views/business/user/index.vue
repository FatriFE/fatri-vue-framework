<template>
  <div>
    <create-header :header="createHeader.header" :btns="createHeader.btns"></create-header>
  </div>
</template>

<script>
import CreateHeader from '@/components/create-header/index.vue';

export default {
  name: 'user',
  components: {
    CreateHeader,
  },
  data() {
    return {
      createHeader: {
        header: {
          title: '用户',
          helpTip: {
            content: '用户的解释',
            position: 'top-start',
          },
        },
        btns: [
          {
            id: 'createUser',
            text: '创建用户',
            icon: 'el-icon-plus',
            click: (e) => {
              if (e) e.preventDefault();
              console.log('createUser');
            },
          },
        ],
      },
    };
  },
};
</script>

<style></style>
