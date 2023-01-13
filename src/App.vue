<template>
    <div id="app">
        <TodoHeader />
        <TodoInput @addTodoItem="addOneItem" />
        <TodoList :propsData="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem" />
        <TodoFooter />
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
    name: "App",
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter,
    },
    data() {
        return {
            todoItems: [],
        };
    },
    created() {
        if (localStorage.length > 0) {
            for (var index = 0; index < localStorage.length; index++) {
                if (localStorage.key(index) !== "loglevel:webpack-dev-server") {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
                }
            }
        }
    },
    methods: {
        addOneItem(todoItem) {
            var obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
        toggleOneItem(todoItem, index) {
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
    },
};
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f6;
    box-sizing: border-box;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
