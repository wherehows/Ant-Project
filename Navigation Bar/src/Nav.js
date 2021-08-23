export default function Nav({ $target }) {
    const $nav = document.createElement('nav');
    $target.appendChild($nav);

    let isInit = false;

    this.render = () => {
        $nav.innerHTML = `
        <div class='logo'>The Nav</div>
        <ul class='nav-links'>
    <li><a class='link' href='/show-food'>음식 사진</a></li>
    <li><a class='link' href='/search-food'>음식 검색</a></li>
    <li><a href='#'>Work</a></li>
    <li><a href='#'>Projects</a></li>
    </ul>
    <div class='burger'>
        <div class='line1'></div>
        <div class='line2'></div>
        <div class='line3'></div>
    </div>
    `;
        if (!isInit) {
            const $navLinks = $nav.querySelector('.nav-links');
            const $navLinkList = $nav.querySelectorAll('li');
            const $burger = $nav.querySelector('.burger');
            $burger.addEventListener('click', () => {
                $navLinks.classList.toggle('nav-active');
                $navLinkList.forEach((link, index) => {
                    if (link.style.animation) link.style.animation = '';
                    else link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
                });

                $burger.classList.toggle('toggle');
            });

            isInit = !isInit;
        }
    };

    this.render();
}
