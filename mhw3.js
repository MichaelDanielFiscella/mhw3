function Ricerca()
{
  const text = document.querySelector('#InputBar');
  text.value = '';
}

function NoRicerca()
{
  const text = document.querySelector('#InputBar');
  if(text.value.length == 0)
  {
    text.value = 'Cerca nel cosmo';
  }
}

const text = document.querySelector("#InputBar");

text.addEventListener("click", Ricerca);

text.addEventListener("blur", NoRicerca);




function ApriMenu(){
    isVisible1 = !isVisible1;
  
    if(isVisible1){
      modalView.classList.remove('hidden');
    }else{
      modalView.classList.add('hidden');
    }
  }
  
  let isVisible1 = false;
  const apri = document.querySelector("#SpazioMenu");
  const modalView = document.querySelector('#modal-view');
  apri.addEventListener("click", ApriMenu);


function searchResult(json){
  const risultatiRicerche = document.querySelector('#ricerche');
  risultatiRicerche.innerHTML = ''; //svuota i risultati in maniera flash 
  let risultati = json.trovati; //comando per salvare i risultati 
  
  if(risultati > 5)
    risultati = 5;
  for(let i=0; i<risultati; i++){
    const documento = json.docs[i];
    const titolo = doc.title;

    const cover_url = 'https://images-api.nasa.gov/';
    const risultato = document.createElement('div');
    risultato.classList.add('ricerca');
    const img = document.createElement('img');
    img.src = cover_url;
    const didascalia = document.createElement('span');
    didascalia.textContent = title;
    risultato.appendChild(img);
    risultato.appendChild(didascalia);
    risultatiRicerche.appendChild(risultato);
  }
}

function onResponse(response){
  return response.json();
}

function search(event){
  event.preventDefault();
  const nomeArticolo = docuemnt.querySelector('#InputBar');
  rest_url = 'https://images-api.nasa.gov/'+ nomeArticolo;
  fetch(rest_url).then(onResponse).then(searchResult);
}

const form = document.querySelector('form');
form.addEventListener('Ricerca', search);


//funzione per accedere

const client_id= '';
const client_secret= '';
let token;

//Oauth2
function RichiestaToken(){
  const url = 'https://accounts.spotify.com/api/token';
  const response = fetch(url,{
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers:{
      'Content_Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' +  btoa(client_id + ':' + client_secret)
    }
  }).then(GotResponse, GotError).then(SaveToken);
}


function GotResponse(response){
  return response.json();
}

function GotError(error){
  console.log(error);
}

function SalvaToken(token){
  console.log(token);
  const a = document.querySelector('input').value;
  const url = /link/
  fetch(url,{
    method:'GET',
    headers:{
      'Authorization':'Bearer '+token.access_token
    }
  }).then(GotResponse, GotError).then(searchResult);
}
