// registration
(function () {
    const userName = document.querySelector('#reg-username');
    const userEmail = document.querySelector('#reg-email');
    const userPass = document.querySelector('#reg-pass');
    const userRePass = document.querySelector('#reg-re-pas');
    var checkboxPrivacy = document.querySelector('#privacy');
    var submitBtn = document.querySelector('#reg-submit');
    var checkInp = document.querySelector('.popup__checkbox-input');
    var checkLabel = document.querySelector('.popup__checkbox-label');
    var loginButtonsBlock = document.querySelector('.header__buttons');
    var accountBlock = document.querySelector('.account');
    var accountContent = document.querySelector('.account__content');


    submitBtn.disabled = true;

    var validateName = false;
    var validateEmail = false;
    var validatePass = false;
    var validateRePass = false;
    userName.addEventListener('blur', function () {
        if (userName.value.length < 2) {
            userName.classList.add('error');
            userName.nextElementSibling.innerHTML = 'Minimum 2 characters';
        } else if (userName.value.length >= 2) {
            userName.classList.remove('error');
            userName.nextElementSibling.innerHTML = '';
            validateName = true;
            if (validateName && validateEmail && validatePass && validateRePass && checkInp.checked) {
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
            if (validateName && validateEmail && validatePass && validateRePass && checkInp.checked) {
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
            if (validateName && validateEmail && validatePass && validateRePass && checkInp.checked) {
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
            if (validateName && validateEmail && validatePass && validateRePass && checkInp.checked) {
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

    function saveUserDataToLocalStorage(user) {
        localStorage.setItem('user', JSON.stringify(user));
    };

    document.querySelector('#regForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Предотвращаем отправку формы

        var username = document.getElementById('reg-username').value;
        var email = document.getElementById('reg-email').value;
        var password = document.getElementById('reg-pass').value;
        var sucReg = document.querySelector('#suc-reg');
        var userName = document.querySelector('#accUserrName');
        var userEmail = document.querySelector('#accUserEmail');
        var userData = localStorage.getItem("user");



        if (validateName && validateEmail && validatePass && validateRePass && checkboxPrivacy.checked) {
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
            loginButtonsBlock.classList.add('hidden');
            accountBlock.classList.add('visible');
            accountContent.classList.remove('hidden');
        };
    });

    var closeBtn = document.querySelector('#exit');

    closeBtn.addEventListener('click', function () {
        var userData = localStorage.getItem("user");
        if (userData) {
            var user = JSON.parse(userData);
            user.login = false;
            localStorage.setItem("user", JSON.stringify(user));

            loginButtonsBlock.classList.remove('hidden');
            accountBlock.classList.remove('visible');
            loginButtonsBlock.classList.remove('visible');
            accountContent.classList.remove('visible-b');
            accountContent.classList.add('hidden');
        }
    });
})();