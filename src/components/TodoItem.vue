<template>
  <li :class="{completed: item.isCompleted}">
    <span>
      <input type="checkbox" @change="$emit('update', item.id)" :checked="item.isCompleted" />
      <strong>{{index + 1}}.</strong>
      {{item.title}}
    </span>
    <button @click="$emit('remove-item', item.id)">&times;</button>
  </li>
</template>

<script>
export default {
  name: "list-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  border-radius: 15px;  
}
li:hover{
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}
input {
    margin-right: 20px;
}
button {
    border-radius: 5px;
}
.completed {
  background-color: #5ca318;
  color: #ffffff;
  text-decoration: line-through;
}
</style>