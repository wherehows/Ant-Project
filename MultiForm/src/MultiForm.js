const MultiForm = function ({ $target, initialState, onSubmit }) {
    const $form = document.createElement('form');

    const tagArr = initialState.tags;

    let isInit = false;

    this.render = () => {
        if (!isInit) {
            tagArr.map((tag) => {
                const $tag = document.createElement('div');
                $tag.className = 'category-container';
                $tag.classList.add(`${tag}`);

                $tag.innerHTML = `
            <label>${tag}</label>
            <input type="text" placeholder="${tag}">
            `;

                $form.appendChild($tag);
                $target.appendChild($form);
            });

            $form.innerHTML += `
                    <button>save</button>
                    `;

            $form.addEventListener('submit', (e) => {
                e.preventDefault();
                const categoryArr = $form.querySelectorAll('.category-container');

                const isEmpty = _.pipe(
                    L.map((element) => element.querySelector('input').value),
                    L.map((element) => element.length === 0),
                    L.filter((element) => element),
                    _.take(1),
                    _.head,
                );

                if (isEmpty(categoryArr)) {
                    alert('비어있는 칸이 있음');
                } else {
                    alert('비어있는 칸이 없음');
                }
            });
            isInit = true;
        }
    };

    this.render();
};

const isEmpty = (element) => element === 0;
