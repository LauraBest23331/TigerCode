$(document).ready(function () {

$('.begin-btn').click(function(){
  // window.location.href = './rec.html'
  $(location).attr('href', './study.html')
  console.log(123)
})

$('.navbar').children().eq(0).addClass('navbar-a-hover');
$('.navbar').children().click(function () {
  $('.navbar').children().removeClass('navbar-a-hover');
  console.log(this);
});
$('.navbar').children().mouseenter(function () {
  $('.navbar').children().removeClass('navbar-a-hover');
  $(this).addClass('navbar-a-hover');
});
$('.navbar').children().mouseleave(function () {
$('.navbar').children().removeClass('navbar-a-hover');
$('.navbar').children().eq(0).addClass('navbar-a-hover');
});
});