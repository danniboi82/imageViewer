//sub-image onClick should hide() the main and show the sub-image
$('.sub-image-1').on('click', ()=>{
    alert("You are off to a good start!!")
    $('.main-image').empty();
    $('.main-image').html(`<img src="https://www.hautelookcdn.com/resizer/434x650/products/A01919/large/8260566.jpg" alt=""/>`)
})

$('.sub-image-2').on('click', ()=>{
    $('.main-image').empty();
    $('.main-image').html(`<img src="https://www.hautelookcdn.com/resizer/434x650/products/A01919/large/8260565.jpg" alt=""/>`)
})

$('.sub-image-3').on('click', ()=>{
    $('.main-image').empty();
    $('.main-image').html(`<img src="https://www.hautelookcdn.com/resizer/434x650/products/A01919/large/8260567.jpg" alt=""/>`)
})