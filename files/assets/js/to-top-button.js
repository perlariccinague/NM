 /*let toTopButton = document.querySelector('.to-top-button');
 console.log(toTopButton);

 window.onscroll = function() {
  scroll()
 };

 const scroll = () => {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
   toTopButton.style.display = "block";
  } else {
   toTopButton.style.display = "none";
  }
 }

 toTopButton.addEventListener('click', () => {
  document.querySelector('body,html').getBoundingClientRect().top;
  window.scrollTo({
   behavior: 'smooth',
   top: scroll,
  });
 })*/


 let calcScrollValue = () => {
     let toTopButton = document.getElementById("progress");
     let topValue = document.documentElement.scrollTop;
     console.log(topValue)
     let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     let scrollValue = Math.round((topValue * 100) / calcHeight);
     if (topValue > 150) {
         toTopButton.style.display = "";
     } else {
         toTopButton.style.display = "none";
     }
     toTopButton.addEventListener("click", () => {
         document.querySelector('body,html').getBoundingClientRect().top;
         window.scrollTo({
             behavior: 'smooth',
             top: scroll,
         });
     });
     toTopButton.style.background = `conic-gradient(#f69e0c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
 };
 window.onscroll = calcScrollValue;
 window.onload = calcScrollValue;


