class TodoStore{
    constructor() {
        this.todos = []
        this.parrent = document.querySelector('ul')
    }
    
    async getTodos(){
        try{
            const res = await axios.get('http://localhost:3000/api/todos')
            const todos = res.data
    
            console.log(todos)
        } catch(err){
            console.log(err)
        }
    }

    setState(newTodos){
        this.todos = newTodos
        this.draw()
    }

    drow(){
        this.parrent.innerHTML = ''
        this.todos.forEach(todo => {
            this.parrent.append(todo)
        })
        console.log(this.todos)
    }
}

const todo = new TodoStore();


// class TodoStore {
//     constructor() {
//         this.todos = []
//         this.parrent = document.querySelector('ul')
//         this.inputValue = document.querySelector('.additem__input');
//         this.element = document.createElement('li');
//     }

//     async getTodos (){
//         try {
//           const res = await axios.get('http://localhost:3000/api/todos');
      
//           const todos = res.data;
      
//           console.log(todos);
      
//           return todos;
//         } catch (e) {
//           console.error(e);
//         }
//       };

//     async createTodo (){
//         try{
//             // const element = document.createElement('li');

//             // await axios.post('/', {
                
//             // })
//             // .then((res) => {
//             //     this.todos.push(res.data);
//             //     console.log(this.todos)
//             //     this.setState([...this.todos]);
//             // })
//             const element = document.createElement('li');
//             element.innerHTML = `
//             <input type="checkbox">${this.inputValue.value}
//             <img src="./basket.svg" alt="basket" onclick="todo.deleteTodo(id)">
//             `;
//             // const res = await axios.post('/', data, config)
//             this.todos.push(element);
//             this.setState([...this.todos]);
//         } catch(err) {
//             console.log(err)
//         }
//     }

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

//     setState(newItems) {
//         this.toods = newItems;       // заменяем старый массив новым, для того чтобы вызвать каждый раз функцию дро
//         this.draw()
//     }

//     draw() {
//         // рендерит тудушки в html
//         this.todos.forEach(todo => {
//             this.parrent.append(todo)
//         })
//         console.log(this.todos)
//     }
// }











// const colors = ['#e76c6c', '#e775de', '#a084ec', '#659ff7', '#69ce9f', '#fdcf00'];

// Проверка на чекбокс
// let list = document.querySelector('ul');

//     list.addEventListener('click', (event) => {
//         if (event.target.tagName === 'INPUT')  {
//             event.target.parentNode.classList.toggle('checked');
//         }
//     })
// // Рамка выбора цвета для блока

// const colorChoise = document.querySelectorAll('.additem__color'),
//       colorWrapper = document.querySelector('.additem__wrapper');

// colorWrapper.addEventListener('click', (event) => {
//     if(event.target.classList.contains('additem__color')) {
//         colorChoise.forEach(item => {
//             item.classList.remove('activeColor');
//         })
//         event.target.classList.add('activeColor');
//     }
// })

// // Добавление нового item

// let btn = document.querySelector('button'),
//     inputValue = document.querySelector('.additem__input');

// function newLi () {
//     let li = document.createElement('li'),
//         inputCheckbox = document.createElement('input');

//     inputCheckbox.type = 'checkbox';
    
//     if (inputValue.value == '') {
//         inputValue.value = 'Вы ничего не написали';
//     } else {
//         inputValue.value = inputValue.value;
//     }

//     li.append(inputCheckbox);
//     li.append(inputValue.value);
//     let randomColor = colors[Math.floor(Math.random()*colors.length)];

//     let selected = document.querySelector('.activeColor');

//     if (selected) {
//         li.classList.add(selected.classList[1]);
//     } else {
//         li.style.background = randomColor;
//     }

//     list.append(li);
// }

// btn.addEventListener('click', () => {
//     newLi();
//     inputValue.value = '';
// })