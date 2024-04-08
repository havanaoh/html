<template>
  <div id="appPage">
	  <router-view/>
    <TodoComponents />
  </div>
</template>
<script>
import TodoComponents from "./components/TodoComponents.vue";
export default {
  name: "App",
  components: {
    TodoComponents,
  },
};
</script>
<style>

</style>
