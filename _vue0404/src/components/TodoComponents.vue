<template>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.title }}
          <button @click="removeTodo(todo.id)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "TodoComponent",
    data() {
      return {
        todos: [],
        newTodo: "",
      };
    },
    async created() {
      const response = await axios.get("http://localhost:3005/todos");
      this.todos = response.data;
    },
    methods: {
      async addTodo() {
        if (this.newTodo !== "") {
          const response = await axios.post("http://localhost:3005/todos",
          {title: this.newTodo,});
          this.todos.push(response.data);
          this.newTodo = "";
        }
      },
      async removeTodo(id) {
        await axios.delete(`http://localhost:3005/todos/${id}`);
        this.todos = this.todos.filter((todo) => todo.id !== id);
      },
    },
  };
  </script>
  
  <style>
  @charset "UTF-8";
  html {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  
  input,
  button,
  select,
  optgroup,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  button {
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 6px;
    color: #fff;
    border: 2px;
    background-color: #007bff;
    transition: background-color 0.2s;
  }
  button:hover {
    background-color: #0069d9;
  }
  button:active {
    background-color: #003c7c;
  }
  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  input {
    padding: 6px 12px;
    border-radius: 6px;
    color: #495057;
    border: 2px solid #ced4da;
  }
  
  textarea {
    width: 500px;
    height: 200px;
  }
  select {
    border: 2px solid #ced4da;
  }
  </style>