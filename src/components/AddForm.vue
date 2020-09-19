<template>
  <form @submit.prevent="submitItem">
      <input type="text" v-model="item">
      <button type="submit">Add todo</button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'add-item',    
    data() {
        return {
            item: ''
        }
    },
    methods: {
        ...mapActions(['sendToStorage']),
        submitItem() {
            if (this.item.trim()) {
                const newItem = {
                    id: Date.now(),
                    title: this.item,
                    isCompleted: false
                }
                this.sendToStorage(newItem)
                this.item = ''                
            }
        }
    },

}
</script>

<style scoped>
    form {
        width: 350px;
        margin: 5px;
        display: flex;
        justify-content: space-between;
    }
    input {
        padding: 3px;
        width: 250px;
    }

</style>