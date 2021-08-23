import HomeMain from './HomeMain.js';
import Nav from './Nav.js';

export default function HomePage({$target}) {
  const $homePage = document.createElement('div');

  new Nav({ $target });
  new HomeMain({ $target });

  this.render = () => {
    $target.appendChild($homePage);
  }
}