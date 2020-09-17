<template>
  <div>
      <h2>Welcome in Todo app</h2>
      <AddItem @add-todo="addTodo" />
      <select  v-model="filter">
        <option value="all">All tasks</option>
        <option value="completed">Completed tasks</option>
        <option value="uncompleted">Uncompleted tasks</option>
      </select>
      <hr>
      <TodoList 
        v-if="filteredTodos.length"
        :todos="filteredTodos"
        @remove-item="removeTodo"
        @update-status="updateStatus"
      />
      <h3 v-else>Todo list is empty!</h3>
      <hr>
      <router-link to="/">Back to main menu</router-link>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddItem from '@/components/AddItem'

export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    TodoList,
    AddItem,
  },
  mounted () {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all'){
        return this.todos
      }

      if (this.filter === 'completed'){
        return this.todos.filter(t => t.isCompleted)
      }

      if (this.filter === 'uncompleted'){
        return this.todos.filter(t => !t.isCompleted)
      }
    }
  },
  methods: {
    addTodo(item) {
      this.todos.push(item)
      localStorage.setItem('todos', JSON.stringify(this.todos))  
    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
      localStorage.setItem('todos', JSON.stringify(this.todos))  
    },
    updateStatus(id) {
      const index = this.todos.findIndex(t => t.id === id)
      this.todos[index].isCompleted = !this.todos[index].isCompleted
      localStorage.setItem('todos', JSON.stringify(this.todos))  
    }
  },
}
</script>

<style scoped>
  h2{
    text-align: center;
  }
  select {
    width: 250px;
    padding: 3px;
    margin: 5px;
  }
</style>