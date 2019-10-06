const toggleOpen = event => {
    event.currentTarget.classList.toggle('open');
};

const toggleActive = event => {
    if(event.propertyName.includes('flex')) {
        event.currentTarget.classList.toggle('open-active');
    }
};

(function(){
    const panels = document.querySelectorAll(".panel");
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}());