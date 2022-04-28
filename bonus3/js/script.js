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

const membersContainer = document.querySelector('.team-container');

// collego il bottone a una variabile
const addButton = document.querySelector('#addMemberButton');

for (let i = 0; i < team.length; i++) {
  const person = team[i];
  // metto tutto dentro una funzione e la richiamo
  createCard(person.name, person.role, person.image);
};

// ------------------------------------------------

// FUNZIONI

// funzione che crea le card con html literal
function createCard(name, role, image) {
  let card = `          
  <div class="team-card">
      <div class="card-image">
        <img src="img/${image}" alt=${name}"/>
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
  </div>
  `;
  // console.log(key,"-", person[key]);
  
  // stampo in html il container con tutte le card aggiunte
  membersContainer.innerHTML += card;
};

// funzione che risponde al clic del bottone Add
addButton.addEventListener('click', function() {

  // creo delle variabili per semplicità
  let inputPersonName = document.querySelector('#name');
  let inputPersonRole = document.querySelector('#role');
  let inputPersonImg = document.querySelector('#image');

  // le metto in un oggetto
  const newMember = {
    name: inputPersonName.value,
    role: inputPersonRole.value,
    image: inputPersonImg.value
  }

  // pusho l'oggetto dentro l'array
  team.push(newMember);
  
  // richiamo la funzione per creare le card
  createCard(inputPersonName.value, inputPersonRole.value, inputPersonImg.value);

  // ripulisco i campi del form
  inputPersonName.value = '';
  inputPersonRole.value = '';
  inputPersonImg.value = '';
});