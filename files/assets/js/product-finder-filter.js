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
const productList = document.querySelector('#product-finder-article');
const dosageFilter = document.querySelector('#dosage');
const dosageFilterInput = document.querySelector('#dosage-input');

//const dosage = document.querySelector('#dosage');

productList.style.display = 'none';

const allFilterElementsLeft = document.querySelectorAll('.filter-bottom-left li');
const cerealType = document.querySelectorAll('.cereal');

function filter() {
    if(document.querySelector('#filter .li-checked')) {
        productList.style.display = '';
        allProducts.forEach(product => {
            // Jedes Produkt einmal durchlaufen

            // Erstmal dieses Produkt sichtbar schalten
            document.getElementById(product.id).style.display = '';

            // Dann alle Flags setzen (eins für jede Spalte)
            product.failedLeftCheck = false;
            product.failedMiddleCheck = true;
            product.failedDKCheck = true;
            product.failedDosageCheck = true;

            // Linke Spalte filtern (sobald eine Checkbox gesetzt ist und dieses Produkt diese Eigenschaft nicht hat, Fail-Flag setzen)
            allFilterElementsLeft.forEach(element => {
                if(element.classList.contains('li-checked') && !product[element.id]) {
                    product.failedLeftCheck = true;
                }
            });

            // Mittlere Spalte filtern:

            // Erst schauen, ob irgendeine Checkbox aktiv ist und wenn ja, muss gefiltert werden:
            if(document.querySelector('.filter-bottom-middle .li-checked')) {
                cerealType.forEach(filterElement => {
                    if(filterElement.classList.contains('li-checked') && product.cerealType === filterElement.id) {
                        product.failedMiddleCheck = false;
                    }
                });
            } else {
                // Falls keine Checkbox aktiv ist, sollen alle angezeigt werden, also diesem Produkt automatisch die Flag für die mittlere Spalte geben
                product.failedMiddleCheck = false;
            }

            if(dosageFilter.classList.contains('li-checked') ) {
                if(product.dosageFrom <= parseFloat(dosageFilterInput.value) && parseFloat(dosageFilterInput.value) <= product.dosageTo ){
                    product.failedDosageCheck = false;
                }
            } else {
                product.failedDosageCheck = false;
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

                    }
                });
            }

            // Am Ende schauen, ob eins der Flags gesetzt ist, und wenn ja, dann dieses Produkt ausblenden
            if(product.failedLeftCheck || product.failedMiddleCheck || product.failedDosageCheck) {
                document.getElementById(product.id).style.display = 'none';
            }
        })
    } else {
        productList.style.display = 'none';
    }
}


btn.addEventListener("click", filter);
document.querySelector('#dosage-input').addEventListener('input', filter);
document.querySelector('#dk').addEventListener('input', filter);
