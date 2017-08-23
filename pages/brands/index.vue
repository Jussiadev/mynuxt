<template>
    <div>
        <nuxt-link to="/"><h1>Go to /</h1></nuxt-link>
    </div>
</template>

<script>
    import LittleSearch from '~/components/littleSearch'
    import LeftSide from '~/components/leftSide'
    import AlphabetSearch from '~/components/alphabetSearch'
    import SeenGoods from '~/components/seenGoods'
    import Catalog from '~/components/catalog'
    export default {
        head () {
            return {
                title: 'Brands',
                meta: [
                    {name: "description", content: "Описание"}
                ]
            }
        },
        layout: 'headerAndFooter',
//        components: {
//            LittleSearch,
//            LeftSide,
//            AlphabetSearch,
//            SeenGoods,
//            Catalog
//        },
        data () {
            return {
                goods: [
                    {
                        "id": 1,
                        "title": "Сосиски", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
                        "promo": false,
                        "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
                        "image": "img/sliders/brand7.png", // Ссылка на файл
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
                        "image": "img/sliders/brand8.png", // Ссылка на файл
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
                        "image": "img/sliders/brand9.png", // Ссылка на файл
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