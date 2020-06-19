<template>
  <div>
    <create-header :header="createHeader.header" :btns="createHeader.btns"></create-header>
  </div>
</template>

<script>
import CreateHeader from '@/components/create-header/index.vue';

export default {
  name: 'role',
  components: {
    CreateHeader,
  },
  data() {
    return {
      createHeader: {
        header: {
          title: '角色',
          helpTip: {
            content: '角色的解释',
            position: 'top-start',
          },
        },
        btns: [
          {
            id: 'createRole',
            text: '创建角色',
            icon: 'el-icon-plus',
            click: (e) => {
              if (e) e.preventDefault();
              console.log('createRole');
            },
          },
        ],
      },
    };
  },
};
</script>

<style></style>
