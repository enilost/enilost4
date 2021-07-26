$(function(){
    let cart = $('.header__cart__icon-link a');
    //burger
    $('.burger-icon').click(function(){burger()}) ;
    function burger(){
        if($('.burger-icon > span').hasClass('active-span') && $('.burger-div').hasClass('active-burger')){
                $('.burger-icon > span').removeClass('active-span');
                $('.burger-div').removeClass('active-burger');
                $('body').removeClass('overflow');
                $('.search').fadeOut();
                cart.css({'visibility': 'visible'});
                $('.header').delay(300).animate({'height': "130"}, function(){
                    $('.header').css({'height': 'auto'});
                });
                // return;
        }
        else{
            cart.css({'visibility': 'hidden'});
            $('.burger-icon > span').addClass('active-span');
            $('.filling-cart__wrapper').slideUp(1);
            $('.search').fadeIn();
            $('.header').animate({'height': '100%'}, 300, function(){
                $('.burger-div').addClass('active-burger');
                $('body').addClass('overflow');
            });
            // return;
        };
    };
    //footer accordion
    $('.title-footer').click(function (e){

        if($(window).width() >= 768){
            $('.bayan').slideDown();
            $('.fa-angle-down').addClass('rotate-arrow');
            return false;
        };

        if($(this).children('i').hasClass('rotate-arrow')){
            //console.log('повторюшка');
            $(this).closest('.up-footer__col').find('.bayan').slideUp();
            $(this).find('.fa-angle-down').removeClass('rotate-arrow');
            return false;
        }

        $('.bayan').slideUp(400);

        $('.fa-angle-down').removeClass('rotate-arrow');

        $(this).closest('.up-footer__col').find('.bayan').slideDown();
        $(this).find('.fa-angle-down').addClass('rotate-arrow');
    });
    
    

    //slick left slider
    $('.products__left-slider__slider-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        cssEase: 'linear',
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        waitForAnimate: false,
        nextArrow: '<button class="slick-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        responsive: [
            {
            breakpoint: 575,
            settings: 
                {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: false,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 375,
            settings: 
                {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: false,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            }
        ]
    });

    //slick right slider 1
    $('.products__right-col__new-products__slider-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        cssEase: 'linear',
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 4000,
        waitForAnimate: false,
        nextArrow: '<button class="slick-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        responsive: [
            {
            breakpoint: 991,
            settings: 
                {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 767,
            settings: 
                {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 575,
            settings: 
                {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 375,
            settings: 
                {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            }
        ]
    });

    //filter right slider 1
    $('.products__right-col__new-products li').click(function(e){
        e.preventDefault();
        let filter = $(this).data('filter');
        $(".products__right-col__new-products__slider-wrapper").slick('slickUnfilter');
        
        if(filter == 'Clothing'){
        $(".products__right-col__new-products__slider-wrapper").slick('slickFilter','.Clothing');
        }
        else if(filter == 'Electronics'){
        $(".products__right-col__new-products__slider-wrapper").slick('slickFilter','.Electronics');
        }
        else if(filter == 'Shoes'){
        $(".products__right-col__new-products__slider-wrapper").slick('slickFilter','.Shoes');
        }
        else if(filter == 'All'){
        $(".products__right-col__new-products__slider-wrapper").slick('slickUnfilter');
        }
    });

    //slick right slider 2
    $('.products__right-col__latest-products__slider-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        cssEase: 'linear',
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 5000,
        waitForAnimate: false,
        nextArrow: '<button class="slick-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        responsive: [
            {
            breakpoint: 991,
            settings: 
                {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 767,
            settings: 
                {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 575,
            settings: 
                {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 375,
            settings: 
                {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            }
        ]
    });

    //filter right slider 2
    $('.products__right-col__latest-products li').click(function(e){
 
        e.preventDefault();
        let filter = $(this).data('filter');
        $(".products__right-col__latest-products__slider-wrapper").slick('slickUnfilter');
        
        if(filter == 'Clothing'){
        $(".products__right-col__latest-products__slider-wrapper").slick('slickFilter','.Clothing');
        }
        else if(filter == 'Electronics'){
        $(".products__right-col__latest-products__slider-wrapper").slick('slickFilter','.Electronics');
        }
        else if(filter == 'Shoes'){
        $(".products__right-col__latest-products__slider-wrapper").slick('slickFilter','.Shoes');
        }
        else if(filter == 'All'){
        $(".products__right-col__latest-products__slider-wrapper").slick('slickUnfilter');
        }
    });

    //slick right slider 3
    $('.products__right-col__featured-products__slider-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        cssEase: 'linear',
        pauseOnHover: true,
        rows: 2,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 6000,
        waitForAnimate: false,
        nextArrow: '<button class="slick-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        responsive: [
            {
            breakpoint: 991,
            settings: 
                {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 767,
            settings: 
                {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 575,
            settings: 
                {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 494,
            settings: 
                {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                cssEase: 'linear',
                pauseOnHover: true,
                rows: 3,
                }
            }
        ]
    });

//filter right slider 3
// var $slider = $( '.products__right-col__featured-products__slider-wrapper' );
// var $slider_clone = $slider.clone( true, true ); 
// $( '.products__right-col__featured-products__slider-title__inner li').on( 'click', function(e){
//     e.preventDefault();
//     var filter_name = $( this ).text();
//     console.log($( this ).text());
//     // Create a new clone for the slider items
//     var $new_slider = $slider_clone.clone( true, true );

//     // Clear current slider
//     $slider.slick( 'unslick' ); // Remove slick
//     $slider.empty(); // Remove elements

//     // Show only filtered items
//     if( filter_name == "All" ) {
//         $slider.append( $new_slider.find( '.products__right-col__featured-products__slides' ) );
//     } else {
//         $slider.append( $new_slider.find( '.products__right-col__featured-products__slides.' + filter_name ) );
//     }

//     // Slick slider init or call your function that does it like I do
//     $('.products__right-col__featured-products__slider-wrapper').slick({});
// });
        

    //slick footer partners
    $('.partners-logo__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        dots: false,
        speed: 5000,
        pauseOnHover: true,
        responsive: [
            {
            breakpoint: 575,
            settings: 
                {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 0,
                cssEase: 'linear',
                dots: false,
                speed: 5000,
                pauseOnHover: true,
                }
            },
            {
            breakpoint: 375,
            settings: 
                {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 0,
                cssEase: 'linear',
                dots: false,
                speed: 5000,
                pauseOnHover: true,
                centerMode: true,
                centerPadding: '40px',
                }
            }
        ]
    });
    
    // categories
    $('.caterogies__categories-list').children('a').click(function(e){

        if($(window).width() > 456){
            $('.banner-menu__flex__menu').slideDown();
            // $('.caterogies__categories-list').children('a').off('click');
        }else{
        e.preventDefault();
        $('.banner-menu__flex__menu').slideToggle();
        // return false;
        };
    });

    //anim buy cart 
    let total = $('.total span').text();
    let sum =  $('.price span').text();
    $('.anim_bye').click(function(e){
        e.preventDefault();
        let imgCard = $(this).closest('.slides').find('.cart-img').html();
        let price = $(this).closest('.slides').find('.true_price').html();
        let name = $(this).closest('.slides').find('.product-name').html();
        let cloneCard =$(this).closest('.slides').find('img').clone();
        cloneCard.css({
            'position': 'absolute',
            'z-index': '5555555',
            'left': $(this).closest('.slides').find('img').offset().left + 'px',
            'top': $(this).closest('.slides').find('img').offset().top + 'px',
            'width': $(this).closest('.slides').find('img').innerWidth() +'px',
            'height': $(this).closest('.slides').find('img').innerHeight() + 'px',
        }).appendTo('.products').animate({ //.products
            'left': $('.header__cart__icon-link').offset().left + 'px',
            'top': $('.header__cart__icon-link').offset().top + 'px',
            'width': 20 +'px',
            'height': 20 + 'px',
            'opacity': 0
        }, 700, function(){
            $(`<li class="filling-cart__ul__li">
                <div class="card-cart">
                    <div class="card-cart__img">
                        <a href="#" target="_blank">
                            ${imgCard}
                        </a>
                    </div>
                    <div class="card-cart__price-total">
                        <div class="card-cart__name">
                            ${name}
                        </div>
                        <div class="card-cart__price">
                            $ <span>${price}</span>
                        </div>
                        <div class="card-cart__delete">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </li>`).appendTo('.filling-cart__ul').slideDown();

            $(this).remove();
            // $(cloneCard).remove();

        });

        total ++;
        $('.total span').text(total);
        sum = +$(this).closest('.slides').find('.true_price').text() + +sum;
        sum = sum.toFixed(2);
        $('.price span').text(sum);
        $('.empty-cart').slideUp();
        $('.pay').slideDown();
    });
    
    //open cart
    // let cart = $('.header__cart__icon-link a');
    cart.click(function openCart(e){
        e.preventDefault();

        if ($('.filling-cart__ul__li').length <= 0) {
            $('.empty-cart').slideDown();
            $('.pay').slideUp();
        }
        else{
            $('.empty-cart').slideUp();
            $('.pay').slideDown();
        }
        if ( $(this).hasClass('active-cart') ) {
            $(this).removeClass('active-cart');
            $('.filling-cart__wrapper').slideUp();
        } else {
            $(this).addClass('active-cart');
            $('.filling-cart__wrapper').slideDown(400, function () {
                
            });
        }
    });
    $(document).mouseup(function (e){ // !$('.header__cart__icon-link i').is(e.target)
        var div = $(".filling-cart__wrapper"); 
        if (cart.hasClass('active-cart')){
            if (!cart.is(e.target) && div.has(e.target).length === 0  && !div.is(e.target) && cart.has(e.target).length === 0 && !$('.anim_bye').is(e.target)) { 
                if($('.burger-icon').is(e.target) || $('.burger-icon').has(e.target).length != 0){
                    div.slideUp(1); 
                    cart.removeClass('active-cart');
                }
                else{
                    div.slideUp(); 
                    cart.removeClass('active-cart');
                }
            }
        }
    });
 
    //delete card-cart
    $('.filling-cart__ul').on('click', '.card-cart__delete i', function(e) {
        e.preventDefault();
        total = total - 1;
        if (total <= 0) {
            total = 0;
            $('.empty-cart').slideDown();
            $('.pay').slideUp();
        }
        $('.total span').text(total);
        sum =  +sum - +$(this).closest('.card-cart').find('.card-cart__price span').text();
        sum = sum.toFixed(2);
        if (sum <= 0) {
            sum = 0;
            $('.empty-cart').slideDown();
            $('.pay').slideUp();
        }
        $('.price span').text(sum);
        $(this).closest('.filling-cart__ul__li').slideUp(300, function(){
            $(this).closest('.filling-cart__ul__li').remove();
        });
    });

    $(window).resize(function(){
        if($(window).width() > 575 && $('.search').css('display') != 'block'){
            $('.search').fadeIn();
            // console.log('1');
        }
        if($(window).width() > 575 && $('.cart-a').css('visibility') == 'hidden'){
            burger();
            $('.search').fadeIn();
            // console.log('2');
        }
        if($(window).width() <= 575 && !$('.burger-icon > span').hasClass('active-span') && $('.search').css('display') != 'none'){
            $('.search').fadeOut();
            // console.log('3');
        }
        if($(window).width() <= 575 && $('.burger-icon > span').hasClass('active-span') && $('.search').css('display') != 'block'){
            $('.search').fadeIn();
            // console.log('4');
        }
        if( $(window).width() >= 768 && ($('.col3 .bayan').css('display') == 'none' || $('.col2 .bayan').css('display') == 'none' || $('.up-footer__col4-flex__timetable .bayan').css('display') == 'none' || $('.up-footer__col4-flex__payment .bayan').css('display') == 'none')){
            
            $('.bayan').slideDown( function(){
                $('.bayan').css('display', 'block');
            });
            $('.fa-angle-down').addClass('rotate-arrow');
            
        }
        if($(window).width() < 768 && ($('.col3 .bayan').css('display') == 'block' && $('.col2 .bayan').css('display') == 'block' && $('.up-footer__col4-flex__timetable .bayan').css('display') == 'block' && $('.up-footer__col4-flex__payment .bayan').css('display') == 'block')){//&& !$('.fa-angle-down').hasClass('rotate-arrow')
            $('.bayan').slideUp();
            $('.fa-angle-down').removeClass('rotate-arrow');
        }
        if ($(window).width() <= 456){

            if ($(window).width() <= 456 && $('.banner-menu__flex__menu').css('display') == 'block'){
                return;
            }
        $('.banner-menu__flex__menu').slideUp();
        }
        if($(window).width() > 456){
            if ($('.banner-menu__flex__menu').css('display') == 'none'){
                $('.banner-menu__flex__menu').slideDown();
            }
        }
    });
});