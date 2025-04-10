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