const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const saveUsername = localStorage.getItem('USERNAME_KEY');


function onLoginBtnSubmit(event){
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    localStorage.setItem('USERNAME_KEY', username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener('submit', onLoginBtnSubmit);

if (saveUsername === null){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginBtnSubmit);
} else{
    paintGreetings(saveUsername);
}

