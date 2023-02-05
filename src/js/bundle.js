/**
 * ! IMPORT 
 */

let buttons = document.querySelectorAll('.btn') 
let sign;

buttons.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation()
        sign = item.dataset.sign
    })
})




