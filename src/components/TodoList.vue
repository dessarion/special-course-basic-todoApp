<template>
  <div>
      <ul>
         <TodoItem 
            v-for="(item, i) in todos"
            :key="item.id"
            :item="item"
            :index="i"
         />
      </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    name: 'todo-list',
    props: ['todos'],
    components: {
        TodoItem,
    },
}
</script>

<style>
    ul{
        list-style: none;
        width: 800px;
        margin: 0 auto;
    }
</style>