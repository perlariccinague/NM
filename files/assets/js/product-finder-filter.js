
//console.log(allProducts);

const filterProduct = document.querySelectorAll('.product');

//console.log(filterProduct);

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
const decor = document.querySelector('#decor');
const productList = document.querySelector('#product-finder-article');


const dosage = document.querySelector('#dosage');
//console.log(productList);


productList.style.display = 'none';

function filter () {
    if(bio.classList.contains('li-checked') ) {
        allProducts.forEach(product => {
            if(product.bio) {
               document.getElementById(product.id).style.display = '';
                productList.style.display = '';
               console.log(product.id)
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        })
    }
   if(decor.classList.contains('li-checked') ) {
        allProducts.forEach(product => {
            if(product.decor) {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
                console.log(product.id)
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        })
    }

}

document.querySelector('#dosierung').addEventListener('input', inputValue);

document.querySelector('#dk').addEventListener('input', inputValue);

function inputValue() {
    const input = document.querySelector('#dosierung');
    const value = input.value;
    const dosage = document.querySelector('#dosage');
    if(dosage.classList.contains('li-checked') ) {
        allProducts.forEach(product => {
            if((product.dosageFrom <= value) && product.dosageTo >= value ){
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        })
    }
}







