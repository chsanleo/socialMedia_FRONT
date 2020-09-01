import { userRepository } from '../repositories/userRepository.js';
import { logoutAction, loginAction, updateUserAction, extUserAction } from '../redux/actions/user.js';

export const userService = {
    signup, login, getProfile, logout, forgotPass, update, getExtProfile
};

function signup(email) {
    userRepository.signup(email)
        .then()
        .catch(error => console.log(error));
}; 

function login(credentials) {
    userRepository.login(credentials)
        .then(res => {
            localStorage.setItem('authToken', res.token);
            loginAction(res);
        })
        .catch(error => { });
};

function getProfile(userId) {
    let user = { userId: userId };

    userRepository.getProfile(user)
        .then(res => {
            return res;
        })
        .catch(error => console.log(error));
};

function logout() {
    localStorage.clear();
    logoutAction();
    /*userRepository.logout()
        .then()
        .catch(error => { });*/
};

function forgotPass(identification) {
    userRepository.forgotPass(identification)
        .then()
        .catch(error => console.log(error));
};

function update(user) {
    userRepository.updateUser(user)
        .then()
        .catch(error => console.log(error));
    updateUserAction(user);
};

function getExtProfile(user) {
    userRepository.getProfile(user)
    .then(res => extUserAction(res))
    .catch(error => console.log(error));
};


