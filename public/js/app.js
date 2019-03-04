/**
 * Register new users
 */

const registerUser = function (event) {
    event.preventDefault();
    const username = $('#reg-username').val().trim();
    const password = $('#reg-password').val().trim();

    $.post('api/user', { username: username, password: password })
        .then(function (data) {
            console.log(data);
        })
    // $('#reg-username').val('');
    // $('#reg-password').val('');
}

$('#register-btn').on('click', registerUser);

/**
 * Login Users
 */

const loginUser = function (event) {
    event.preventDefault();
    const username = $('#login-username').val().trim();
    const password = $('#login-password').val().trim();

    $.post('api/session', { username: username, password: password })
        .then(function (data) {
            if (data._id) {
                sessionStorage.setItem('token', data._id)
                window.location.href = "main.html";
            }
        })
    // $('#login-username').val('');
    // $('#login-password').val('');
}

$('#login-btn').on('click', loginUser);