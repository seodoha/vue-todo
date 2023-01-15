<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    methods: {
        ...mapMutations({
            clearTodo: "clearAllItems",
        }),
    },
};
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
}
.clearAllBtn {
    display: block;
    color: #e20303;
}
</style>
