<template>
    <div class="left_side">
        <h3>Категории товаров</h3>
        <ul class="category">
            <li class="active"><a href="#">Все</a></li>
            <li v-for="category in categories"><a href="#">{{category.title}}</a></li>
        </ul>
    </div>
</template>

<script>

    export default {

        data () {
            return {
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
                        "title": "Замороженные продукты"
                    }
                ]
            }
        }
    }
</script>