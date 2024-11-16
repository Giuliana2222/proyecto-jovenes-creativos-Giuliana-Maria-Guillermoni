const btnSingup = document.getElementById("btnSingup")?.addEventListener("click", singup);


if(localStorage.getItem('loginUser')) {
  window.location.href = "./index.html";
}

function singup() {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const mail = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;

  if (validData(name, lastName, mail, password, gender)) {
    const users = findUser(mail);
    if (users) {
      alert("El mail ya existe");
    } else {
      const user = {
        name: name,
        lastName: lastName,
        mail: mail,
        password: password,
        gender: gender,
      };

      const users = JSON.parse(localStorage.getItem("users")) || [];

      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));

      alert("Usuario registrado");
      window.location.href = "./login.html";
    }
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


function validData(name, lastName, mail, password, gender) {
  if (
    name === "" ||
    lastName === "" ||
    mail === "" ||
    password === "" ||
    gender === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else {
    return true;
  }
}
