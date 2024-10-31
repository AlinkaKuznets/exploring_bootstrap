window.addEventListener('scroll', function () {
    document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 132);
})

const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('cart-open').addEventListener('click', (e) =>{
    e.preventDefault();
    offcanvasCart.toggle()
});

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        offcanvasCart.hide();
        let href = item.href.split('#').pop();
        document.getElementById(href).scrollIntoView();
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').click(() => {
        $('html,body').animate({ scrollTop: 0 }, 300);
        return false;
    });

    $(".owl-carousel-full").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            730: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});