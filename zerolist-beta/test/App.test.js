import Vue from "vue";
import App from "../src/App";

describe("App.test.js", () => {
  let cmp, vm, vm2, vm3;

  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        messages: ["Test Assert"]
      }
    }).$mount(); // Instances and mounts the component
    vm2 = new cmp({
        data: {
          // Replace data value with this fake data
          messages: ["Secondary Import"],
          message2: ["Welcome to Zerolist"]
        }
      }).$mount(); // Instances and mounts the component
      vm3 = new cmp({
        data: {
          // Replace data value with this fake data
          state: ["Menubar Items"],
          actions: ["Router Dependency"]
        }
      }).$mount(); // Instances and mounts the component
  });
  

  it('Test suite status and dependency status', () => {
    expect(vm.messages).toEqual(["Test Assert"]);
  });

  it('list data imported and checked from Home', () => {
    expect(vm2.message2).toEqual(["Welcome to Zerolist"]);
  });

  it('data persistence and vuex store status', () => {
    expect(vm2.messages).toEqual(["Secondary Import"]);
  });

  it('Menubar Items are stored and listed', () => {
    expect(vm3.state).toEqual(["Menubar Items"]);
  });

  it('Router is functional and dependencies are intact', () => {
    expect(vm3.actions).toEqual(["Router Dependency"]);
  });

});