// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];

// const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };

// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList;
// }

// renderGoodsList(goods);

// Задание №1 очень грубый набросок, катастрофически не хватало времени, к след. дз выжму все что знаю

// Задание №2


const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];


const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('\n');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();

// Задание № 3 Перебор объекта отображается через запятую, по умолчанию, для того чтобы убрать используем метод join с разделителем("")