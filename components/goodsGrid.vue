<template>
    <div class="content_catalog">
        <div class="top_block">
            <div v-if="!$route.fullPath == '/brand'">
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
        </div>
    <form action="#">
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
        <div class="right">
            <div class="sort_checkbox"><input type="checkbox" id="sales"><label for="sales">Акции</label></div>
            <div class="sort_checkbox"><input type="checkbox" id="with_price"><label for="with_price">С ценой</label></div>
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
        </div>
    </form>
    <div class="grid" id="grid">
        <div class="tovar" v-for="good in goods">
            <div class="hidden_tovar">
                <a href="#"><img :src="good.image" alt="" class="big"></a>
                <div class="info">
                    <span class="brand">“{{good.brend}}”</span>
                    <h2>{{good.title}}</h2>
                    <p class="desc">{{good.description}}</p>
                </div>
                <div class="prices">
                    <a href="#"><img src="img/content/default.png" alt="" class="mini"></a>
                    <div class="price">от<span>999 999<sup>99</sup></span><span class="rub">С</span></div>
                    <div class="wrap_rating">
                        <div class="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.47 16.62"><polygon class="raiting" points="8.74 0.9 11.08 5.97 16.62 6.63 12.52 10.42 13.61 15.89 8.74 13.17 3.86 15.89 4.95 10.42 0.85 6.63 6.4 5.97 8.74 0.9"/></svg></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.47 16.62"><polygon class="raiting" points="8.74 0.9 11.08 5.97 16.62 6.63 12.52 10.42 13.61 15.89 8.74 13.17 3.86 15.89 4.95 10.42 0.85 6.63 6.4 5.97 8.74 0.9"/></svg></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.47 16.62"><polygon class="raiting" points="8.74 0.9 11.08 5.97 16.62 6.63 12.52 10.42 13.61 15.89 8.74 13.17 3.86 15.89 4.95 10.42 0.85 6.63 6.4 5.97 8.74 0.9"/></svg></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.47 16.62"><polygon class="raiting" points="8.74 0.9 11.08 5.97 16.62 6.63 12.52 10.42 13.61 15.89 8.74 13.17 3.86 15.89 4.95 10.42 0.85 6.63 6.4 5.97 8.74 0.9"/></svg></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.47 16.62"><polygon class="raiting" points="8.74 0.9 11.08 5.97 16.62 6.63 12.52 10.42 13.61 15.89 8.74 13.17 3.86 15.89 4.95 10.42 0.85 6.63 6.4 5.97 8.74 0.9"/></svg></label>
                        </div>
                        <span class="rating_count">({{good.count_rate}})</span>
                    </div>
                </div>
                <div class="tovar_hidden_box">
                    <div class="tovar_hidden_box_buttons">
                        <div class="tovar_hidden_box_button share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><circle cx="15.5" cy="15.5" r="15"/><circle cx="19.71" cy="8.35" r="2.39"/><circle cx="19.71" cy="22.65" r="2.39"/><circle cx="7.69" cy="15.5" r="2.39"/><line x1="17.65" y1="9.57" x2="9.75" y2="14.28"/><line x1="9.75" y1="16.72" x2="17.65" y2="21.43"/></svg>
                            <div class="tovar_hidden_box_content">
                                <ul class="social">
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><title>Вконтакте</title><circle class="border" cx="15.5" cy="15.5" r="15"/><path class="body" d="M19.1,15.21l.22.11a2.86,2.86,0,0,1,1.86,3.26,3.1,3.1,0,0,1-2.67,2.7,13.25,13.25,0,0,1-1.86.19c-2.13,0-4.25,0-6.44,0V9.53h2.27c1.65,0,3.29,0,4.94,0,2.31.08,3.77,1.91,3,3.84A8.06,8.06,0,0,1,19.1,15.21Zm-5.18,3.66c.91,0,1.73.05,2.54,0a1.06,1.06,0,0,0,1-1.13,1,1,0,0,0-1-1.15c-.85-.07-1.72,0-2.58,0Zm0-4.71c.72,0,1.42,0,2.11,0a1,1,0,0,0,1-1.06A1,1,0,0,0,16.05,12c-.69-.05-1.39,0-2.13,0Z"/></svg>Вконтакте</a></li>
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><title>Одноклассники</title><circle class="border" cx="15.5" cy="15.5" r="15"/><path class="body" d="M20.12,16.71v.75a2,2,0,0,1-1.07.95l-1.79.75.26.29,1.92,1.93a1.19,1.19,0,0,1,.06,1.69,3.56,3.56,0,0,1-.65.43h-.5a11.28,11.28,0,0,1-.94-.73c-.64-.61-1.26-1.25-1.94-1.93-.48.5-.91,1-1.39,1.43s-1,.82-1.44,1.23h-.5c-1.19-.56-1.33-1.4-.38-2.35l1.74-1.75c.08-.08.15-.18.19-.22-.74-.34-1.47-.66-2.17-1a1.11,1.11,0,0,1-.64-.92,1.16,1.16,0,0,1,.54-1.19,1.24,1.24,0,0,1,1.38,0,5.08,5.08,0,0,0,5.22.09C19,15.67,19.52,15.78,20.12,16.71Z"/><path class="body" d="M14.92,7.5H16.1a1.74,1.74,0,0,0,.23.08,4.13,4.13,0,1,1-4.51,5.92,4.18,4.18,0,0,1,.68-4.7A4.75,4.75,0,0,1,14.92,7.5Zm-1.1,4.15a1.68,1.68,0,1,0,3.36,0,1.68,1.68,0,1,0-3.36,0Z"/></svg>Одноклассники</a></li>
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><title>FaceBook</title><circle class="border" cx="15.5" cy="15.5" r="15"/><path class="body" d="M13.57,12.37c0-.54,0-1,0-1.55A3.28,3.28,0,0,1,16.83,7.5h2.11l.79,0v2.75H18.34a1.24,1.24,0,0,0-1.15,1.1c0,.25,0,.51,0,.76s.07.21.22.21h2.33v2.75H17.24a26.83,26.83,0,0,0-.05,2.78c0,.93,0,1.87,0,2.8v2.79H13.81c-.2,0-.24-.06-.24-.25q0-3.91,0-7.81v-.31H11.49c-.18,0-.22-.06-.22-.23,0-.77,0-1.53,0-2.3,0-.19.07-.23.24-.23h2.06Z"/></svg>Facebook</a></li>
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><title>Twitter</title><circle class="border" cx="15.5" cy="15.5" r="15"/><path class="body" d="M18.74,9.5h.52l.12,0a3.26,3.26,0,0,1,2,1,.1.1,0,0,0,.11,0,6.61,6.61,0,0,0,1.94-.74l.08,0a3.34,3.34,0,0,1-1.43,1.81,6.47,6.47,0,0,0,1.36-.32l.5-.19h0l0,0a6.64,6.64,0,0,1-1.55,1.6.11.11,0,0,0-.05.11A9,9,0,0,1,22,15.36,9.52,9.52,0,0,1,19.34,20a8.86,8.86,0,0,1-5.67,2.44l-.32,0h-.8c-.38,0-.76-.06-1.14-.12a9.13,9.13,0,0,1-3.28-1.22L8,21a6.94,6.94,0,0,0,2.55-.22,6.56,6.56,0,0,0,2.28-1.15,3.27,3.27,0,0,1-3-2.28,3.18,3.18,0,0,0,1.43-.05,3.27,3.27,0,0,1-2.58-3.25,3.14,3.14,0,0,0,1.43.39,3.29,3.29,0,0,1-1.34-2A3.24,3.24,0,0,1,9,10.1a9.38,9.38,0,0,0,6.76,3.43s0-.06,0-.08a3.32,3.32,0,0,1,0-1.2,3.28,3.28,0,0,1,2.64-2.7Z"/></svg>Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="tovar_hidden_box_button fav">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><circle cx="15.5" cy="15.5" r="15"/><polygon points="15.5 6.91 18.1 12.17 23.9 13.01 19.7 17.11 20.69 22.89 15.5 20.16 10.31 22.89 11.3 17.11 7.1 13.01 12.9 12.17 15.5 6.91"/></svg>
                            <div class="tovar_hidden_box_content">
                                <div>
                                    <a href="#" class="add_fav">Добавить в избранное</a>
                                </div>
                            </div>
                        </div>
                        <div class="tovar_hidden_box_button add">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><circle cx="15.5" cy="15.5" r="15"/><line x1="15.5" y1="6.5" x2="15.5" y2="24.5"/><line x1="6.5" y1="15.5" x2="24.5" y2="15.5"/></svg>
                            <div class="tovar_hidden_box_content scroll">
                                <ul>
                                    <li>По умолчанию</li>
                                    <li class="added">Список</li>
                                    <li>Самое необходимое</li>
                                    <li>Список подарков</li>
                                    <li>Крупные покупки</li>
                                    <li>Список</li>
                                    <li>Список</li>
                                    <li>Список</li>
                                    <li>Список</li>
                                    <li>Список</li>
                                </ul>

                            </div>
                        </div>
                        <div class="tovar_hidden_box_button information">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31"><circle cx="15" cy="8" r="1.5"/><rect x="14.5" y="13" width="1" height="10"/><circle cx="15" cy="15" r="14.5"/></svg>
                            <div class="tovar_hidden_box_content">
                                <div><p>Дополнительная информация</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sale"></div>
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
                        "image": "/img/content/tovar1.png", // Ссылка на файл
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
                        "image": "/img/content/tovar1.png", // Ссылка на файл
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