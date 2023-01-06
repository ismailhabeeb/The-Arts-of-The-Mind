export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
})

export const LoginSuccessful = (user) => ({
    type: "LOGIN_SUCCESSFUL",
    payload: user,
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
    payload: user,
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccessful = (user) => ({
    type: "UPDATE_SUCCESSFUL",
    payload: user,
});


export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});