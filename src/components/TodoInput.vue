<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addToDo" />
        <span class="addContainer" @click="addToDo">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고!<i class="fa-x fa-solid closeModalBtn" @click="showModal = false"></i></h3>
            <p slot="body">무언가를 입력하세요.</p>
        </Modal>
    </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
    components: {
        Modal,
    },
    data() {
        return {
            newTodoItem: "",
            showModal: false,
        };
    },
    methods: {
        addToDo() {
            if (this.newTodoItem !== "") {
                this.$store.commit("addOneItem", this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        },
    },
};
</script>

<style scoped>
input:focus {
    outline: 0;
}
.inputBox {
    position: relative;
    height: 50px;
    background: white;
    border-radius: 5px;
    line-height: 50px;
}
.inputBox input {
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    border-style: none;
    font-size: 0.9rem;
    box-sizing: border-box;
}
.addContainer {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 3rem;
    height: 50px;
    background: linear-gradient(to right, #6478fb, #8763fb);
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
    cursor: pointer;
}
</style>
