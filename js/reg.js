const headerButtonsBlock = document.querySelector('.header__buttons'); // Кнопки рег логин
const accountBlock = document.querySelector('.account'); // кнопка аккаунта
const regBlock = document.querySelector('.reg-form');
const regPopupButton = document.querySelector('#registrationBtn');
const accountContent = document.querySelector('.account__content');


const regFormHTML = `
        <form id="regForm" class="popup__form" action="#">
        <label for="reg-username" class="popup__label">
            <p class="popup__field-name">Username</p>
            <input class="popup__input" id="reg-username" type="text" placeholder="Username">
            <div class="popup__error-hint"></div>
        </label>
        <label for="reg-email" class="popup__label">
            <p class="popup__field-name">Email</p>
            <input class="popup__input" id="reg-email" type="text" placeholder="Email">
            <div class="popup__error-hint"></div>
        </label>
        <label for="reg-pass" class="popup__label">
            <p class="popup__field-name">Password</p>
            <input class="popup__input" id="reg-pass" type="password" placeholder="Password">
            <div class="popup__error-hint"></div>
        </label>
        <label for="reg-re-pas" class="popup__label">
            <p class="popup__field-name">Confirm password</p>
            <input class="popup__input" id="reg-re-pas" type="password" placeholder="Password">
            <div class="popup__error-hint"></div>
        </label>
        <div class="popup__checkbox">
            <input class="popup__checkbox-input" id="privacy" type="checkbox">
            <label class="popup__checkbox-label" for="privacy">
                <span></span>
            </label>
            <p class="popup__privacy">I agree with <a class="popup-link" href="#pr">privacy policy</a></p>
        </div>
        <button id="reg-submit" class="popup__button" type="submit">Registration</button>
        </form>
`;

const validationFields = function() {
    const userName = document.querySelector('#reg-username');
    const userEmail = document.querySelector('#reg-email');
    const userPass = document.querySelector('#reg-pass');
    const userRePass = document.querySelector('#reg-re-pas');
    const submitBtn = document.querySelector('#reg-submit');
    const checkboxPrivacy = document.querySelector('#privacy');
    var validateName = false;
    var validateEmail = false;
    var validatePass = false;
    var validateRePass = false;

    submitBtn.disabled = true;

    userName.addEventListener('blur', function () {
        if (userName.value.length < 2) {
            userName.classList.add('error');
            userName.nextElementSibling.innerHTML = 'Minimum 2 characters';
        } else if (userName.value.length >= 2) {
            userName.classList.remove('error');
            userName.nextElementSibling.innerHTML = '';
            validateName = true;
            if (validateName && validateEmail && validatePass && validateRePass && checkboxPrivacy.checked) {
                submitBtn.disabled = false;
            }
        }
    });
    userEmail.addEventListener('blur', function () {
        if (!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(userEmail.value)) {
            userEmail.classList.add('error');
            userEmail.nextElementSibling.innerHTML = 'Enter correct email';
        } else {
            userEmail.classList.remove('error');
            userEmail.nextElementSibling.innerHTML = '';
            validateEmail = true;
            if (validateName && validateEmail && validatePass && validateRePass && checkboxPrivacy.checked) {
                submitBtn.disabled = false;
            }
        }
    });

    userPass.addEventListener('blur', function () {
        if (userPass.value.length < 4) {
            userPass.classList.add('error');
            userPass.nextElementSibling.innerHTML = 'Minimum 4 characters';
        } else if (userPass.value.length >= 4) {
            userPass.classList.remove('error');
            userPass.nextElementSibling.innerHTML = '';
            validatePass = true;
            if (validateName && validateEmail && validatePass && validateRePass && checkboxPrivacy.checked) {
                submitBtn.disabled = false;
            }
        }
    });
    userRePass.addEventListener('blur', function () {
        if (userPass.value != userRePass.value) {
            userRePass.classList.add('error');
            userRePass.nextElementSibling.innerHTML = 'Passwords dont match';
        } else {
            userRePass.classList.remove('error');
            userRePass.nextElementSibling.innerHTML = '';
            validateRePass = true;
            if (validateName && validateEmail && validatePass && validateRePass && checkboxPrivacy.checked) {
                submitBtn.disabled = false;
            }
        }
    });

    checkboxPrivacy.addEventListener('change', function () {
        if (validateName && validateEmail && validatePass && validateRePass && checkboxPrivacy.checked) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });

    return validateName;
};

function saveUserDataToLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
};

const addNewUser = function() {
    validationFields();
    document.querySelector('#regForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Предотвращаем отправку формы

        var username = document.getElementById('reg-username').value;
        var email = document.getElementById('reg-email').value;
        var password = document.getElementById('reg-pass').value;
        var sucReg = document.querySelector('#suc-reg');
        var userName = document.querySelector('#accUserrName');
        var userEmail = document.querySelector('#accUserEmail');
        var userData = localStorage.getItem("user");

            var user = {
                username: username,
                email: email,
                password: password,
                login: true
            };

            // Сохраняем данные пользователя в LocalStorage
            saveUserDataToLocalStorage(user);


            // Получаем данные из формы
            const formData = {
                user_name: document.getElementById('reg-username').value,
                email: document.getElementById('reg-email').value,
                password: document.getElementById('reg-pass').value,
                os: navigator.platform
            };

            userName.innerHTML = formData.user_name;
            userEmail.innerHTML = formData.email;

            // Создаем объект XMLHttpRequest
            const xhr = new XMLHttpRequest();

            // Указываем метод и адрес, куда отправлять запрос
            xhr.open('POST', '../data.php');

            // Устанавливаем заголовок для передачи данных в формате JSON
            xhr.setRequestHeader('Content-Type', 'application/json');

            // Отправляем данные на сервер в формате JSON
            xhr.send(JSON.stringify(formData));

            // Обрабатываем ответ от сервера
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText);
                }
            };

            // Очищаем поля формы (если это требуется)
            document.getElementById('reg-username').value = '';
            document.getElementById('reg-email').value = '';
            document.getElementById('reg-pass').value = '';
            document.getElementById('reg-re-pas').value = '';

            // Выводим сообщение об успешной регистрации или выполняем другие действия по вашему выбору
            document.querySelector('#registration').classList.remove('open');
            document.querySelector('body').classList.remove('lock');
            sucReg.classList.add('open');
            setTimeout(function () {
                sucReg.classList.remove('open');
            }, 2000);
            headerButtonsBlock.classList.add('hidden');
            accountBlock.classList.add('visible');
            accountContent.classList.remove('hidden');
    });
}

const doreg = function() {
    regBlock.innerHTML = regFormHTML;

    
    addNewUser();
}


regPopupButton.addEventListener('click', doreg);

var closeBtn = document.querySelector('#exit');

closeBtn.addEventListener('click', function () {
    var userData = localStorage.getItem("user");
    if (userData) {
        var user = JSON.parse(userData);
        user.login = false;
        localStorage.setItem("user", JSON.stringify(user));

        headerButtonsBlock.classList.remove('hidden');
        accountBlock.classList.remove('visible');
        headerButtonsBlock.classList.remove('visible');
        accountContent.classList.remove('visible-b');
        accountContent.classList.add('hidden');
    }
});