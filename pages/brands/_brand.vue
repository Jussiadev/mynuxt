<template>
    <div class="wrap_content page">
        <div class="content">
            <LeftSide/>
            <div class="content_catalog">
                <div class="top_block">
                    <div class="bread">Товары</div>
                    <div class="grid_buttons">
                        <div class="grid btn on">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="list btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
        <div class="description">
            <img :src="goods[0].image" alt="">
            <h1>{{goods[0].brend}}</h1>
            <p>{{goods[0].description}}</p>
        </div>
                <GoodsGrid/>
        </div>
        </div>

    </div>
</template>


<script>
    import GoodsGrid from '~/components/goodsGrid'
    import LeftSide from '~/components/leftSide'
    export default {
        head () {
            return {
                title: 'Brand',
                meta: [
                    {name: "description", content: "Описание"}
                ]
            }
        },
        layout: 'headerAndFooter',
        components: {GoodsGrid,
            LeftSide},
        data () {
            return {
                goods: [
                    {
                        "id": 1,
                        "title": "Сосиски", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
                        "promo": false,
                        "description": "Атяшево gfhgfjfjgkfggfgkjfdkgfkjlfgjfgjfkgjfkgkfgkjgfkghfkg", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
                        "image": "/img/content/tovar1.png", // Ссылка на файл
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
                        "image": "/img/sliders/brand8.png", // Ссылка на файл
                        "brend": "фрутоняня",
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
                        "image": "/img/sliders/brand9.png", // Ссылка на файл
                        "brend": "Другой бренд",
                        "brend_id": 2,
                        "min_price": "99.33",
                        "rate": 4.5,
                        "count_rate": 348
                    }
                ]
            }
        }
    }
</script>