class TodoStore {
    constructor() {
        this.todos = []
        this.parrent = document.querySelector('ul')
        this.inputValue = document.querySelector('.additem__input');
        this.element = document.createElement('li');
    }

    async createTodo (){
        try{
            axios.post('/', {
                
            }).then((res) => {
                
            })
            
            const element = document.createElement('li');
            element.innerHTML = `
            <input type="checkbox">${this.inputValue.value}
            <img src="./basket.svg" alt="basket" onclick="todo.deleteTodo(0)">
            `;
            // const res = await axios.post('/', data, config)
            this.todos.push(element);
            this.setState([...this.todos]);
            
        } catch(err) {
            console.log(err)
        }
    }

    async deleteTodo(id) {
        const itemIndex = this.todos.findIndex(item => item.id === id)   // по id находим туду и сплайсим при этом меняем сетстейт
        // if (itemIndex === -1) {
        //     return
        // }
        try {
            // await axios.delete('/', { data: { foo: "bar" } })             //It accepts two parameters: url and optional config. You can use config.data to set the response body as follows:
            this.todos.splice(itemIndex, 1)
            this.setState([...this.todos])
        } catch(err) {
            console.log(err)
        }   
    }

    setState(newItems) {
        this.toods = newItems;       // заменяем старый массив новым, для того чтобы вызвать каждый раз функцию дро
        this.draw()
    }

    draw() {
        // рендерит тудушки в html
        this.todos.forEach(todo => {
            this.parrent.append(todo)
        })
        console.log(this.todos)
    }
}

const todo = new TodoStore();
// class Todos {
//     constructor() {
//         this.todos = [];
//         this.parrent = document.querySelector('ul');
//         this.inputValue = document.querySelector('.additem__input');
//         this.colors = ['#e76c6c', '#e775de', '#a084ec', '#659ff7', '#69ce9f', '#fdcf00'];
//     }

//     checkInputValue(){
//         if(this.inputValue.value === '') {
//             this.inputValue.value = 'Вы ничего не написали'
//         } else {
//             this.inputValue.value = this.inputValue.value
//         }
//     }

//     choiseRandomColor() {
//         let randomColor = this.colors[Math.floor(Math.random()*this.colors.length)];
//         return randomColor;
//     }

//     async create() {
//         this.newTodos([...this.todos])
//         try{
//             // await axios.get('/', data, config)
//             this.checkInputValue();
//             this.choiseRandomColor();

//             const element = document.createElement('li');

//             element.innerHTML = `
//             <input type="checkbox">${this.inputValue.value}
//             <img src="./basket.svg" alt="basket" onclick="todo.delete()">
//             `;

//             const selected = document.querySelector('.activeColor');

//             if (selected) {
//                 element.classList.add(selected.classList[1]);
//             } else {
//                 element.style.background = this.randomColor;
//             }

//             this.parrent.append(element);
            
//             this.inputValue.value = ''
//             this.todos.push(element)
//         }catch(err){
//             console.log(err) 
//         }
//     }

//     delete() {
//         console.log('lol2')
//     }

//     newTodos(newArray){
//         this.todos = newArray
//         this.draw()
//     }

//     draw () {
        
//         console.log(this.todos)
//     }
// }
// const todo = new Todos();

// const colors = ['#e76c6c', '#e775de', '#a084ec', '#659ff7', '#69ce9f', '#fdcf00'];

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