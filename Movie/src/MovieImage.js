export default function MovieImage({$target, initialState}) {
  const $imgContainer = document.createElement('div');
  $imgContainer.classList.add('img-container');
  $target.appendChild($imgContainer);

  this.state = initialState;
  
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    $imgContainer.innerHTML = `
    ${this.state.length === 0 ? console.log('url이 없음') : `<img src=${this.state}>`}
    `
  }

  this.render();
}