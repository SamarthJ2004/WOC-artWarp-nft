import {anime,gaming,art,landscape,misc,cars,city,space} from './collection-data.js';

let cart=JSON.parse(localStorage.getItem('cart'))||[{
    image: 'images/anime/anime1.jpeg',
    name: 'Everything at Once',
    collection: 'Anime',
    price: 0.3
}, {
    image: 'images/anime/anime2.gif',
    name: 'The Clan Killer',
    collection: 'Anime',
    price: 0.09
}];

export function renderCart(){
    let HTML=``;
    let priceCart=0;
    cart.forEach((item)=>{
        HTML+=`
        <div class="item">
            <img src='${item.image}'>
            <div class="item-info-head">
                ${item.name}<br>
                Collection: ${item.collection}<br>
                Price: ${item.price}ETH
                <u class='js-remove' data-remove-id=${item.image}>REMOVE</u>
            </div>
        </div>`;
        priceCart+=Number(item.price);
    })
    document.querySelector('.items').innerHTML=HTML;
    document.querySelectorAll('.js-remove').forEach((link)=>{
        link.addEventListener('click',()=>{
            removeCart(link.dataset.removeId);
        });
    });
    document.querySelector('.js-count-cart').innerHTML=`${cart.length} items`;
    document.querySelector('.js-price-cart').innerHTML=`${Math.round(priceCart*100000)/100000}ETH`;
}

function removeCart(imageId){
    const newCart=[];

    cart.forEach((item)=>{
        if (item.image!==imageId){
            newCart.push(item);
        }
    });
    cart=newCart;
    localStorage.setItem('cart',JSON.stringify(newCart));
    renderCart();
}

export function addToCart(imageId,collection){
    if (match(imageId,cart)){
        alert('Already in the Cart');
    }else{
        const requiredCollection=tellCollection(collection);
        collection.forEach((item)=>{
            if (imageId===item.image){
                cart.push({
                    image: imageId,
                    name: item.name,
                    collection: requiredCollection,
                    price: item.price
                });
            };
        });
        localStorage.setItem('cart',JSON.stringify(cart));
    }
};

export function match(imageId,itemArray){
    let match;
    itemArray.forEach((item)=>{
        if (item.image===imageId){
            match=1;
        };
    });
    return match;
}

export function tellCollection(collection){
    if (collection===anime){
        return 'Anime';
    }else if(collection===gaming){
        return 'Gaming';
    }else if(collection===art){
        return 'Art';
    }else if(collection===landscape){
        return 'Landscapes';
    }else if(collection===cars){
        return 'Cars';
    }else if(collection===city){
        return 'City Life';
    }else if(collection===misc){
        return 'Miscellaneous';
    }else if(collection===space){
        return 'Marvelous World';
    }else{
        return 'Latest Drops';
    }};