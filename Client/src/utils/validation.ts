import {UserLogin, userPassword, userUsername} from "../interfaces/userLogin.ts";

export default function validation ({email, password}: UserLogin): UserLogin {
    const errors: UserLogin = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexpassword =  /^(?=\w*\d)\S{6,10}$/;

    const regexnumber =  /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i

    if(!email){
        errors.email = 'No puede ser vacio'
        return errors
    }
    if(!regexEmail.test(email)){
        errors.email = 'Debe ser correo electronico'
    }
    if(email.length > 35){
        errors.email = 'Debe tener menos de 35 caracteres'
    }
    if (!password) {
        errors.password = "La contraseña no puede estar en blanco"
        return errors
    }
    if(!regexnumber.test(password)){
        errors.password = "La contrasena debe tener un numero"
    }
    if(!regexpassword.test(password)){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }

    return errors;

}