$("#banner .banner-main").slick({
    arrows:false,
    vertical: true,
    autoplay:true,
    infinite:false
})


$("#deal .deal-main").slick({
    arrows:false,
    slidesToShow:3,
    autoplay: true,
    autoplaySpeed: 600
})


const cd = new Date().getFullYear() + 1
$('#countdown').countdown({
    year: cd
});
