'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");


const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal)
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    //document.querySelector('body').style.backgroundColor = 'pink'; 
};
console.log(openModal)
for (let x = 0; x < btnOpenModal.length; x++){
   btnOpenModal[x].addEventListener('click',openModal)
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    //document.querySelector('body').style.backgroundColor = 'red'; 
};

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function (e)
{
    console.log(e.key)
 if (e.key === 'Escape' && !modal.classList.contains('hidden'))
 closeModal();
 //document.querySelector('body').style.backgroundColor = 'pink'
 });
 

  

