const ball = document.getElementById('ball');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

let currentPage = 1;

ball.addEventListener('click', () => {
  switch (currentPage) {
    case 1:
      page1.style.display = 'none';
      page2.style.display = 'flex';
      currentPage = 2;
      break;
    case 2:
      page2.style.display = 'none';
      page3.style.display = 'flex';
      currentPage = 3;
      break;
    case 3:
      page3.style.display = 'none';
      page1.style.display = 'flex';
      currentPage = 1;
      break;
  }
});

envelope.addEventListener('mouseenter', () => {
  letter.style.display = 'block';
});

envelope.addEventListener('mouseleave', () => {
  letter.style.display = 'none';
});
