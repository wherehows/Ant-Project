import HomePage from './HomePage.js';

export default function App({$target}) {

  const homePage = new HomePage({ $target });

  this.render = () => {
    const { pathname } = location;

    if(pathname === '/') {
      homePage.render();
    } else if(pathname ==='/search-food') {
      console.log('출력되나search-food');
    } else if(pathname === '/show-food') {
      console.log('출력되나?show-food');
    }
  }

  window.addEventListener('click', (e) => {
    if(e.target.className === 'link') {
      const href = e.target.getAttribute('href');
      console.log(href);
      history.pushState(null, null, href);
      e.preventDefault();
      this.render();
    }
  })

  this.render();
}