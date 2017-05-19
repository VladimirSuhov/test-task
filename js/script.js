$(document).ready(function () {
    $.ajax({
        url:'http://jsonplaceholder.typicode.com/albums/1/photos',
        dataType: 'json',
        success:function (res) {
            var container = $('.owl-carousel');
            for (var n in res) {
                $('.product-card__img__main img').attr('src',res[0].thumbnailUrl);
                $(".product-card__info__order__button a").attr("data-id", res[0].id );
                var item =
                    '<div class="product-card__img__thumb__wrapper item">' +
                    '<img src="'+res[n].thumbnailUrl+'" class="" id="'+n+'" data-id="'+ res[n].id +'" ' +
                    'data-title="'+ res[n].title +'" alt="'+ res[n].title +'">' +
                    '</div>';
                container.append(item);
            }

            $('.owl-carousel').owlCarousel({
                loop: false,
                margin: 10,
                nav: true,
                navText:false,
                responsive: {
                    0: {
                        items: 3
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });

            $(".product-card__img__thumb__wrapper img").on("click", function () {
                $(".product-card__img__main img").attr({"src":$(this).attr("src"),"alt":$(this).attr("alt")});
                $(".product-card__info__name").text($(this).attr("data-title"));
                $(".product-card__info__order__button a").attr("data-id", $(this).attr("data-id"));
                if($(this).attr('id') %2 == 0) {
                    $('#avalible').removeClass('hide');
                } else {
                    $('#avalible').addClass('hide');
                }
            });
        }
    })

});
