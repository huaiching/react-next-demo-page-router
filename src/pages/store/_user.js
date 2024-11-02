
const initUser = {
    id: "",
    name: "",
    deptCode: "",
    access: [],
}

const getUserData = () => {
    const userData = {
        id: "qa",
        name: "開發人員",
        deptCode: "90220",
        access: ["PS","CL"]
    }
    user = userData
}

let user = initUser

export const getUser = () => {
    if (user.id === "") {
        getUserData()
    }
    return user
}
