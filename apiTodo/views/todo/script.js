class Todos {
    constructor() {
        this.todos = [];
        this.parrent = document.querySelector('ul');
        this.inputValue = document.querySelector('.additem__input');
    }

    checkInputValue(){
        if(this.inputValue.value === '') {
            this.inputValue.value = 'Вы ничего не написали'
        } else {
            this.inputValue.value = this.inputValue.value
        }
    }

    create() {
        this.newTodos()
    }

    delete() {
        console.log('lol2')
    }

    newTodos(newArray){
        console.log('lol3')
        // this.todos = newArray
        console.log(this.todos)
        
        this.draw()
    }

    draw () {
        this.checkInputValue();
        const element = document.createElement('li');

        element.innerHTML = `
        <input type="checkbox">${this.inputValue.value}
        <img src="./basket.svg" alt="basket" onclick="todo.delete()">
        `;

        this.parrent.append(element);
        
        this.inputValue.value = ''

        this.todos.push(element)
        console.log(this.todos)
    }
}
const todo = new Todos();

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