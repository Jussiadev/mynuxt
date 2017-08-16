module.exports = {
        head: {
            meta: [
                {charset: 'utf-8'},
                {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}
            ],
            css: [
                '~/node_modules/hover.css/css/hover-min.css',
                '~/node_modules/bulma/css/bulma.css',
                "~/HTML_design/libs/fancybox/jquery.fancybox.css",
                "~/HTML_design/libs/owl-carousel/assets/owl.carousel.css",
                "~/HTML_design/style.css",
                "~/assets/css/style.css"
            ],
            build: {
                extractCSS: true
            }

        }
};
