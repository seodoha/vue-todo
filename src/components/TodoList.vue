<template>
    <div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="(todoItem, index) in this.todoItems" :key="index" class="shadow">
                <i
                    class="fa-solid fa-check checkBtn"
                    :class="{ checkBtnCompleted: todoItem.completed }"
                    @click="toggleComplete({ todoItem, index })"
                ></i>
                <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeTodo({ todoItem, index })">
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </li>
        </TransitionGroup>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
    computed: {
        //...mapGetters(["storedTodoItems"]),
        ...mapGetters({
            todoItems: "storedTodoItems",
        }),
    },
    methods: {
        ...mapMutations({
            removeTodo: "removeOneItem",
            toggleComplete: "toggleOneItem",
        }),
    },
};
</script>

<style scoped>
ul {
    position: relative;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    width: 100%;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
    box-sizing: border-box;
}
.checkBtn {
    margin-right: 5px;
    line-height: 45px;
    color: #62acde;
    cursor: pointer;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
    cursor: pointer;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.list-leave-active {
    position: absolute;
}
</style>
