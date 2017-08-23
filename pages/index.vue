<template>
    <div>
        <nuxt-link to="/brands"><h1>Go to BRANDS</h1></nuxt-link>
            <div class="owl-news owl-carousel">
                <div class="new" v-for="item in news">
                    <img :src="item.image" alt="">
                    <div class="text">
                        <div class="h3"><a href="#">{{item.title}}</a></div>
                        <span class="date">{{item.updated_at}}</span>
                        <p>{{item.content}}</p>
                    </div>
                </div>
            </div>
            <button class="cbutton cbutton--effect-sanja">
            </button>

        <div class="wrap_content">
            <div class="content">
                <!--<LeftSide/>-->
                <!--<GoodsGrid/>-->
            </div>
        </div>
        <!--<GreyBrands/>-->
    </div>
</template>

<script>
    import LittleSearch from '~/components/littleSearch'
    import Tags from '~/components/tags'
    import LeftSide from '~/components/leftSide'
    import GoodsGrid from '~/components/goodsGrid'
    import GreyBrands from '~/components/greyBrands'
    export default {
        head () {
            return {
                title: 'Main',
                meta: [
                    {name: "description", content: "Описание"}
                ]
            }
        },
        layout: 'headerAndFooter',
//        components: {
//            GoodsGrid,
//            Tags,
//            LittleSearch,
//            LeftSide,
//            GreyBrands
//        },
        data () {
            return {
                news: [
                    {
                        "id": 1,
                        "title": "Заголовок новости",
                        "image": "img/sliders/brand9.png",
                        "content": "Попытка устроить Крыму туристическую блокаду захлебнулась в многотысячном потоке украинских граждан, которые, несмотря ни на какую пропаганду и долгие очереди, не изменили своего желания посетить Крым. Киевские власти испугались негодования своих же граждан и социального бунта на украинских пунктах пропуска",
                        "updated_at": "33 august 2016"
                    }
                ]
            }
        }
    }
</script>