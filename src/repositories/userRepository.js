import axios from 'axios';
 
export const userRepository = {
    login, logout, signup, getProfile, updateUser, forgotPass
};
async function login(credentials) {
    try {
        const res = await axios.post(`main/login`, credentials);
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
async function logout(credentials) {
    try {
        const res = await axios.post(`user/logout`, credentials);
        return res.data;
    }
    catch (error) {
        throw Error("Could not log out.");
    }
};
async function signup(email) {
    try {
        const res = await axios.post(`main/register`, email);
        return res.data;
    }
    catch (error) {
        throw Error("Problem signUp");
    }
};
async function getProfile(user) {
    try {
        const res = await axios.post(`user/profile`, user);
        return res.data;
    }
    catch (error) {
        throw Error("Problem Profile.");
    }
};
async function updateUser(user) {
    try {
        const res = await axios.post(`user/update`, user);
        return res.data;
    }
    catch (error) {
        throw Error("problem update.");
    }
};
async function forgotPass(identification){
    try {
        const res = await axios.post(`user/forgotPass`,identification );
        return res.data;
    }
    catch (error) {
        throw Error("Problem identification");
    }
};