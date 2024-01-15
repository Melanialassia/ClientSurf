const validation = (userData) => {
  let errors = {};

  if (!userData.nameUser) {
    errors.nameUser = "Campo obligatorio";
  } else if (!/^[a-zA-Z]+$/.test(userData.name)) {
    errors.nameUser = "Solo se permiten letras en el nombre";
  } else if (userData.nameUser.length > 20) {
    errors.nameUser = "Máximo 20 caracteres";
  }

  if (!userData.lastName) {
    errors.lastName = "Campo obligatorio";
  } else if (!/^[a-zA-Z]+$/.test(userData.lastName)) {
    errors.lastName = "Solo se permiten letras en el apellido";
  } else if (userData.lastName.length > 40) {
    errors.lastName = "Máximo 40 caracteres";
  }

  if (!/\S+@\S+\.\S+/.test(userData.emailUser)) {
    errors.emailUser = "Dirección de correo inválida";
  }

  if (!userData.emailUser) {
    errors.emailUser = "Campo obligatorio";
  }

  if (userData.emailUser.length > 35) {
    errors.emailUser = "Máximo 35 caracteres";
  }

  if (!userData.password) {
    errors.password = "Campo obligatorio";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "Tu contraseña debe tener al menos un número";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Tu contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
