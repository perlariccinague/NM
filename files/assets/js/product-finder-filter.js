
console.log(allProducts);

const filterProduct = document.querySelectorAll('.product');

console.log(filterProduct);

const allUlRight = document.querySelectorAll('#filter ul li');
allUlRight.forEach(item => {
    item.addEventListener('click', function() {
        item.checked = !item.checked;
        if(item.checked) {
            item.classList.add('li-checked');
        } else {
            item.classList.remove('li-checked');
        }
    })
});

const btn = document.querySelector(".submit");
btn.addEventListener("click", filter);
const bio = document.querySelector('#bio');

function filter () {
    if(bio.classList.contains('li-checked') ) {
        allProducts.forEach(product => {
            if(product.bio) {
               // allProducts.style.display = ''
                const filterProduct = document.('.product');
                filterProduct.forEach(text => {
                    console.log(text);
                    if(text.innerHTML === 'Bio'){
                        console.log('bla');
                    }
                });
            }
            else {
                //allProducts.style.display = 'none'
            }

        })

    }

}




