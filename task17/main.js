"use strict";
let Guest_List = ["Warda", "Huba", "Anoosha"];
console.log("Good news! We've found a bigger dinner table, so more space is available. So our new guest are :\n");
Guest_List.unshift("Mehreen");
Guest_List.splice(2, 0, "Areeba");
Guest_List.push("Kiran");
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]}: \n you are invited to dinner! \n`);
}
console.log("Unfortunately, the new dinner table would not arrive in time,so we can only invite two people for dinner.\n");
while (Guest_List.length > 2) {
    let notInvited = Guest_List.pop();
    console.log(`Sorry, Due to limited space we can not invite you to dinner Ms.${notInvited} \n`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]}: \n you are still invited to dinner! \n`);
}
Guest_List.pop();
Guest_List.pop();
console.log(Guest_List);
