export default function MovieOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement('select');
  $select.classList.add('option-container');
  $target.appendChild($select);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  $select.addEventListener('change', (e) => {
    const id = e.target.value;
    if(id) {
      onSelect(parseInt(id));
    }
  })

  this.render = () => {
    $select.innerHTML = `
    <option>영화를 고르세요</option>
    ${this.state.map((movie) => `<option value=${movie.id}>${movie.title}</option>`)}
    `
  }

  this.render();
}