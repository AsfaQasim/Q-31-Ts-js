var userNames2 = ["Ali", "Faraz", "Admin", "Tariq", "Noman", "Furqan"];
// to remove all members
userNames2 = [];
//console.log(userNames2);
if (userNames2.length > 0) {
    for (var i = 0; i < userNames2.length; i++) {
        if (userNames2[i] == "Admin") {
            console.log("\n Hello ".concat(userNames2[i], " would you like to see a status report?\n"));
        }
        else {
            console.log("Hello ".concat(userNames2[i], " thank you for logging in again! "));
        }
    }
}
else {
    console.log("We need to find some users!");
}
