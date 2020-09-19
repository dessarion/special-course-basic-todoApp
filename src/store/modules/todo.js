export default {
    state: {
        todos: []
    },
    actions: {
        fetchTodos({ commit }) {
            const response = JSON.parse(localStorage.getItem('todos') || '[]');
            commit('updateTodos', response)
        },
        sendToStorage({ commit }, todo) {
            commit('addTodo', todo)
        },
        removeFromStorage({ commit }, id) {
            commit('deleteTodo', id)
        },
        changeStorageStatus({ commit }, id) {
            commit('changeStatus', id)
        },
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        },
        addTodo(state, newTodo) {
            state.todos.push(newTodo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        changeStatus(state, id) {
            const index = state.todos.findIndex(t => t.id === id)
            state.todos[index].isCompleted = !state.todos[index].isCompleted
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
    },
    getters: {
        getTodos(state) {
            return state.todos
        },
        getCompletedTodos(state) {
            return state.todos.filter(t => t.isCompleted)
        },
        getUncompletedTodos(state) {
            return state.todos.filter(t => !t.isCompleted)
        },
    },
}