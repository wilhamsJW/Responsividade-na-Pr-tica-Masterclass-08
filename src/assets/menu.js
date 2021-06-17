// Menu responsivo

// let show = true
// const menuSection = document.querySelector('.menu-section')
// const menuToggle = menuSection.querySelector('.menu-toggle')

// classList.toggle = É nativo do JS e serve para alterar class, ele altera a class para on e off ou true e false dinamicamente após escutar um determinado evento que nesse caso usamos o clik

// menuToggle.addEventListener('click', () => {
  
  
  // menuSection.classList.toggle('on', show)
  // show = !show;
  // document.body.style.overflow = !show ? "hidden" : 'initial'
  
//   Tratamento para que quando estiver com o menu acionado não se possa rolar a tela para baixo, para isso usamos uma propriedade do css chamada overflow: hidden; usamos ela diretamente no body
//   Armazenei o resultado do classList.toggle dentro de uma var chamada on, pq isso me trará um resultado boolean, e estou usando essa var para setar meu body com um if ternário, o nome é initial é padrão do css mas poderia se vazio ou qq outro nome
  
// })


// Menu responsivo parte - Forma mais enxuta de fazer

const menuSection = document.querySelector('.menu-section') // class q vai ser a

menuSection.addEventListener('click', () => {
  var on = menuSection.classList.toggle('on')
  document.body.style.overflow = on ? 'hidden' : 'initial'
})