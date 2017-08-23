<template>
    <div>
        <div class="owl-logos owl-carousel">
            <div class="logo" v-for="good in goods"><a href="#"><img :src="good.image" alt=""></a></div>
        </div>
        <div class="wrap_select_brands">
            <ul class="select_brand">
                <li><a href="#brands" class="various"><span class="tooltip">а</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">б</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">в</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">г</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">д</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">е</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">ё</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">ж</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">з</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">и</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">й</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">к</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">л</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">м</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">н</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">о</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">п</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">р</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">с</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">т</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">у</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">ф</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">х</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">ц</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">ч</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">ш</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">щ</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">э</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">ю</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">я</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
            </ul>
            <ul class="select_brand eng">
                <li><a href="#brands" class="various"><span class="tooltip">a</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">b</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">c</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">d</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">e</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">f</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">g</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">h</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">i</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">j</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">k</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">l</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">m</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">n</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">o</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">p</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">q</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">r</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">s</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">t</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">u</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">v</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">w</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">x</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">y</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">z</span><span class="tooltip_brand">Выберите первую букву названия бренда</span></a></li>
            </ul>
            <ul class="select_brand numb">
                <li><a href="#brands" class="various"><span class="tooltip">0</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">1</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">2</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">3</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">4</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">5</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">6</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">7</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">8</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
                <li><a href="#brands" class="various"><span class="tooltip">9</span><span class="tooltip_brand">Выберите первую цифру названия бренда</span></a></li>
            </ul>
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