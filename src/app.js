
import "./style.css";


window.onload = function () {
  let ramdomNumber = Math.random() * 10;
  document.querySelector('#excusa').innerHTML = generateExcuse();
}
let generateExcuse = function () {
  let who = ['Mi gato', 'Mi prima', 'Mi vecino', 'Mi hermano', 'Mi tío'];

  let action = ['escondió', 'rompió', 'perdió', 'estropeó', 'quemó'];
  let what = ['mi ordenador', 'mis apuntes', 'mis ejercicios', 'mis anotaciones', 'mi portátil'];
  let when = ['durante el fin de semana', 'al acabar las clases', 'cuando estaba haciendo la comida', 'después de irme a domir', 'al amanecer'];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];
};




