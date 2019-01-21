
// scroll arrow button script
// slowly going/slide to # on page

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
  });
});

// end scroll


// navbar scroll sticky
//
//   window.onscroll = function() {myFunction()};
//
//   var navbar = document.getElementById("navbar");
//   var sticky = navbar.offsetTop;
//
//   function myFunction() {
//   if (window.pageYOffset >= sticky) {
//   navbar.classList.add("sticky")
// } else {
//   navbar.classList.remove("sticky");
// }
// }






// // slowly going/slide to # on page
//
// $(document).ready(function(){
//   $("#menu").on("click","a", function (event) {
//     //отменяем стандартную обработку нажатия по ссылке
//     event.preventDefault();
//
//     //забираем идентификатор бока с атрибута href
//     var id  = $(this).attr('href'),
//
//       //узнаем высоту от начала страницы до блока на который ссылается якорь
//       top = $(id).offset().top;
//
//     //анимируем переход на расстояние - top за 1500 мс
//     $('body,html').animate({scrollTop: top}, 10000);
//   });
// });