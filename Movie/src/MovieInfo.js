export default function MovieInfo({ $target, initialState }) {
    const $movieInfo = document.createElement('div');
    $target.appendChild($movieInfo);

    this.state = initialState;
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        const { title, rating, runtime, year, summary } = this.state;
        if (title) {
            $movieInfo.innerHTML = `
            <h1>${title}${year}</h1>
            <div>평점| ${rating}</div>
            <div>상영시간| ${runtime}</div>
            <div>줄거리| ${summary}</div>
             `;
        }
    };

    this.render();
}
