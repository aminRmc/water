let btn = document.querySelectorAll(`.btn`)
let btnTab = Array.from(btn)



btnTab.forEach(element => {
    element.addEventListener(`click`,()=>{  
        
      btnTab.forEach(element => {
        element.style.background = `white`
        
      });
        for (let index = 0; index < btnTab.indexOf(element)+1; index++) {
        btnTab[index].style.background = `rgb(122, 178, 226)`
        }
    })
});