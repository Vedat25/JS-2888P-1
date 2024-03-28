async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach(async (user) => {
        await createCard(user);
    });
};



async function createCard(user) {
    let card = document.getElementById("card")
    card.innerHTML += `
    <div class = "col-lg-3 col-md-5 col-sm-12 card">
    <h5 class = "fa-solid fa-user icon">${user.id}</h5>
    <h5 class = "fa-solid fa-user icon">${user.name}</h5>
    <h5 class = "fa-solid fa-user icon">${user.username}</h5>
    <h5 class= "fa-solid fa-building"> ${user.address.city}</h5>
    <h5 class= "fa-solid fa-location-dot">${user.company.name}</h5>
    <h5 class= "fa-solid fa-envelope">${user.email}</h5>
    <h5 class= "fa-solid fa-phone">${user.phone}</h5>
    <h5 class= "fa-brands fa-webflow">${user.website}</h5>
    </div>
    `
};

getUsers();