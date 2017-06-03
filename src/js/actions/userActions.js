export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "Torton",
            age: 30,
        }
    }
}

export function setUserName(name) {
    return {
        type: "SET_USER_NAME",
        payload: name
    }
}