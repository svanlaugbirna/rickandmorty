"use strict";
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
    console.log(json);
});
