const $cards = document.querySelector(".cards")
console.log($cards)
console.log($cards.children)
console.log($cards.childNodes)
console.log($cards.children(2))
console.log($cards.parentElement) //father
console.log($cards.parentNode) //elemnt is a node
console.log($cards.firstChild) //text => enter \n 
console.log($cards.lastChild)  
console.log($cards.previousSibling) //brother space
console.log($cards.previousElementSibling) //brother tag
console.log($cards.nextElementSibling)
console.log($cards.closest("div")) // ancestor, upwards there is no
console.log($cards.children[3].closest("section"))
//10:00