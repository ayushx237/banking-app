'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//------LECTURE-------

//-------systuuuuum-------
//scroll down function!
const buttonname1=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

function toremove(){
  section1.scrollIntoView({behavior:'smooth'});
  //to remove scroll function just after one use
  //buttonname1.removeEventListener('click',toremove)
}
//removing scroll functionality after 60000ms.
setTimeout(()=>buttonname1.removeEventListener('click',toremove),6000);
buttonname1.addEventListener('click',toremove);

//new scroll try

document.querySelectorAll('.nav__link').forEach(el=>el.addEventListener('click',function(e){
  e.preventDefault();
  console.log(e.target);
  console.log(this.getAttribute('href'));
  const id=this.getAttribute('href');
 document.querySelector(id).scrollIntoView({behavior:'smooth'});
}))

  //scrolling with e.target and impliminting on parent element as well

/*
  document.querySelector('.nav__links').addEventListener('click',function(e){
    e.preventDefault();
    console.log(e.target);
    //matching strategy
    if(e.target.classList.contains('nav__link')){
      const id=e.target.getAttribute('href');
document.querySelector(id).scrollIntoView({behavior:"smooth"});
    }
  })
*/
//traversing the DOM
const cont=document.querySelector('.nav');
console.log(cont);
console.log(cont.parentNode);
console.log(cont.firstElementChild);
console.log(cont.nextElementSibling);

//tabbed component
//child button tag
const tabs=document.querySelectorAll('.operations__tab');
//parent tag 
const tabsContainer=document.querySelectorAll('.operations__tab-container');
//content tag
const content=document.querySelectorAll('.operations__content');

console.log(content);
console.log(tabs);

document.querySelectorAll('.operations__tab-container').forEach(function(e){
  e.addEventListener('click',function(el){
  //el.preventDefault();

  const clicked=el.target.closest('.operations__tab');
  console.log(clicked);
 
  clicked.classList.add('operations__tab--active');
  if(!clicked) return;
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  content.forEach(c=>c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})});
/*
const nav=document.querySelector('.nav');
const link1=document.querySelectorAll('.nav__link');
const link2=document.querySelector('.nav__links');
link2.addEventListener('mouseover',function(e){
  e.preventDefault();
  console.log("not linked");
  if(e.target.classList.contains("link1")){
    const ayush=e.target;
    const siblings=ayush.closest('.nav').querySelectorAll('.nav__link');

    siblings.forEach(el=>{
      if(el!==ayush){
el.style.opacity=1;
      }
    })
  }

  console.log("linked");
})*/

//working with fading of the links when get hovered


const nav=document.querySelector('.nav');
nav.addEventListener('mouseover',function(e){
  if(e.target.classList.contains('nav__link')){
   const ayush= e.target;
   //selecting siblings of targeted element
   const siblings=ayush.closest('.nav').querySelectorAll('.nav__link');

   const logo=ayush.closest('.nav').querySelector('img');

   siblings.forEach(el=>{
if(el !== ayush)
  el.style.opacity=0.5;

   }
   );
   logo.style.opacity=0.5;
  }
  
}
);

nav.addEventListener('mouseout',function(e){
  if(e.target.classList.contains('nav__link')){
   const ayush= e.target;
   //selecting siblings of targeted element
   const siblings=ayush.closest('.nav').querySelectorAll('.nav__link');

   const logo=ayush.closest('.nav').querySelector('img');

   siblings.forEach(el=>{
if(el !== ayush)
  el.style.opacity=1;

   }
   );
   logo.style.opacity=1;
  }

}
);

//sticky navbar using getBoundingClientRect()
/*
const initialcords=section1.getBoundingClientRect();
console.log(initialcords);
console.log(initialcords.top);
console.log(window.scrollY);
window.addEventListener('scroll',function(){
  if(window.scrollY>initialcords.top){
    nav.classList.add('sticky');
  }
  else{
    nav.classList.remove('sticky');
  }

})
*/

//using intersectionobserver
const header=document.querySelector('.header');
const stickynav=function(entries){
  const[entry]=entries;
  console.log(entry);
  if(!entry.isIntersecting)nav.classList.add('sticky');
  else{
    nav.classList.remove('sticky');
  }
}

const headerobserver=new IntersectionObserver(stickynav,{
  root:null,

  threshold:0,
  rootMargin:'-90px',
});

headerobserver.observe(header);

//revealing elements on scroll

const allsections=document.querySelectorAll('.section');

const revelsection=function(entries,observer){
  const[entry]=entries;
  console.log(entry);

entry.target.classList.remove('section--hidden');
}
const sectionobserver=new IntersectionObserver(revelsection,{
root:null,
threshold:0.15,
});

allsections.forEach(function(section){
  sectionobserver.observe(section);
  section.classList.add('section--hidden');
})
;