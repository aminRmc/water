let btn = document.querySelectorAll(`.btn`)
let btnTab = Array.from(btn)
let water = document.querySelector(`#water`)
let h 
let text = document.querySelector(`h2`)
let l 
let pour = document.querySelector(`h4`)
let pourcent 
let final = document.querySelector(`#finalGlasse`) 


btnTab.forEach(element => {
    element.addEventListener(`click`,()=>{  
        h = 0
        l = 2,5
        pourcent = 0,0
      btnTab.forEach(element => {
        element.style.background = `white`
        
      });
        for (let index = 0; index < btnTab.indexOf(element)+1; index++) {
        btnTab[index].style.background = `rgb(122, 178, 226)`
        h += 31.2
        l -= 0.25
        pourcent += 12.5
        }
        water.style.height = `${h}px`
        text.innerHTML = `${l} L`
        pour.innerText = `${pourcent} %`
        
    })
   
});
console.log(final);
final.addEventListener(`dblclick`,()=>{

 
  water.style.height = `0px`
  text.innerHTML = `2.00 L`
  pour.innerText = `0.0%`
  final.style.animation=` rotate 2s normal linear`  
  water.style.transition = `3s`
  btnTab.forEach(element => {
    element.style.background = `white`
    })
    
       
})

