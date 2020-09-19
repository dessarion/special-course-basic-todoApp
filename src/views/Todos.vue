<template>
  <div>
      <h2>Welcome in Todo app</h2>
      <AddForm />
      <select  v-model="filter">
        <option value="all">All tasks</option>
        <option value="completed">Completed tasks</option>
        <option value="uncompleted">Uncompleted tasks</option>
      </select>
      <hr>
      <TodoList 
        v-if="filteredTodos.length"
        :todos="filteredTodos"
      />
      <h3 v-else>Todo list is empty!</h3>
      <hr>
      <router-link to="/">Back to main menu</router-link>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TodoList from '@/components/TodoList'
import AddForm from '@/components/AddForm'

export default {
  data() {
    return {
      filter: 'all'
    }
  },
  components: {
    TodoList,
    AddForm,
  },
  mounted () {
    this.fetchTodos()
  },
  computed: {
    ...mapGetters(['getTodos', 'getCompletedTodos' , 'getUncompletedTodos']),
    filteredTodos() {
      if (this.filter === 'all'){
        return this.getTodos
      }
      if (this.filter === 'completed'){
        return this.getCompletedTodos
      }
      if (this.filter === 'uncompleted'){
         return this.getUncompletedTodos
      }
    }
  },
  methods: mapActions(['fetchTodos']),
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