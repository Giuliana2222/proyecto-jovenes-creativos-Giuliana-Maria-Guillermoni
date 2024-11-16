

document.querySelector("#btnLogout")?.addEventListener("click", logout);


if (localStorage.getItem('loginUser')) {
  document.getElementById('btnNavLogin').style.display = 'none';
  document.getElementById('btnNavSingup').style.display = 'none';
  document.getElementById('txtUserName').innerHTML = 'Bienvenido, ' + JSON.parse(localStorage.getItem('loginUser')).name;
  document.getElementById('btnLogout').style.display = 'inline-block';
}
else {
  document.getElementById('btnNavLogin').style.display = 'inline-block';
  document.getElementById('btnNavSingup').style.display = 'inline-block';
  document.getElementById('btnLogout').style.display = 'none';
  document.getElementById('txtUserName').innerHTML = '';

}


function logout() {
  localStorage.removeItem('loginUser');
  location.reload();
}