const fadeOut = (target, time) => {
    target.style.transition = 'opacity ' + time;
    target.style.opacity = '0';
    target.style.display = 'none';
   /* setTimeout(() => {
        target.style.display = 'none';
        target.style.opacity = '0';
    }, time);*/
}


const fadeOutAndIn = (target, time) => {
    target.style.transition = 'opacity '+ time;
    target.style.opacity = '0';
    setTimeout(() => {
        target.style.opacity = '1';
        target.style.display = '';
    }, time);
}


const fadeIn = (target, time) => {
    target.style.transition = 'opacity ' + time;
    target.style.opacity = '0';
    setTimeout(() => {
        target.style.opacity = '1';
        target.style.display = '';


    })
}

const fadeOutAll = (target, time) => {
    target.style.transition = 'opacity ' + time;
    target.style.opacity = '0';
    setTimeout(() => {
       target.style.opacity = '0';
   })

}