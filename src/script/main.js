import DataSource from "./data-source.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector("#searchButtonElement");
  const searchElement = document.querySelector("#searchElement");

  const onSearchButtonClicked = () => {
    const listResep = document.querySelector(".list-resep");

    DataSource.searchResep(searchElement.value)
      .then((results) => {
        listResep.innerHTML = "";
        results.forEach((result) => {
          const itemResep = document.createElement("div");
          itemResep.setAttribute("class", "item-resep");
          itemResep.innerHTML = `
                <div class="card  shadow-lg">
                  <img src="/src/img/${
                    result.imgUrl
                  }" class="card-img-top rounded" style="width: 100%;"
                       alt="...">
                  <div class="card-body">
                    <h2 class="card-title display-1">${result.nama}</h2>
                    <p class="card-subtitle mb-2 text-muted h1" style="color:green;">${
                      result.label
                    }</p>
                    <p class="card-text">
                      ${result.bahanBahan.reduce((acc, cv) => acc + "<br>" + cv )}
                    </p>
                    <p class="card-text">
                      ${result.caraMasak.reduce((acc, cv) => acc + "<br>" + cv )}
                    </p>
                  </div>
                </div>
                `;
          listResep.appendChild(itemResep);
        });
      })
      .catch((message) => {
        listResep.innerHTML = message;
      });
  };

  searchElement.addEventListener("keyup", onSearchButtonClicked);
  searchButton.addEventListener("click", onSearchButtonClicked);
});
