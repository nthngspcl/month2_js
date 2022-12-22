let counter = document.querySelectorAll('.counter');
let decBtn = document.querySelectorAll('.decriment');
let incBtn = document.querySelectorAll('.increment');
let input = document.querySelector('.input')
function increment(){
    input.value++;
    input.value = input.value;

}
function decriment(){
    input.value--;
    input.value = input.value;
}
function reset(){
    input.value = 0;
}
