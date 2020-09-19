<template>
  <div>
      <p>
        This is basic "todo" application. <br>
        In this application i practice with simple routing, also i practice with components and computed properties (select). <br>
        As well i try to practice with events and transmit them to parent component. <br>
        Using local storage as data base for todo list. <br>
        </p>
        <p>
          Version 1.1.1 <br>
          Whats new?<br>
          Added Vuex logic, all variables now in store.<br>
          Added mutations to interact with store<br>
          Added actions to fetch data from local storage <br>
          Added actions for events<br>
          Practicing with "store modules" (todo.js)<br>
          </p>
      <router-link to="/todos">To todo list</router-link>
      <hr>
      <router-link to="/">Back to main menu</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  p {
    text-align: center;
  }
</style>