const setAuthUserAction = (authUser) => {
    return {
        type: "AUTH_USER_SET",
        authUser
    }
}

export default setAuthUserAction