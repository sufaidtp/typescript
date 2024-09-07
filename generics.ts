


type UserDetails = {
    name: string;
    age: number;
}
type AdminDetails = {
    firstname: string;
    age: number;
}

let userDetails: UserDetails = {
    name: "sufaid",
    age: 24,
}

let adminDetails: AdminDetails = {
    firstname: "salman",
    age: 20,
}

function getDetails<T>(Details: T): T {
    return Details
}

const uservalue = getDetails<UserDetails>(userDetails)
const adminvalue = getDetails<AdminDetails>(adminDetails)

console.log(uservalue.name);
