const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton')
const clearMessageButton = document.querySelector('.clearMessageButton')
const inputBox = document.querySelector('.theInputValue')
const fruits = ['Apple', 'Banna', 'Pear', 'Orange', 'Grapes']
const fruitList = document.querySelector(".fruits")
const fruitInput = document.querySelector(".inputFruit")
const addFruitButton = document.querySelector(".addFruitButton")

/* theMessageButton.addEventListener('click', function(){
    setTimeout(function(){
        myMessage.innerText = 'This is a message in the DOM!';
    }, 5000);
}); */

/* clearMessageButton.addEventListener('click', function(){
    setTimeout(function(){
        myMessage.innerText = '';
    }, 5000);
}); */ 

theMessageButton.addEventListener('click', function(){
        myMessage.innerText = inputBox.value;
});

clearMessageButton.addEventListener('click', function(){
    myMessage.innerText = '';
});

myMessage.addEventListener('click', function(){
    myMessage.classList.toggle('darkmode')
});

/* LOOP FRUITS
-------------------------------------------------------------------------------------------------------------------------------*/
for (let i=0;i<fruits.length;i++){
    const fruit = fruits[i];
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}
/* ADD FRUITS
-------------------------------------------------------------------------------------------------------------------------------*/

addFruitButton.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = fruitInput.value
    fruitList.appendChild(li)
})








