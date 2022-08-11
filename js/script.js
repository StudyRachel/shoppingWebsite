import { foodItem } from './fooditem.js'
console.log(foodItem);

function displayItem(){
    var fruit = document.querySelector('#fruit');
    var noodle = document.querySelector('#noodle');
    var pasta = document.querySelector('#pasta');
    var pizza = document.querySelector('#pizza');
    var sweet = document.querySelector('#sweet');

    const fruitData = foodItem.filter(item => item.category =='水果');
    console.log(fruitData);
    const noodleData = foodItem.filter(item => item.category =='拉麵');
    console.log(noodleData);
    const pastaData = foodItem.filter(item => item.category =='義大利麵');
    console.log(pastaData);
    const pizzaData = foodItem.filter(item => item.category =='披薩');
    console.log(pizzaData);
    const sweetData = foodItem.filter(item => item.category =='甜點');
    console.log(sweetData);
    
    fruitData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText= item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= '價錢 NT$ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        fruit.appendChild(itemCard);
    })

    noodleData.map(item =>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = '價錢 NT$ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        noodle.appendChild(itemCard);
    })

    pastaData.map(item =>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = '價錢 NT$ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        pasta.appendChild(itemCard);
    })

    pizzaData.map(item =>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= '價錢 NT$ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        pizza.appendChild(itemCard);
    })

    sweetData.map(item =>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star')
        star.setAttribute('id','rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerHTML = '價錢 NT$ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        sweet.appendChild(itemCard);
    })
}

displayItem();