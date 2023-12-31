export function renderHTML(item,HTML){
    HTML+=`
    <div class="item-tabs">
        <img src=${item.image}>
        <div class="info">
            <div class='sub-info'>
                <div class='author-name'>
                    <div class="author">by ${item.author}
                        <i class="fa-solid fa-circle-check" style="color: #4b48f9;"></i>
                    </div>
                    <div class="item-name">${item.name}</div>
                </div>
                <button class='js-add-cart' data-image-id=${item.image}><i class="fa-solid fa-bag-shopping fa-xl"></i></button>
                <button class='js-add-fav' data-image-id=${item.image}><i class="fa-regular fa-heart fa-xl"></i></button>
            </div>
            <div class="status-price">
                <div class="sub-status-price">
                    <div class="status">${item.status}</div>
                    <div>${item.statusValue}</div>
                </div>
                <div class="sub-status-price">
                    <div class="price">Price</div>
                    <div>${item.price}ETH</div>
                </div>
            </div>  
        </div>
    </div>
    `;
    return HTML;
}