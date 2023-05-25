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

export function getIsMenuMobileOpen(state) {
    return state.isMenuMobileOpen;
}

export function getUserCompleteName(state) {
    return state.userRegister.name + " " + state.userRegister.surname;
}

export function getTurnChoosed(state) {
    return state.turnChoosed;
}

