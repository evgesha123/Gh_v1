
// scroll arrow button script
// slowly going/slide to # on page

$(function() {
  $('a[href=#about], a[href=#services], a[href=#reviews], a[href=#contacts]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-200}, 700, 'linear');
  });
});

$(function() {
  $('a[href=#myModal]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
  });
});



// -200 это высота до заголовка
// end scroll



// // time script
//
// var hours = document.getElementById("hours");
// var minutes = document.getElementById("min");
//
// function tick() {
//   var time = new Date();
//   var h = time.getHours();
//   var m = time.getMinutes();
//
//   hours.innerHTML = h.toString() + " : ";
//   minutes.innerHTML = m.toString();
// }
//
// setInterval(tick, 300); // что бы была точность, если допустим клиент зайдет на сайт, между сменой секунд
//
// // end time script



// ТОже самое что и выше
// // slowly going/slide to # on page

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
//     $('body,html').animate({scrollTop: top - 200}, 10000);
//   });
// });



// navbar scroll sticky

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





