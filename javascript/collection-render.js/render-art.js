import {art} from '../collection-data.js'
import { renderHTML } from './render.js';
import { addToCart } from '../cart.js';
import { addToFav } from '../favourite.js';

let HTML=``;

art.forEach((item)=>{
    HTML=renderHTML(item,HTML);
});

document.querySelector('.item-block')
    .innerHTML=HTML;

document.querySelectorAll('.js-add-cart').forEach((cartButton)=>{
    cartButton.addEventListener('click',()=>{ 
        addToCart(cartButton.dataset.imageId,art);
    });
});

document.querySelectorAll('.js-add-fav').forEach((favButton)=>{
    favButton.addEventListener('click',()=>{ 
        addToFav(favButton.dataset.imageId,art);
    });
});