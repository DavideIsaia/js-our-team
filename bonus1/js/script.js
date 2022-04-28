// Viene fornito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

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

// ciclo for per scorrere l'array
for (let i = 0; i < team.length; i++) {
  const person = team[i];
  console.log(`${i+1}° membro`);
  const description = document.getElementById ("description");
  description.innerHTML += (`<br>${i+1}° membro <br>`); 
  
  // mostro l'immagine
  if (key = "image") {
    description.innerHTML += (` <br> <img src="img/${person[key]}" alt="${person.name}"></img> <br>`);   
  }

  // ciclo for in per scorrere l'oggetto e aggiungere i testi
  for (let key in person) {
    console.log(key,"-", person[key]);
    if (key !== "image") {
      description.innerHTML += (`${key} - ${person[key]} <br>`);            
    }    
  }
}