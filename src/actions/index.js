const selectUser = (user) => {
    console.log("You select: " + user.firstName + ' ' + user.lastName);
    return {
        type: 'USER_SELECTED',
        payload: user
    };
};

export default selectUser;