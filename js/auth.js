const loginFormHTML = `
<form id="loginForm" class="popup__form" action="index.php">
<label for="login-username" class="popup__label">
    <p class="popup__field-name">Username</p>
    <input class="popup__input" id="login-username" type="text" placeholder="Username">
</label>
<label for="login-pass" class="popup__label">
    <p class="popup__field-name">Password</p>
    <input class="popup__input" id="login-pass" type="password" placeholder="Password">
</label>
<div class="error-block"></div>
<div class="popup__checkbox">
    <input id="rem" type="checkbox">
    <label for="rem">
        <span></span>
    </label>
    <p class="popup__privacy">Remember me</p>
</div>
<button class="popup__button" type="submit">Log in</button>
</form>
`;



const loginBlock = document.querySelector('.login-form');
const loginPopupButton = document.querySelector('#loginBtn');

const dologin = function() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var usernameInput = document.getElementById('login-username');
        var passwordInput = document.getElementById('login-pass');
        var rememberMeCheckbox = document.getElementById('privacy');
        var errorBlock = document.querySelector('.error-block');

        // Получаем данные из локального хранилища
        var userData = localStorage.getItem('user');
        if (userData) {
            var user = JSON.parse(userData);

            if (
                user.username === usernameInput.value &&
                user.password === passwordInput.value
            ) {
                user.login = true;
                localStorage.setItem('user', JSON.stringify(user));

                window.location.href = 'index.html';
            } else {
                errorBlock.innerHTML = "Incorrect user name or password";
            }
        } else {
            errorBlock.innerHTML = "User not found";
        }
    });
}

loginPopupButton.addEventListener('click', function () {
    loginBlock.innerHTML = loginFormHTML;

    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var usernameInput = document.getElementById('login-username');
        var passwordInput = document.getElementById('login-pass');
        var rememberMeCheckbox = document.getElementById('privacy');
        var errorBlock = document.querySelector('.error-block');

        // Получаем данные из локального хранилища
        var userData = localStorage.getItem('user');
        if (userData) {
            var user = JSON.parse(userData);

            if (
                user.username === usernameInput.value &&
                user.password === passwordInput.value
            ) {
                user.login = true;
                localStorage.setItem('user', JSON.stringify(user));

                window.location.href = 'index.php';
            } else {
                errorBlock.innerHTML = "Incorrect user name or password";
            }
        } else {
            errorBlock.innerHTML = "User not found";
        }
    });

});

(function () {
    const accBtn = document.querySelector('.account__button');
    const accBlock = document.querySelector('.account__info');

    accBtn.addEventListener('click', function () {
        accBtn.classList.toggle('open-info');
        accBlock.classList.toggle('show-acc');
    })
})();

