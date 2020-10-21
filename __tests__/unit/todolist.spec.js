import { shallowMount } from '@vue/test-utils';
import ToDoList from '@/views/business/test/list.vue';
import { done } from 'nprogress';

// describe(name, fn) 定义一个测试套件，'test ToDoList' 是测试套件的名字，fn 是具体的可执行函数
describe('test ToDoList', () => {
  // it(name, fn) 是一个测试用例，'输入框初始值为空字符串' 是测试用例的名字，fn 是具体的可执行函数；一个测试套件里可以包含多个测试用例
  it('输入框初始值为空字符串', () => {
    // shallowMount 将会创建一个包含被挂载和渲染的 Vue 组件的 wrapper，只存根当前组件，不包含子组件
    const wrapper = shallowMount(ToDoList);
    // expect 是 Jest 内置的断言风格，业界还存在别的断言风格比如 Should、Assert 等
    // toBe 是 Jest 提供的断言方法，更多是可以到 Jest Expect 查看具体用法
    expect(wrapper.vm.toDoText).toBe('');
  });

  it('待完成列表初始值应该为空数组', () => {
    const wrapper = shallowMount(ToDoList);
    expect(wrapper.vm.toDoList.length).toBe(0);
  });

  it('已完成列表初始值应该为空数组', () => {
    const wrapper = shallowMount(ToDoList);
    expect(wrapper.vm.completedList.length).toBe(0);
  });

  it('输入框值变化的时候，toDoText应该跟着变化', () => {
    const wrapper = shallowMount(ToDoList);
    wrapper.find('.to-do-text').setValue('晚上要看电影');
    expect(wrapper.vm.toDoText).toBe('晚上要看电影');
  });

  it('输入框没有值，敲回车的时候，无变化', () => {
    const wrapper = shallowMount(ToDoList);
    const length = wrapper.vm.toDoList.length;
    const input = wrapper.find('.to-do-text');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.vm.toDoList.length).toBe(length);
  });

  it('输入框有值，敲回车的时候，待完成列表将新增一条数据，同时清空输入框', () => {
    const wrapper = shallowMount(ToDoList);
    const length = wrapper.vm.toDoList.length;
    const input = wrapper.find('.to-do-text');
    input.setValue('早上起来跑步');
    input.trigger('keyup.enter');
    expect(wrapper.vm.toDoList.length).toBe(length + 1);
    expect(wrapper.vm.toDoText).toBe('');
  });

  it('待完成列表支持编辑功能，编辑后更新toDoList数组', () => {
    const wrapper = shallowMount(ToDoList);
    wrapper.setData({ toDoList: ['跑步半小时'] });
    wrapper.vm.$nextTick(() => {
      wrapper.find('.wait-to-do li').find('input').setValue('绕着公园跑3圈');
      wrapper.find('.wait-to-do li').find('input').trigger('blur');
      expect(wrapper.vm.toDoList[0]).toBe('绕着公园跑3圈');
    });
  });

  it('待完成列表点击删除，同时更新toDoList数组', () => {
    const wrapper = shallowMount(ToDoList);
    wrapper.setData({ toDoList: ['睡前看一小时书'] });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.toDoList.length).toBe(1);
      wrapper.find('.wait-to-do li').find('.del').trigger('click');
      expect(wrapper.vm.toDoList.length).toBe(0);
    });
  });

  it('点击待完成列表中某项的已完成按钮，数据对应更新', () => {
    const wrapper = shallowMount(ToDoList);
    wrapper.setData({ toDoList: ['睡前听音乐'] });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.toDoList.length).toBe(1);
      expect(wrapper.vm.completedList.length).toBe(0);
      wrapper.find('.wait-to-do li').find('.move').trigger('click');
      expect(wrapper.vm.toDoList.length).toBe(0);
      expect(wrapper.vm.completedList.length).toBe(1);
    });
  });

  it('点击已完成列表中某项的未完成按钮，数据对应更新', () => {
    const wrapper = shallowMount(ToDoList);
    wrapper.setData({ completedList: ['读了一本书'] });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.toDoList.length).toBe(0);
      expect(wrapper.vm.completedList.length).toBe(1);
      wrapper.find('.has-completed li').find('.move').trigger('click');
      expect(wrapper.vm.toDoList.length).toBe(1);
      expect(wrapper.vm.completedList.length).toBe(0);
    });
  });

  it('列表序号从1开始递增', () => {
    const wrapper = shallowMount(ToDoList);
    wrapper.setData({ toDoList: ['看电影', '听英语'] });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.toDoList.length).toBe(2);
      expect(wrapper.find('.wait-to-do').html()).toMatch('<i>1</i>');
      expect(wrapper.find('.wait-to-do').html()).toMatch('<i>2</i>');
    });
  });

  it('待完成列表为空的时候，不显示待完成字样', () => {
    const wrapper = shallowMount(ToDoList);
    wrapper.setData({ toDoList: [] });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('h4').isVisible()).toBeFalsy();

      wrapper.setData({ toDoList: ['明天去爬山'] });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('h4').isVisible()).toBeTruthy();
      });
    });
  });
});
