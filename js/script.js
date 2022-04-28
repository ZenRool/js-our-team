const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];



// devo un caffè a chiunque abbia inventato il forEach | commento serio per ogni elemento in team faccio printPerson dando come input 
team.forEach(printPerson);
team.forEach(domPrintPerson);
team.forEach(printCard);
// Bonus 3
const btn = document.getElementById("addMemberButton");
btn.addEventListener ("click", () =>{
    const nameInput = document.getElementById("name").value;
    const roleInput = document.getElementById("role").value;
    const imageInput = document.getElementById("image").value;
    const person = {
        name: 'noName',
        role: 'noRole',
        image: 'undefind' 
    };
    person.name = nameInput;
    person.role = roleInput;
    person.image = imageInput;
    // stampa la carta creata 
    printCard(person);

    //e metto la persona nell'array del team 
    team.push(person);
});

// Prima millestone
// Funzione che stampa tutte le carratteristiche dei elementi di team  nel log
function printPerson(person) {
    console.log("Nome:", person.name, "; Ruolo:", person.role, "; Indirizzo immagine:", person.image);
}
//fine prima millestone
//Seconda milestone e Bonus 1
// Funzione che stampa tutte le carratteristiche dei elementi di team  nel dom dato in input
function domPrintPerson(person) {
    //Element dove mettere i div che contengono le stringhe
    const stringDom = document.getElementById("stringTeam");

    
    const str = document.createElement("div");
    str.innerHTML = `
    <span>
        Nome: ${person.name} | Ruolo: ${person.role} | Indirizzo immagine: ${person.image}   
    </span>
    <img src="img/${person.image}" alt="immagine di ${person.name}">`

    stringDom.append(str);   

}
//fine seconda milestone e Bonus 1
// inizio carte Bonus 2

// Come è fatta la carta 
// .team-card -> (.card-image -> img) .card-tetx -> (h3(nome) p (ruolo) )
// funzione crea carta e mettila nel dom / sempre person come input
function printCard(person) {
    //Element del dom che contiene le carte
    const domCards = document.getElementsByClassName("team-container")[0];
    // creo il div card 
    const card  = document.createElement("div");
    card.classList.add("team-card");

    const cardImage  = document.createElement("div");
    cardImage.classList.add("card-image");
    cardImage.innerHTML = `<img src="img/${person.image}" alt="immagine di ${person.name}">`

    const cardText  = document.createElement("div");
    cardText.classList.add("card-text");
    cardText.innerHTML = `
        <h3>${person.name}</h3>
        <p>${person.role}</p>
    `
    card.append(cardImage);
    card.append(cardText);
    console.log(card);
    domCards.append(card);

}

