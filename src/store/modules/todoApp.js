const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let index = 0; index < localStorage.length; index++) {
                if (localStorage.key(index) !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
                }
            }
        }
        return arr;
    },
};

const state = {
    todoItems: storage.fetch(),
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    },
};

const mutations = {
    addOneItem(state, todoItem) {
        const obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, { todoItem, index }) {
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, { todoItem, index }) {
        state.todoItems[index].completed = !state.todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
        state.todoItems = [];
        localStorage.clear();
    },
};

export default { state, getters, mutations };
