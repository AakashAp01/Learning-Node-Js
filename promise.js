const bakeCookies = new Promise((resolve, reject) => {
    const bakingSuccess = true; // Change this to false to simulate rejection

    if (bakingSuccess) {
        resolve("Here are your cookies! 🍪");
    } else {
        reject("Sorry, I burned the cookies. 😢");
    }
});

bakeCookies
    .then((cookies) => {
        console.log(cookies); // If resolved: "Here are your cookies! 🍪"
    })
    .catch((error) => {
        console.log(error); // If rejected: "Sorry, I burned the cookies. 😢"
    });