export function getCpf(state) {
    return state.userRegister.cpf;
}

export function getName(state) {
    return state.userRegister.name;
}

export function getSurname(state) {
    return state.userRegister.surname;
}

export function getDob(state) {
    return state.userRegister.dob;
}

export function getEmail(state) {
    return state.userRegister.email;
}

export function getPhone(state) {
    return state.userRegister.phone;
}
export function getIsLogged(state) {
    return state.isLogged;
}