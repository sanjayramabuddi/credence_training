<template>
    <div>
        <h1>Hii this is kiddo !!</h1>
        <h2>{{ data }}</h2>
        <button v-on:click="hey()">Welcome ME</button>
        <h1 v-if="show">Hiiiiiiiiiiiiiiii</h1>
        <h1 v-else>Byeeeeeeeeeeeeeee</h1>
        <button v-on:click="display()">Conditional</button>
        <table border="1px solid">
            <tr>
                <td>Number</td>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: "HomeApp",
    data: function () {
        return {
            show: true,
            users: [{
                id: 1,
                name: "John",
                age: 30,
                email: "efpyi@example.com"
            },
            {
                id: 2,
                name: "Mary",
                age: 25,
                email: "efpyo@example.com"
            },
            {
                id: 3,
                name: "Peter",
                age: 20,
                email: "efpyk@example.com"
            }]
        }
    },
    props: {
        data: {
            type: String
        }
    },
    methods: {
        hey: function () {
            alert("Hello Kiddo!!")
        },
        display: function () {
            this.show = !this.show
        }
    }
}
</script>