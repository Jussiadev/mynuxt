<template>
    <div class="select_list" id="select_city">
        <div class="form_select_wrap">
            <input type="text" class="form_select" id="search_select" placeholder="Название города...">
        </div>
        <div class="scroll">
            <div class="select_list_radio" v-for="city in cities"><input type="radio" :id="city.id" name="city_list" checked><label :for="city.id"><span>{{city.name}}</span> ({{city.region}})</label></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
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
                        "name": "New York",
                        "region": "Мурманская обл."
                    },
                    {
                        "id": 5,
                        "name": "London",
                        "region": "Мурманская обл."
                    }
                ]
            }
        }
    }
</script>