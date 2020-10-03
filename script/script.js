
// CAROUSEL

const slides = document.querySelector('#phonecarousel');

const img = ["url('resources/bike2.jpg')" , "url('resources/bike.jpg')" , "url('resources/palace.jpg')"]

var index = 1

document.querySelector('#carouselmore').addEventListener('click',function(){
  slides.style.backgroundImage = img[index]
  index++
  if(index == 3){
    index = 0
  }
})

document.querySelector('#carouselless').addEventListener('click',function(){
  (index == 0) ? index = (img.lenght + 1) : index=index
  slides.style.backgroundImage = img[index-1]
  index--
})
