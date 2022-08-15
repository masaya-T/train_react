const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        },1000)
    }
}

const EventHandling = {
    data() {
        return {
            message: 'Hello'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        }
    }
}

const TwoWayBinding = {
    data() {
        return {
            message:'Hello Vue'
        }
    }
}

const ConditionalRendering = {
    data() {
        return {
            seen:false
        }
    }
}

const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Learn java' },
                { text: 'Learn pyhton' },
                { text: 'play game' }
            ]
        }
    }
}

const TodoItem = {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
}

const Todolist = {
    data() {
        return {
            groceryList: [
                { id: 10, text: 'Vegetables' },
                { id: 12, text: 'Cheese' },
                { id: 2, text: "nanika" }
            ]
        }
    },
            components: {
            TodoItem
        }
}

Vue.createApp(Counter).mount('#counter')
Vue.createApp(EventHandling).mount('#event-handling')
Vue.createApp(TwoWayBinding).mount('#two-way')
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
Vue.createApp(ListRendering).mount('#list-rendering')
const app = Vue.createApp(Todolist).mount('#todo-list-app')

const app2 = Vue.createApp({})

app2.component('button_counter', {
    data() {
        return {
            count:0
        }
    },
    template: `
        <button @click="count++">
            you clicked me {{ count }} times.
        </button>`
})
app2.mount('#components-demo')

app2.component('custom-form', {
    emits: {
        click: null,
        submit: ({ email, password }) => {
            if (email && password) {
                return true
            } else {
                console.warn('Ivent paload')
                return false
            }
        }
    },
    methods: {
        submitForm(email, password) {
            this.$emit('submit', { email, password })
        }
    }
})
