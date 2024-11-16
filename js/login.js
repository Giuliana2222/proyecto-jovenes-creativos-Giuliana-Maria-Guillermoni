const btnLogin = document.getElementById("btnLogin")?.addEventListener("click", login);

if(localStorage.getItem('loginUser')) {
  window.location.href = "./index.html";
}


function login() {
  const mail = document.getElementById("mail").value;
  const password = document.getElementById("password").value;

  let user = findUser(mail);

  if (user) {
    if (user.password === password) {
      localStorage.setItem("loginUser", JSON.stringify(user));
      window.location.href = "./index.html";
    } else {
      alert("Usuario o contraseña incorrecto");
    }
  }
  else {
    alert("Usuario o contraseña incorrecto");
  }
}


function findUser(mail) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let exist = false;
  let user = null;
  let i = 0;
  while (i < users.length && !exist) {
    if (mail === users[i].mail) {
      exist = true;
      user = users[i];
    }
    i++;
  }
  return user;
}
