const button = document.querySelector(".btn");
const formEl = document.querySelector(".form");

const distanceBetween = (p1x, p1y, p2x, p2y) => {
  const dx = p1x - p2x;
  const dy = p1y - p2y;
  return Math.sqrt(dx * dx + dy * dy);
};

let changedtoPlease = false;
let changedToYes = false;


document.addEventListener('mousemove', event => {
  const radius = Math.max(button.offsetWidth * 0.75, button.offsetHeight * 0.75, 100);

  const bx = button.parentNode.offsetLeft + button.offsetLeft + button.offsetWidth / 2;
  const by = button.parentNode.offsetTop + button.offsetTop + button.offsetHeight / 2;

  const dist = distanceBetween(event.clientX, event.clientY, bx, by);
  const angle = Math.atan2(event.clientY - by, event.clientX - bx);

  const ox = -1 * Math.cos(angle) * Math.max((radius - dist), 0);
  const oy = -1 * Math.sin(angle) * Math.max((radius - dist), 0);

  const rx = oy / 2;
  const ry = -ox / 2;

  button.style.transition = `all 0.1s ease`;
  button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  button.style.boxShadow = `0px ${Math.abs(oy)}px ${Math.abs(oy) / radius * 40}px rgba(0,0,0,0.15)`;


  // if (!formEl.checkValidity()) {

  //   } else {
  //     button.style.transform =`translate(0px, 0px) rotateX(0deg) rotateY(0deg);`
  //     return;
  //   }
});

//on hover on button with class btn change gif
button.addEventListener('mouseover', event => {
  if (changedtoPlease === false && changedToYes === false) {
    //document.getElementById("gif").src = please;
    document.getElementById('nom').style.display = 'none';
    document.getElementById('no').style.display = 'block';
    changedtoPlease = true;
    console.log('triggered');
  }
});

const buttonYes = document.querySelector("#yes-btn");

buttonYes.addEventListener('click', event => {
  changedToYes = true;
  console.log('yes');
  document.getElementById('yes').style.display = 'block';
  document.getElementById('no').style.display = 'none';
  document.getElementById('nom').style.display = 'none';
});


const nocheat = () => button.textContent = 'No cheating 🙅‍♂️';
const notouch = () => button.textContent = 'This thing doesn\'t work with touch 😢';

//button.addEventListener( 'click', event => button.textContent = 'You win 🥳' );
//button.addEventListener( 'keydown', event => { event.preventDefault(); nocheat(); } );
//button.click = nocheat;

if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) notouch();
window.addEventListener('touchstart', notouch);