function valid(form){
    var userName = form.userName.value;
    var password = form.password.value;
    var check_password = form.check_password.value;
    var state = form.state.value;
    var email = form.email.value;
    var fail = false;

    if (userName == "" || userName == " ")
        fail = "Вы не ввели свое имя.";
    else if (password == " ")
        fail = "Вы не ввели пароль.";
    else if (password != check_password)
        fail = "Пароли не овпадают.";
    else if (state=="")
        fail = "Укажите пол.";
    if (fail)
        alert(fail);
    else
        window.location="https://www.youtube.com/watch?v=MY2t0Y6MVZo&t=";
}

