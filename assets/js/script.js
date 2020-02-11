// Recebendo os elementos da DOM
const btn = document.querySelector('#btn');
const form = document.querySelector('.container');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const ulSquares = document.querySelector('ul.squares');

// Animação
function headShakeAnimation(){
    form.classList.add('headShake');
    setTimeout(() => {  form.classList.remove('headShake'); }, 500);
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(() => { document.querySelector('body').style.overflow = 'auto'; }, 400)
}

// Aplicando Evento
btn.addEventListener('click', event =>{
    event.preventDefault();
    if((email.value === '') && (password.value === '')){
        headShakeAnimation();
        email.style.border = '1px solid red';
        password.style.border = '1px solid red';
    } else if(email.value === ''){
            headShakeAnimation();
            email.style.border = '1px solid red';
        } else if(password.value === '') {
            headShakeAnimation();
            password.style.border = '1px solid red';
    } else{
        form.classList.add('slideUp');
    }
});

// Background Squares
for( let i = 0; i < 40; i++ ){
    const li = document.createElement('li');
    const size = Math.floor(randomNumber(10, 120));
    const position = randomNumber(1, 99);
    const delay = randomNumber(5, 0.1);
    const duration = randomNumber(6, 3);

    function randomNumber(min, max){ return Math.random() * ( max - min ) + min; }

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random}, ${Math.random}, ${Math.random}, ${Math.random})`;

    ulSquares.appendChild(li);
}