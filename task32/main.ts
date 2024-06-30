let current_users : string [] = ["admin", "Eric", "Ali", "Hamza", "fatima"]
let new_users : string [] = ["admin", "fatima", "Aliza", "Haseeb", "Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLocaleLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
    }else {
        console.log(`Yes ${new_user}, is still in available list`)
    }
}