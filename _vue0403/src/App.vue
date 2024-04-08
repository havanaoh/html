<template>
  <div>
    <my-component></my-component>
    <my-component></my-component>
    <my-component></my-component>
  </div>
  </template>
  
  <script>
  import MyComponent from './components/MyComponent.vue'
  export default {
    name: 'App',
    components: {
      "my-component": MyComponent,
    },
  
  }
  </script>
  
  <style>
  </style>