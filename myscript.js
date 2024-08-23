type = "text/javascript" >
    $(document).ready(function () {
        $('.slider').slick({
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 500,
            arrows: false,

        });
    });
    $('.doitac-container').slick({
        
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        
        arrows: false,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 825,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    
$(document).ready(function () {
    //dropdown
    $('.dropdown-button').click(function () {
        $('.dropdown-content').toggleClass("active");
    });

    //header-small
    $(".header-narbar-icon").click(function () {
        $(".header-small").toggleClass("active");

    });
    $(".header-narbar-icon").click(function () {
        $(".screen-opacity").toggleClass("active");

    });
    $(".screen-opacity").click(function () {
        $(".header-small").toggleClass("active");
    });
    $(".screen-opacity").click(function () {
        $(".screen-opacity").toggleClass("active");
    });

    $(".header-small-close").click(function () {
        $(".header-small").toggleClass("active");
    });
    $(".header-small-close").click(function () {
        $(".screen-opacity").toggleClass("active");
    });
});

AOS.init({        // Khoảng cách tính bằng pixel từ phần tử đến đỉnh viewport để kích hoạt hiệu ứng
    delay: 0,             // Độ trễ tính bằng millisecond cho mỗi phần tử
    duration: 1000,        // Thời gian chạy hiệu ứng tính bằng millisecond
    easing: 'ease',       // Easing function (làm mềm chuyển động)
    once: false,          // Hiệu ứng có chạy lại khi cuộn lại hay không
    mirror: true,        // Hiệu ứng có chạy khi cuộn ngược lại hay không
});

$(window).on('scroll', function() {
    // Kiểm tra xem người dùng đã cuộn xuống bao nhiêu
    let scrollPosition = $(this).scrollTop();
    if (scrollPosition > 300) {
        console.log('Bạn đã cuộn xuống hơn 300px!');
        $(".gohead").toggleClass("active");
    }
});


