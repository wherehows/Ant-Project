const listToArray = (nodeList) => {
    const res = Array(nodeList.length);
    const len = res.length;
    for (let i = 0; i < len; i++) {
        res[i] = nodeList[i];
    }

    return res;
};

const calcFilterOptionButtonLen = (buttonArr) => {
    const arrExceptNextPrevBtn = buttonArr.slice(0, buttonArr.length - 2);
    let res = null;
    const len = arrExceptNextPrevBtn.length;

    for (let i = 0; i < len; i++) {
        const currBtn = arrExceptNextPrevBtn[i];
        res += parseInt(currBtn.offsetWidth) + parseInt(window.getComputedStyle(currBtn).marginRight);
    }

    return res;
};

const getAverageBtnWidth = (buttonArr) => {
    const arrExceptNextPrevBtn = buttonArr.slice(0, buttonArr.length - 2);
    let res = null;
    const len = arrExceptNextPrevBtn.length;
    for (let i = 0; i < len; i++) {
        const currBtn = arrExceptNextPrevBtn[i];
        res += parseInt(currBtn.offsetWidth) + parseInt(window.getComputedStyle(currBtn).marginRight);
    }

    return res / len;
};

const isScrollEnd = (tag) => {
    return tag.offsetWidth + tag.scrollLeft >= tag.scrollWidth;
};

const isScrollStart = (tag) => {
    return tag.scrollLeft === 0;
};

const $filterContainer = document.querySelector('.filters');
const filtersArr = document.querySelectorAll('.filter-option');
const $filterNextBtn = $filterContainer.querySelector('.next');
const $filterPrevBtn = $filterContainer.querySelector('.prev');

let filterContainerLen = $filterContainer.offsetWidth;
let filtersLen = calcFilterOptionButtonLen(listToArray(filtersArr));

// 처음 웹사이트에 접속하는 경우, 스크롤 버튼 표시 유무 결정
if (filterContainerLen < filtersLen) {
    $filterNextBtn.style.display = 'block';
}

// 창 크기를 조절하는 경우, 스크롤 버튼 표시 유무 결정
window.addEventListener('resize', () => {
    const filterContainerLen = $filterContainer.offsetWidth;
    const filtersLen = calcFilterOptionButtonLen(listToArray(filtersArr));

    if (filterContainerLen < filtersLen) {
        $filterNextBtn.style.display = 'block';
    } else {
        $filterNextBtn.style.display = 'none';
    }
});

// 스크롤 버튼을 누르는 경우
$filterNextBtn.addEventListener('click', () => {
    // 버튼을 두개씩 이동
    $filterContainer.scrollLeft += getAverageBtnWidth(listToArray(filtersArr)) * 2;
  });

$filterPrevBtn.addEventListener('click', () => {
    // 버튼을 두개씩 이동
    $filterContainer.scrollLeft -= getAverageBtnWidth(listToArray(filtersArr)) * 2;
});

// 스크롤바 처음과 끝 도달유무에 따라 스크롤 버튼 표시
$filterContainer.addEventListener('scroll', () => {
    // 끝에 도달하는 경우 nextBtn 제거
    if (isScrollEnd($filterContainer)) {
        $filterNextBtn.style.display = 'none';
        $filterPrevBtn.style.display = 'block';
        // 처음에 도달하는 경우 prevBtn 제거
    } else if (isScrollStart($filterContainer)) {
        $filterPrevBtn.style.display = 'none';
        $filterNextBtn.style.display = 'block';
    } else {
        // 끝도 아니고, 처음도 아닌 경우, 버튼 두개 모두 표시
        $filterNextBtn.style.display = 'block';
        $filterPrevBtn.style.display = 'block';
    }
});

// 드래그 스크롤 로직
let isDown = false;
let startX;
let scrollLeft;

$filterContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    $filterContainer.classList.add('active');
    startX = e.pageX - $filterContainer.offsetLeft;
    scrollLeft = $filterContainer.scrollLeft;
});

$filterContainer.addEventListener('mouseleave', () => {
    isDown = false;
    $filterContainer.classList.remove('active');
});

$filterContainer.addEventListener('mouseup', () => {
    isDown = false;
    $filterContainer.classList.remove('active');
});

$filterContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - $filterContainer.offsetLeft;
    $filterContainer.scrollLeft = scrollLeft - (x - startX);
});
