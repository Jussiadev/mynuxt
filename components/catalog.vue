<template>
    <div class="content_catalog">
        <div class="top_block">
            <div class="bread">Бренды</div>
        </div>
        <form action="#" class="akcii">
            <div class="selected_pop">
                <div class="selected_relative">
                    <div class="select_list_wrapper">
                        <div class="select_list_current">
                            <span class="label">Сортировать:</span>
                            <span class="select_list_current_item">По популярности</span>
                        </div>
                        <div class="select_list">
                            <div class="select_list_radio"><input type="radio" id="by_popular" name="sort_list" checked><label for="by_popular"><span>По популярности</span> </label></div>
                            <div class="select_list_radio"><input type="radio" id="by_price" name="sort_list"><label for="by_price"><span>По цене</span> </label></div>
                            <div class="select_list_radio"><input type="radio" id="by_date" name="sort_list"><label for="by_date"><span>По новизне</span> </label></div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="sort_icon"></a>
            <div class="selected_list">
                <div class="select_list_wrapper">
                    <div class="select_list_current">
                        <span class="label">Показывать по:</span>
                        <span class="select_list_current_item">6</span>
                    </div>
                    <div class="select_list">
                        <div class="select_list_radio"><input type="radio" id="by_six" name="see_list" checked><label for="by_six"><span>6</span> </label></div>
                        <div class="select_list_radio"><input type="radio" id="by_twelve" name="see_list"><label for="by_twelve"><span>12</span> </label></div>
                        <div class="select_list_radio"><input type="radio" id="by_two_four" name="see_list"><label for="by_two_four"><span>24</span> </label></div>
                        <div class="select_list_radio"><input type="radio" id="by_four_eight" name="see_list"><label for="by_four_eight"><span>48</span> </label></div>
                        <div class="select_list_radio"><input type="radio" id="by_alll" name="see_list"><label for="by_alll"><span>Все</span> </label></div>
                    </div>
                </div>
            </div>
        </form>
        <div class="brand_grid">
            <div class="brand middle" v-for="good in goods">
                <a href="#">
                    <div class="img"><img :src="good.image" alt=""></div>
                    <div class="title">{{good.brend}}</div>
                    <div class="kol">150 товаров</div>
                </a>
            </div>
            <a href="#" class="show_more button_green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.67 10.04"><defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}</style></defs><polyline class="cls-1" points="0.34 0.37 10.33 9.37 20.33 0.37"/></svg>Показать еще</a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                goods: [
                    {
                        "id": 1,
                        "title": "Сосиски", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
                        "promo": false,
                        "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
                        "image": "/img/sliders/brand7.png", // Ссылка на файл
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