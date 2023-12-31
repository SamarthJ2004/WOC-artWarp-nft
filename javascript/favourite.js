import {match,tellCollection} from './cart.js'

let favourite=JSON.parse(localStorage.getItem('favourite'))||[{
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

export function renderFav(){
    let HTML=``;
    favourite.forEach((item)=>{
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
    })
    document.querySelector('.fav-items').innerHTML=HTML;
    document.querySelectorAll('.js-remove').forEach((link)=>{
        link.addEventListener('click',()=>{
            removeFav(link.dataset.removeId);
        });
    });
    document.querySelector('.js-count-fav').innerHTML=`${favourite.length} items`;
}

function removeFav(imageId){
    const newFav=[];

    favourite.forEach((item)=>{
        if (item.image!==imageId){
            newFav.push(item);
        }
    });
    favourite=newFav;
    localStorage.setItem('favourite',JSON.stringify(newFav));
    renderFav();
}

export function addToFav(imageId,collection){
    if (match(imageId,favourite)){
        alert('Already in the Favourites');
    }else{
        const requiredCollection=tellCollection(collection);
        collection.forEach((item)=>{
            if (imageId===item.image){
                favourite.push({
                    image: imageId,
                    name: item.name,
                    collection: requiredCollection,
                    price: item.price
                });
            };
        });
        localStorage.setItem('favourite',JSON.stringify(favourite));
    }
};