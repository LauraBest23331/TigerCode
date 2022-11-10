$(document).ready(function () {


  $('#logout').click(()=>{
    localStorage.removeItem('loginTime')
    localStorage.removeItem('loginUser')
    $(location).attr('href', './index.html')


  })
$('.begin-btn').click(function(){
  // window.location.href = './rec.html'
  $(location).attr('href', './study.html')
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