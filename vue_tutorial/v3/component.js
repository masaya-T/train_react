const app = Vue.createApp({})

app.component('button-counter', {
    data() {
        return {
            count:0
        }
    },
    template: `
        <button @click="count++">
            You clicked {{count}}
        </button>`
})
app.mount('#components-demo')