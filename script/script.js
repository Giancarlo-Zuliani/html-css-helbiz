
// CAROUSEL

const slides = document.querySelector('#phonecarousel');

const img = ["url('resources/bike2.jpg')" , "url('resources/bike.jpg')" , "url('resources/palace.jpg')"]

var index = 0


document.querySelector('#carouselmore').addEventListener('click',function(){
  if(index == 3){
    index = 0
  }
  slides.style.backgroundImage = img[index]
  index++
})

document.querySelector('#carouselless').addEventListener('click',function(){
  if(index == 0){
    index=3
  }
  slides.style.backgroundImage = img[index-1]
  index--
})


//hamburger menu

const ham = document.querySelector('#smallnav img')
const menu = document.querySelector('.menu')


ham.addEventListener('click' , function(){
  menu.classList.toggle('show');
})
