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
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json:{info:Info, results:Character[] }) => {

console.log(json);

















  });