class TodoStore{
    constructor() {
        this.todos = []
        this.parrent = document.querySelector('ul')
        this.inputValue = document.querySelector('.additem__input')
        this.colors = ['#e76c6c', '#e775de', '#a084ec', '#659ff7', '#69ce9f', '#fdcf00'];
    }

    async getTodos() {
        try{
            await axios.get('http://localhost:3000/api/todos')
        .then((res) => {
            console.log(res.data)
            this.render(res.data)
        })
        }catch(err){
            console.log(err)
        }
    }

    async createTodo() {
        try{
            if (this.inputValue.value == '') {
                this.inputValue.value = 'Вы ничего не написали';
            } else {
                this.inputValue.value = this.inputValue.value;
            }
            await axios.post('http://localhost:3000/api/todos', {name: this.inputValue.value})
            .then((res) => {
                this.getTodos()
            })
        }catch(err){
            console.log(err)
        }
    }
    
    async deleteTodo(id) {
        try{
            await axios.delete(`http://localhost:3000/api/todos/${id}`)
            .then((res) => {
                this.getTodos()
            })
        }catch(err){
            console.log(err)
        }
    }

    async doneTodos(id){
        try{
            await axios.put(`http://localhost:3000/api/todos/${id}`)
            .then(res => {
                console.log(res.data)
                this.getTodos()
            })
        }catch(err){
            console.log(err)
        }
    }

    render(todos){
        this.parrent.innerHTML = ''
        todos.todos.forEach(todo => {
            if(todo.done){
                li.classList.add('checked')
            }
            const li = document.createElement('li')
            li.innerHTML = `
            <input type="checkbox" name="done" onclick="todo.doneTodo('${todo._id}')">${todo.name}
            <img src="./basket.svg" alt="basket" onclick="todo.deleteTodo('${todo._id}')">
            `;
            let randomColor = this.colors[Math.floor(Math.random()*this.colors.length)];
            const selected = document.querySelector('.activeColor');

            if (selected) {
                li.classList.add(selected.classList[1]);
            } else {
                li.style.background = randomColor;
            }

            this.parrent.append(li)
            this.inputValue.value = ''
            
        })
    }
}

const todo = new TodoStore()

window.addEventListener('onload', todo.getTodos())

// Проверка на чекбокс
let list = document.querySelector('ul');

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT')  {
        event.target.parentNode.classList.toggle('checked');
    }
})
// Рамка выбора цвета для блока

const colorChoise = document.querySelectorAll('.additem__color'),
      colorWrapper = document.querySelector('.additem__wrapper');

colorWrapper.addEventListener('click', (event) => {
    if(event.target.classList.contains('additem__color')) {
        colorChoise.forEach(item => {
            item.classList.remove('activeColor');
        })
        event.target.classList.add('activeColor');
    }
})



//     async deleteTodo(id) {
//         const itemIndex = this.todos.findIndex(item => item.id === id)   // по id находим туду и сплайсим при этом меняем сетстейт
//         if (itemIndex === -1) {
//             return
//         }
//         try {
//             // await axios.delete('/', { data: { foo: "bar" } })             //It accepts two parameters: url and optional config. You can use config.data to set the response body as follows:
//             this.todos.splice(itemIndex, 1)
//             this.setState([...this.todos])
//         } catch(err) {
//             console.log(err)
//         }   
//     }