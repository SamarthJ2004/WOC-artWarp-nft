export const collection=[{
    id: 1,
    name: 'Gaming',
    count: 9
}, {
    id: 2,
    name: 'Anime',
    count: 10
}, {    
    id: 3,
    name: 'Beauty of Art',
    count: 8
}, {
    id: 4,
    name: 'Cars',
    count: 6
}, {
    id: 5,
    name: 'City Life',
    count: 7
}, {
    id: 6,
    name: 'Marvelous World',
    count:10
}, {
    id: 7,
    name: 'Landscapes',
    count: 10
}, {
    id: 8,
    name: 'Miscellaneous',
    count: 6
}];

let HTML=``;

collection.forEach((item)=>{
    HTML+=`
    <div class="collection-tab collection-tab${item.id}" onclick="window.location='nft-collection-${item.id}.html'">
        <div class="collection-tab-front">
            <div class="front-items">
                <div class="collection-logo">
                    <div class="logo-back logo-back${item.id}"></div>
                </div>
                <div class="collection-heading">
                    ${item.name}
                </div>
                <div style="color:white">
                    <div style="font-size:16px">NFTs</div>
                    <div style="font-size:20px;">${item.count}</div>
                </div>
            </div>
        </div>
    </div>
    `;
});

document.querySelector('.collection')
    .innerHTML=HTML;