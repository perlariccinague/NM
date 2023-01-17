const fadeIn = (target, time) => {
    target.style.transition = 'opacity ' + time + 'ms';
    target.style.opacity = '1';
    target.style.display = '';
}

const fadeOut = (target, time) => {
    target.style.transition = 'opacity ' + time + 'ms';
    target.style.opacity = '0';
    setTimeout(() => {
        target.style.display = 'none';
    }, time);
}

const fadeOutAndIn = (target, time) => {
    target.style.transition = 'opacity '+ time + 'ms';
    target.style.opacity = '0';
    setTimeout(() => {
        target.style.opacity = '1';
        target.style.display = '';
    }, time);
}
