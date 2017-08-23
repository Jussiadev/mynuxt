<template>
    <div>
        <form action="#">
            <div class="select_list_wrapper">
                <div class="select_list_current">
                    <span class="label">Искать </span>
                    <span class="select_list_current_item">все</span>
                </div>
                <div class="select_list">
                    <div class="select_list_radio"><input type="radio" id="by_all" name="search_list" checked><label for="by_all"><span>Все</span> </label></div>
                    <div class="select_list_radio"><input type="radio" id="by_brand" name="search_list"><label for="by_brand"><span>Бренды</span> </label></div>
                    <div class="select_list_radio"><input type="radio" id="by_shop" name="search_list"><label for="by_shop"><span>Магазины</span> </label></div>
                    <div class="select_list_radio"><input type="radio" id="by_tovar" name="search_list"><label for="by_tovar"><span>Товары</span> </label></div>
                    <div class="select_list_radio"><input type="radio" id="by_sostav" name="search_list"><label for="by_sostav"><span>Состав</span> </label></div>
                </div>
            </div>
            <div class="search_form"><input type="text" placeholder="Поиск"><span class="submit sanja"><input type="submit" value="Искать"></span></div>
        </form>
    </div>
</template>