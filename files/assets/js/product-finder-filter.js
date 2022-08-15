
console.log(allProducts);

const filterProduct = document.querySelector('.product');

console.log(filterProduct);

const allUlLeft = document.querySelectorAll('.filter-bottom-left ul li');
allUlLeft.forEach(item => {
    let text = item.innerHTML;
    item.addEventListener('click', function() {
        console.log(text);
        item.checked = !item.checked;
        if(item.checked) {
            item.classList.add('li-checked');
        } else {
            item.classList.remove('li-checked');
        }

    })
});

const allUlMiddle = document.querySelectorAll('.filter-bottom-middle ul li');
allUlMiddle.forEach(item => {
    item.addEventListener('click', function() {
       item.checked = !item.checked;
       if(item.checked) {
           item.classList.add('li-checked');
       } else {
           item.classList.remove('li-checked');
       }
    })
});

const allUlRight = document.querySelectorAll('.filter-bottom-right ul li');
allUlRight.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.add('li-checked');
    })
});



