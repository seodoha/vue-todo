<template>
    <div id="app">
        <TodoHeader />
        <TodoInput />
        <TodoList />
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
