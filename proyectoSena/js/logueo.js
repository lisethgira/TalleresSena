// Login
// const loginForm = document.querySelector('#login-form');
//const loginButton = document.querySelector('#login-btn');

// loginButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = loginForm.querySelector('#email').value;
//   const password = loginForm.querySelector('#password').value;
  
//   // Aquí iría la lógica para validar el email y la contraseña y hacer el login
  
//   // Si el login es exitoso, redireccionar al perfil del administrador
//   window.location.href = 'views/admin/panel.html';
// });

// Registro
const registerForm = document.querySelector('#register-form');
const registerButton = document.querySelector('#register-btn');

registerButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = registerForm.querySelector('#name').value;
  const email = registerForm.querySelector('#email').value;
  const password = registerForm.querySelector('#password').value;
  const passwordConfirm = registerForm.querySelector('#password-confirm').value;
  
  // Aquí iría la lógica para crear una nueva cuenta de administrador
  
  // Si el registro es exitoso, redireccionar al perfil del administrador
  window.location.href = 'views/admin/panel.html';
});

// Logout
const logoutButton = document.querySelector('#logout-btn');

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Aquí iría la lógica para cerrar la sesión del administrador
  
  // Redireccionar a la página de inicio de sesión
  window.location.href = 'login.html';
});