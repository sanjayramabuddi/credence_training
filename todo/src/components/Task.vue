<template>
  <div class="container">
    <div class="task">
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <div class="form">
        <input type="text" placeholder="New Task" v-model="newTask"/>
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>
      <div class="taskItems">
        <ul>
          <li v-for="task in tasks" :key="task.id">
            <button>{{ task.title }}</button>
            <button><i class="far fa-trash-alt"></i></button>
          </li>
        </ul>
      </div>
      <div class="clearBtns">
        <button v-on:click="clearCompleted">Clear completed</button>
        <button v-on:click="clearAll">Clear all</button>
      </div>
      <div class="pendingTasks">
        <span>Pending Tasks: {{ inComplete }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data(){
    return {
      newTask: ""
    }
  },
  props: ["tasks"],
  methods: {
    addTask() {
      if (this.newTask){
        this.tasks.push({
          title: this.newTask,
          completed: false
        })
        this.newTask = ""
      }
    },
    inProgress(task){
      return !this.isCompleted(task)
    },
    isCompleted(task) {
      return task.completed
    },
    clearCompleted(){
      this.tasks = this.tasks.filter(this.inProgress);
    },
    clearAll() {
      this.tasks = [];
    },
  },
  computed: {
    inComplete() {
      return this.tasks.filter(this.inProgress).length
    }
  }
};
</script>
