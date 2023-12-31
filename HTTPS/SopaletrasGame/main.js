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
         c.className = 'btn btn-outline-primary';
         c.innerHTML = characters.charAt(random(27));
         c.id = String(rows) + String(column);
         c.setAttribute('onclick','crearPalabra("'+c.id+'");');
      }
      const oneLi = document.getElementById('i'+rows);
      if (oneLi) {
         li[oneLi.innerHTML] = oneLi.id;
      }
   }
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
            alert('Muy bien has armado todos los conceptos C:');
            window.location = '../';
            break; 
         }
      }
   }
}
function noPalabra(palabraAgain = [], buttonsAgain = []) {
   buttons.forEach((each) => each.removeAttribute('disabled'));
   palabra = palabraAgain;
   buttons = buttonsAgain;
}
function random(n) {
   return Math.floor(Math.random()*n);
}
