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
// Prima millestone
// Funzione che stampa tutte le carratteristiche dei elementi di team  nel log
function printPerson(person) {
    console.log("Nome:", person.name, "; Ruolo:", person.role, "; Indirizzo immagine:", person.image);
}
//fine prima millestone
//Seconda milestone
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