
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
const smell = document.querySelector('#smell');
const frische = document.querySelector('#frische');
const volume = document.querySelector('#volume');
const hellBrot = document.querySelector('#hellBrot');
const spezialBrot = document.querySelector('#spezialBrot');
const wheatMixBread = document.querySelector('#wheatMixBread');
const mixBread = document.querySelector('#mixBread');
const grainBread = document.querySelector('#grainBread');
const productList = document.querySelector('#product-finder-article');


const dosage = document.querySelector('#dosage');
//console.log(productList);


productList.style.display = 'none';

function filter () {
    if(bio.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.bio) {
               document.getElementById(product.id).style.display = '';
                productList.style.display = '';
               console.log(product.id)
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }
   if(decor.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.decor) {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
                console.log(product.id)
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(smell.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.smell === 'geeignet' || product.smell === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(frische.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.frische === 'geeignet' || product.frische === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(volume.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.volume === 'geeignet' || product.volume === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(hellBrot.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.light_bun === 'geeignet' || product.light_bun === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(spezialBrot.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.special_bun === 'geeignet' || product.special_bun === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(wheatMixBread.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.wheat_bread === 'geeignet' || product.wheat_bread === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(mixBread.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.rye_bread === 'geeignet' || product.rye_bread === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }

    if(grainBread.classList.contains('li-checked')) {
        allProducts.forEach(product => {
            if(product.grain_bread === 'geeignet' || product.grain_bread === 'gut geeignet') {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
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
        });
    }

    const dkValue = document.querySelector('#dk_field');
    const dkInput = dkValue.value;
    const dk = document.querySelector('#dk');
    if(dk.classList.contains('li-checked') ) {
        allProducts.forEach(product => {
            if(product.dk === dkInput) {
                document.getElementById(product.id).style.display = '';
                productList.style.display = '';
            }
            else {
                document.getElementById(product.id).style.display = 'none';
            }
        });
    }
}

/*select.addEventListener('change', function handleChange(event) {
    console.log(event.target.value);

});*/








