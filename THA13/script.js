const container = document.querySelector(".container");


fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then((data) => {
        // getResponse(data)
        const title = document.createElement("h2")
        title.innerHTML = data.author;
        container.appendChild(title);

        console.log(data.content);
        const content = document.createElement("h3")
        content.innerHTML = data.content
        container.appendChild(content);
    })
    .catch((error) => console.log("Error"))

// function getResponse(data) {
//     // console.log(data.content);

//     data.content.forEach(quote => {
//         const title = document.createElement("h2")
//         title.innerHTML = data.author;
//         container.appendChild(title);
//     })
// }