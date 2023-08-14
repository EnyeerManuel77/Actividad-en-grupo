let palabra = [];
let buttons = [];
let porBuscar = {
   'SSL': false,
   'COMUNICACION': false,
   'PROTOCOLO': false,
   'CONEXION': false,
   'CERTIFICADO': false,
   'NAVEGADOR': false,
   'ENCRIPTACION': false,
   'PRIVACIDAD': false,
   'SEGURIDAD': false,
   'URL': false,
   'HTTP': false,
   'HTTPS': false,
};
let li = {};
let encontradas = 0;
function empiezaSopa(
   characters ='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
   ){
   let matriz = document.getElementById('matriz');
   for (let rows = 0; rows < 14; rows++) {
      let tr = document.createElement('tr');
      matriz.appendChild(tr);
      for (let column = 0; column < 14; column++) {
         let td = document.createElement('td');
         tr.appendChild(td);
         let c = document.createElement('button');
         td.appendChild(c);
         
         c.type = 'button';
         c.className = 'btn btn-outline-light';
         c.innerHTML = characters.charAt(random(27));
         c.id = String(rows) + String(column);
         c.setAttribute('onclick','crearPalabra("'+c.id+'");');
      }
      const oneLi = document.getElementById('i'+rows);
      if (oneLi) {
         li[oneLi.innerHTML] = oneLi.id;
      }
   }
   distribuir(matriz);
}
function crearPalabra(id, button = document.getElementById(id)){
   button.setAttribute("disabled", "");
   palabra.push(button.innerHTML);
   buttons.push(button);
}
function buscarPalabra(){
   let word = palabra.length > 0 ? palabra.reduce((bef, now) => {
      return bef += now;
   }) : alert('No has ingresado palabra');
   
   if (porBuscar.hasOwnProperty(word)) {
      porBuscar[word] = true;
      const tachar = document.getElementById(li[word]);
      tachar.setAttribute('style', 'text-decoration: line-through;');
      encontradas++;
      for (const validar in porBuscar) {
         if (!porBuscar[validar]) {
            noPalabra();
            break;
         }
         if (encontradas === 12) {
            alert('Has armado la sopa de letras');
            window.location = ''; // COLOCAR AQUI ADENTRO A DONDE LO QUIERES REDIRIGUIR AL COMPLETAR EL JUEGO
         }
      }
   }
}
function noPalabra(palabraAgain = [], buttonsAgain = []) {
   buttons.forEach((each) => each.removeAttribute('disabled'));
   palabra = palabraAgain;
   buttons = buttonsAgain;
}
function distribuir(tablero, ){
   for (const key in li) {
      let position = {
         fila: String(random(13)),
         col: String(random(3)),
         direccion: random(3),
      };
      for (let i = 0; i < key.length; i++) {
         let button = document.getElementById(position.fila+position.col);
         button.innerHTML = key[i];
         //if (position.direccion == 0) {
            position.col = String(Number(position.col) + 1);
         //}
      }
   }
}
function random(n) {
   return Math.floor(Math.random()*n);
}
