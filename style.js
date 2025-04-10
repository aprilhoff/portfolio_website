// define elements 
let input = document.querySelector('input');
let changeHtml = document.querySelector('html');
let changeRef = document.querySelector('a');

// console log elements
console.log(input)
console.log(changeHtml)
console.log(changeRef)

// add listener event
input.addEventListener('input', function() {
    styleBox();
});

function styleBox(){
    let inputValue = parseInt(input.value);
    
    if (inputValue === 2) {
        console.log('darkModeNow');
        changeHtml.classList.add("html_js");
        changeRef.classList.add("a_js");
    }else {
        changeHtml.classList.remove("html_js");
        changeRef.classList.remove("a_js");
    }

}

// let output = document.querySelector(".output");
// let one = document.querySelector(".one");

// console.log(one)
// console.log(output)

// one.addEventListener('mouseover', function(){
//     output.classList.toggle('output_1')
// })
// one.addEventListener('mouseout', function(){
//     output.classList.remove('output_1')
// })


const output = document.querySelector(".output");
const images = document.querySelectorAll(".img-hover");

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        const bg = img.getAttribute('data-bg');
        output.style.backgroundImage = `url('${bg}')`;
    });

    img.addEventListener('mouseout', () => {
        output.style.backgroundImage = ""; // or set to default background
    });
});