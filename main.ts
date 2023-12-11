type Info = {
  count: number,
  next: string | null,
  pages: number,
  prev: string | null,
}
type Character = {
  created: string,
  episode: string[],
  gender: string,
  id: number,
  image: string,
  location: {
    name: string,
    url: string,
  },
  name: string,
  origin: {
    name: string,
    url: string,
  },
  species: string,
  status: string,
  type: string,
  url: string,
}
fetch('https://rickandmortyapi.com/api/character')
.then((r) => r.json())
.then((json:{info:Info, results:Character[] }) => {
  const character = json.results;
const outputDiv = document.getElementById("output") as HTMLElement


character.forEach((character) => {
  
  const characterDiv = document.createElement("div");

  const nameParagraph = document.createElement("p");
      nameParagraph.textContent = `${character.name} is in ${character.episode.length} episode(s).`;

      const imageElement = document.createElement("img");
      imageElement.src = character.image;
      imageElement.alt = character.name;

      const speciesParagraph = document.createElement("p");
      speciesParagraph.textContent = `Species: ${character.species}`;

      const statusParagraph = document.createElement("p");
      statusParagraph.textContent = `Status: ${character.status}`;

      const hrElement = document.createElement("hr");

      // Append the elements to characterDiv
      characterDiv.appendChild(nameParagraph);
      characterDiv.appendChild(imageElement);
      characterDiv.appendChild(speciesParagraph);
      characterDiv.appendChild(statusParagraph);
      characterDiv.appendChild(hrElement);

      // Append the characterDiv to the output div
      outputDiv.appendChild(characterDiv);
    });
  });


  // Not sure about this..
 /* characterDiv.innerHTML = `
    <p>${character.name} is in ${character.episode.length} episode(s).</p>
    <img src="${character.image}" alt="${character.name}"/>
    <p>Species: ${character.species}</p>
    <p>Status: ${character.status}</p>
    <hr>
  `;

  // Append the characterDiv to the output div
  document.getElementById("output").appendChild(characterDiv);
});*/
