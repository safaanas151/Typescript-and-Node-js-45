"use strict";
let Guest_List = ["Warda", "Huba", "Anoosha"];
console.log("\nNEW LIST OF INVITATION : \n");
for (let j = 0; j < Guest_List.length; j++) {
    console.log(`Dear ${Guest_List[j]}: \n you are invited to dinner! \n`);
}
console.log("Good news! We've found a bigger dinner table, so more space is available. So our new guest are :\n");
Guest_List.unshift("Mehreen");
Guest_List.splice(2, 0, "Areeba");
Guest_List.push("Kiran");
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]}: \n you are invited to dinner! \n`);
}
