interface ValidationErrors {
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  street?: string;
  dni?: string;
}

const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
const regexLastName = /^[a-zA-Z\s]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword =
  /^(?=.[a-zA-Z0-9!@#$%^&()_+-=,.<>?/;:'"[\]{|}~])[\w!@#$%^&*()_+-=,.<>?/;:'"[\]{|}~]{6,}$/;
const regexStreet = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9, ]+$/;
const regexDni = /^[0-9]+$/;

const validaciones = (inputs: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (inputs.name) {
    if (typeof inputs.name !== "string" || inputs.name.length === 0) {
      errors.name = "Nombre requerido";
    } else if (!regexName.test(inputs.name)) {
      errors.name = "Nombre inválido";
    } else if (inputs.name.length > 25) {
      errors.name = "El nombre no puede tener más de 25 caracteres";
    } else {
      delete errors.name;
    }
  }

  if (inputs.last_name) {
    if (
      typeof inputs.last_name !== "string" ||
      inputs.last_name - length === 0
    ) {
      errors.last_name = "Apellido Requerido";
    } else if (!regexLastName.test(inputs.last_name)) {
      errors.last_name = "Apellido Invalido";
    } else if (inputs.last_name.length > 25) {
      errors.last_name = "El Apellido no puede tener mas de 25 caracteres";
    } else {
        delete errors.last_name
    }

  }

  if (inputs.email) {
    if (typeof inputs.email !== "string" || inputs.email.length === 0) {
      errors.email = "Email requerido";
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = "Email inválido";
    } else if (inputs.email.length > 40) {
      errors.email = "El email no puede tener más de 40 caracteres";
    } else {
      delete errors.email;
    }
  }

  if (inputs.password) {
    if (typeof inputs.password !== "string" || inputs.password.length === 0) {
      errors.password = "Contraseña requerida";
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = "Contraseña inválida";
    } else if (inputs.password.length < 4 || inputs.password.length > 18) {
      errors.password = "La contraseña debe tener entre 4 y 10 carácteres";
    } else {
      delete errors.password;
    }
  }

  if (inputs.street) {
    if (typeof inputs.street !== "string" || inputs.street.length === 0) {
      errors.street = "Calle requerida";
    } else if (!regexStreet.test(inputs.street)) {
      errors.street = "Calle inválida";
    } else if (inputs.street.length > 40) {
      errors.street = "La calle no puede tener más de 40 caracteres";
    } else {
      delete errors.street;
    }
  }

  if (inputs.dni) {
    if (typeof inputs.dni !== "string" || inputs.dni.length === 0) {
      errors.dni = "DNI requerido";
    } else if (!regexDni.test(inputs.dni)) {
      errors.dni = "DNI invalido inválido";
    } else if (inputs.dni.length < 2 || inputs.dni.length > 8) {
      errors.dni = "El DNI no puede superar los 8 digitos";
    } else {
      delete errors.dni;
    }
  }

  return errors;
};

export default validaciones;
