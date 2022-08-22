const filterProduct = document.querySelectorAll('.product');
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
btn.addEventListener("click", filterNew);
const productList = document.querySelector('#product-finder-article');

//const dosage = document.querySelector('#dosage');

productList.style.display = 'none';

const allFilterElementsLeft = document.querySelectorAll('.filter-bottom-left li');
const cerealType = document.querySelectorAll('.cereal');

function filterNew() {
    productList.style.display = '';
        allProducts.forEach(product => {
            console.log('Product: ' + product.cerealType);
            document.getElementById(product.id).style.display = '';
            product.failedLeftCheck = false;
            allFilterElementsLeft.forEach(element => {
                if(element.classList.contains('li-checked') && !product[element.id]) {
                    product.failedLeftCheck = true;
                }
            });
            cerealType.forEach(filterElement => {
                if(filterElement.classList.contains('li-checked')) {
                    if(product.cerealType === filterElement.id) {
                        console.log('Showing');
                        product.passedMiddleCheck = true;
                    }
                }
            });
            if(product.failedLeftCheck && !product.passedMiddleCheck) {
                document.getElementById(product.id).style.display = 'none';
            }
        })



    /*cerealType.forEach(filterElement => {
        if(filterElement.classList.contains('li-checked')) {
            allProducts.forEach(product => {
                if(product.cerealType === filterElement.id && !product.failedLeftCheck) {
                    document.getElementById(product.id).style.display = '';
                    product.passedMiddleCheck = true;
                } else if(product.cerealType !== filterElement.id && !product.passedMiddleCheck) {
                    document.getElementById(product.id).style.display = 'none';
                }
            });
        }
    })*/
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



