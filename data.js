exports.data = {
    tags: [
        {
            "id": 1,
            "title": "Тег1"
        },
        {
            "id": 2,
            "title": "Тег2"
        },
        {
            "id": 3,
            "title": "Тег3"
        }
    ],

    information: {
        "promo": 0,
        "products": 0,
        "brend": 0,
        "shops": 0,
        "shop_net": 0
    },

    categories: [
        {
            "id": 1,
            "title": "Мясные продукты"
        },
        {
            "id": 2,
            "title": "Молочные продукты"
        },
        {
            "id": 3,
            "title": "Рыбные продукты"
        }
    ],

    cities: [
        {
            "id": 1,
            "name": "г. Мурманск",
            "region": "Мурманская обл."
        },
        {
            "id": 2,
            "name": "Апатиты",
            "region": "Мурманская обл."
        },
        {
            "id": 3,
            "name": "Алакуртти",
            "region": "Мурманская обл."
        },
        {
            "id": 4,
            "name": "Кандалакша",
            "region": "Мурманская обл."
        }
    ],
    goods: [
        {
            "id": 1,
            "title": "Сосиски", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
            "promo": false,
            "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
            "image": "image.jpg", // Ссылка на файл
            "brend": "Атяшево",
            "brend_id": 2,
            "min_price": "99.33",
            "rate": 4.5,
            "count_rate": 348
        },
        {
            "id": 2,
            "title": "Сардельки", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
            "promo": false,
            "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
            "image": "image.jpg", // Ссылка на файл
            "brend": "Атяшево",
            "brend_id": 2,
            "min_price": "99.33",
            "rate": 4.5,
            "count_rate": 348
        },
        {
            "id": 3,
            "title": "Колбаса", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
            "promo": false,
            "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
            "image": "image.jpg", // Ссылка на файл
            "brend": "Атяшево",
            "brend_id": 2,
            "min_price": "99.33",
            "rate": 4.5,
            "count_rate": 348
        }
    ],
    StoreChains: [
        {
            "id": 1,
            "title": "Твой",
            "logo": "image.jpg",
            "description": "Крутая торговая сеть"
        }
    ],
    news: [
        {
            "id": 1,
            "title": "Заголовок новости",
            "image": "image.jpg",
            "content": "Попытка устроить Крыму туристическую блокаду захлебнулась в многотысячном потоке украинских граждан, которые, несмотря ни на какую пропаганду и долгие очереди, не изменили своего желания посетить Крым. Киевские власти испугались негодования своих же граждан и социального бунта на украинских пунктах пропуска",
            "updated_at": "Крутая торговая сеть"
        }
    ]
};