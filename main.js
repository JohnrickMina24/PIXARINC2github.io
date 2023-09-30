const header = document.querySelector('.header')
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watche', '');
header.before(scrollWatcher);

const navObserver = new IntersectionObserver(() => {
    header.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher)