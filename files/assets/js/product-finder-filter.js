const filterProduct = document.querySelectorAll('.product');
const allUlRight = document.querySelectorAll('#filter ul li');
allUlRight.forEach(item => {
    item.addEventListener('click', function(e) {
        item.checked = !item.checked;
        if(item.checked) {
            item.classList.add('li-checked');
        } else if(e.target.type !== 'number' ){
            item.classList.remove('li-checked');
        }
    })
});

const btn = document.querySelector(".submit");
const productList = document.querySelector('#product-finder-article');
const dosageFilter = document.querySelector('#dosage');
const dosageFilterInput = document.querySelector('#dosage-input');
const dkFilter = document.querySelector('#dk');
const dkFilterInput = document.querySelector('#dk_field');
let countNotification = 0;

const popUp = document.createElement("div");
popUp.classList.add('notification')
popUp.innerHTML = "Bitte tragen Sie hier eine Zahl ein.";

//productList.style.display = 'none';
productList.style.opacity = '0';
setTimeout(function() {
    productList.style.display = 'none'

}, 100)

const allFilterElementsLeft = document.querySelectorAll('.filter-bottom-left li');
const cerealType = document.querySelectorAll('.cereal');
const scroll = document.querySelector('.product-finder-filter-article').getBoundingClientRect().top + window.scrollY;

function filter(e) {
  window.scrollTo({
        behavior: 'smooth',
        top: scroll,
    });
    if(dosageFilter.classList.contains('li-checked') && dosageFilterInput.value === "" ) {
        dosageFilter.appendChild(popUp);
        //document.querySelector('.notification').style.opacity = '1'
        setTimeout(function() {
            document.querySelector('.notification').style.opacity = '1';
            // Increment The Notification counter
            //countNotification ++;
            //console.log(countNotification);
        }, 100)
        setTimeout(function() {
            document.querySelector('.notification').style.opacity = '0';
        }, 6000);
    } else if (dkFilter.classList.contains('li-checked') && dkFilterInput.value === "" ){
        dkFilter.appendChild(popUp);
       // document.querySelector('.notification').style.opacity = '1'
        setTimeout(function() {
            document.querySelector('.notification').style.opacity = '1';
        }, 100)
        setTimeout(function() {
            document.querySelector('.notification').style.opacity = '0';
        }, 6000);
    }
     else if (document.querySelector('.notification')) {
        document.querySelector('.notification').style.opacity = '0'
    }

    if(document.querySelector('#filter .li-checked')) {
       // productList.style.display = '';
        productList.style.opacity = '1';
        console.log(productList);
        setTimeout(function() {
            productList.style.display = ''
        }, 100);
        allProducts.forEach(product => {
            // Jedes Produkt einmal durchlaufen

            // Erstmal dieses Produkt sichtbar schalten
           // document.getElementById(product.id).style.display = '';
            document.getElementById(product.id).style.opacity = '1';
            setTimeout(function() {
                document.getElementById(product.id).style.display = '';
            }, 250);


            // Dann alle Flags setzen (eins für jede Spalte)
            product.failedLeftCheck = false;
            product.failedMiddleCheck = true;
            product.failedDKCheck = true;
            product.failedDosageCheck = true;

            // Linke Spalte filtern (sobald eine Checkbox gesetzt ist und dieses Produkt diese Eigenschaft nicht hat, Fail-Flag setzen)
            allFilterElementsLeft.forEach(element => {
                if(element.classList.contains('li-checked') && !product[element.id])  {
                    product.failedLeftCheck = true;
                }
            });

            // Mittlere Spalte filtern:

            // Erst schauen, ob irgendeine Checkbox aktiv ist und wenn ja, muss gefiltert werden:
            if(document.querySelector('.filter-bottom-middle .li-checked')) {
                cerealType.forEach(filterElement => {
                    if(filterElement.classList.contains('li-checked') && product.cerealType === filterElement.id ) {
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

            if(dkFilter.classList.contains('li-checked') ) {
                if(product.dk === parseInt(dkFilterInput.value)){
                    product.failedDKCheck = false;
                }
            } else {
                product.failedDKCheck = false;
            }

            // Am Ende schauen, ob eins der Flags gesetzt ist, und wenn ja, dann dieses Produkt ausblenden
            if(product.failedLeftCheck || product.failedMiddleCheck || product.failedDosageCheck || product.failedDKCheck) {
                //document.getElementById(product.id).style.display = 'none';
                document.getElementById(product.id).style.opacity = '0';
                setTimeout(function() {
                    document.getElementById(product.id).style.display = 'none';
                }, 250);
            } /*else if( product.failedLeftCheck || product.failedMiddleCheck || dosageFilterInput.value === "" ){
                console.log(product.id);
                document.getElementById(product.id).style.display = '';
            }*/
        })
    } else {
       // productList.style.display = 'none';
        productList.style.opacity = '0';
        setTimeout(function() {
            productList.style.display = 'none'

        }, 100);
    }
}

dkFilterInput.addEventListener('input', function (){
    dkFilter.classList.add('li-checked');
})


dosageFilter.addEventListener('input', function (){
    dosageFilter.classList.add('li-checked');
})

function activeDk() {
    dkFilter.classList.add('li-checked');
}

function activeDosage() {
    dosageFilter.classList.add('li-checked')
}

const resetItem = document.querySelector('.reset');
resetItem.addEventListener('click', filterReset);

function filterReset() {
    const allFilter = document.querySelectorAll('#filter li');
    allFilter.forEach(element => {
        element.classList.remove('li-checked');
    })
    dkFilterInput.value ='';
    dosageFilterInput.value ='';
    productList.style.display ='none';
}


btn.addEventListener("click", filter);
document.querySelector('#dosage-input').addEventListener('input', filter);
document.querySelector('#dk_field').addEventListener('input', filter);
