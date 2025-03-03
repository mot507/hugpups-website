let cards = document.getElementById('services-section');
let data = "https://raw.githubusercontent.com/mot507/HugPups/refs/heads/main/DogData";

fetch(data).then(Response => Response.json())
    .then((data) => {
    data.forEach((dog) => {
        cards.innerHTML += `
            <div class="dog">
                    <img src="${dog.image_url}" alt="dog 1" class="dog-image">
                    <div class="dog-info">
                        <p>${dog.name}</p>
                        <p>${dog.age}</p>
                        <p>${dog.breed}</p>
                        <p>${dog.temperament}</p>
                        <a class="service-button2" href="renting.html">Rent Me</a>
                    </div>
                </div>`;
        });
    });