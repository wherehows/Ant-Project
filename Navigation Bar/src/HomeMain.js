export default function HomeMain({$target}) {
  const $homeMain = document.createElement('div');
  $target.appendChild($homeMain);

  this.render = () => {
    $homeMain.innerHTML = `
      <h1>안녕하세요 음식 추천기입니다</h1>
    `

  }

  this.render();
}