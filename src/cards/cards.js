
let divBlock1Not = document.querySelector('.divBlock1Not')
let divBlock2Not = document.querySelector('.divBlock2Not')
let divBlock3Not = document.querySelector('.divBlock3Not')
let divBlock4Not = document.querySelector('.divBlock4Not')
let divBlock5Not = document.querySelector('.divBlock5Not')
let divBlock6Not = document.querySelector('.divBlock6Not')
let CardsBlocks = document.querySelector('.CardsBlocks')
let productsCards1 = document.querySelector('.productsCards1')
let productsCards2 = document.querySelector('.productsCards2')
let productsCards3 = document.querySelector('.productsCards3')
let productsCards4 = document.querySelector('.productsCards4')
let productsCards5 = document.querySelector('.productsCards5')
let productsCards6 = document.querySelector('.productsCards6')
// cards1
productsCards1.addEventListener('click', function(){
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let btn = document.createElement('button')
    let img = document.createElement('img')
    let titles1 = document.createElement('h3')
    let titles2 = document.createElement('h3')
    let titles3 = document.createElement('h3')
    let titles4 = document.createElement('h3')
    let titles5 = document.createElement('h3')
    let img1 = document.createElement('img')
    div.className = 'CardsBlocks1'
    div1.className = 'blocksButton1'
    div2.className = 'cardsBlocksImage'
    div3.className = 'cardsBlocksTabs'
    btn.className = 'divBlock1Not'
    btn.innerHTML = 'X'
    btn.addEventListener('click', function(){
        CardsBlocks.classList.add('anima')
        function blocksNone(){
         CardsBlocks.style.display = 'none'
         CardsBlocks.classList.remove('anima')
         CardsBlocks.innerHTML = ''
        }
        setTimeout(blocksNone,1300)
    })
    img.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/House/build/index.html')
    })
    titles1.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/House/build/index.html')
    })
    titles2.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/House/build/index.html')
    })
    img.src = 'images/products/cards7.png'
    img.className = 'imgBlock1Cards1'
    titles1.innerHTML = 'House'
    titles1.className = 'TitlesBlock1Cards1'
    titles2.innerHTML = 'Paintings from France, England, Germany with a shopping basket'
    titles2.className = 'TextBlock1Cards1'
    titles3.className = 'cardsTabs1'
    titles3.innerHTML = 'JavaScript'
    titles4.className = 'cardsTabs2'
    titles4.innerHTML = 'Css'
    titles5.className = 'cardsTabs3'
    titles5.innerHTML = 'Html'
    img1.src = 'images/products/Dribbble.png'
    img1.className = 'img1Block1Cards1'
    CardsBlocks.appendChild(div)
    div.appendChild(div1)
    div1.appendChild(btn)
    div.appendChild(img)
    div.appendChild(titles1)
    div.appendChild(titles2)
    div.appendChild(div3)
    div3.appendChild(titles3)
    div3.appendChild(titles5)
    div3.appendChild(titles4)
    div.appendChild(div2)
    div2.appendChild(img1)
    CardsBlocks.style.display = 'flex'
})

// cards2
productsCards2.addEventListener('click', function(){
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let btn = document.createElement('button')
    let img = document.createElement('img')
    let titles1 = document.createElement('h3')
    let titles2 = document.createElement('h3')
    let titles3 = document.createElement('h3')
    let titles4 = document.createElement('h3')
    let titles5 = document.createElement('h3')
    let img1 = document.createElement('img')
    div.className = 'CardsBlocks2'
    div1.className = 'blocksButton2'
    div2.className = 'cardsBlocks1Image'
    div3.className = 'cardsBlocks1Tabs'
    btn.className = 'divBlock2Not'
    btn.innerHTML = 'X'
    btn.addEventListener('click', function(){
        CardsBlocks.classList.add('anima')
        function blocksNone(){
         CardsBlocks.style.display = 'none'
         CardsBlocks.classList.remove('anima')
         CardsBlocks.innerHTML = ''
        }
        setTimeout(blocksNone,1300)
        
    })
    img.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/auto-parts/build/')
    })
    titles1.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/auto-parts/build/')
    })
    titles2.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/auto-parts/build/')
    })
    img.src = 'images/products/cards1.png'
    img.className = 'imgBlock1Cards2'
    titles1.innerHTML = 'Spare parts store'
    titles1.className = 'TitlesBlock1Cards2'
    titles2.innerHTML = 'Shop of spare parts for cars, any taste and color'
    titles2.className = 'TextBlock1Cards2'
    titles3.className = 'cards2Tabs1'
    titles3.innerHTML = 'JavaScript'
    titles4.className = 'cards2Tabs2'
    titles4.innerHTML = 'Css'
    titles5.className = 'cards2Tabs3'
    titles5.innerHTML = 'Html'
    img1.src = 'images/products/Dribbble.png'
    img1.className = 'img1Block1Cards2'
    CardsBlocks.appendChild(div)
    div.appendChild(div1)
    div1.appendChild(btn)
    div.appendChild(img)
    div.appendChild(titles1)
    div.appendChild(titles2)
    div.appendChild(div3)
    div3.appendChild(titles3)
    div3.appendChild(titles5)
    div3.appendChild(titles4)
    div.appendChild(div2)
    div2.appendChild(img1)
    CardsBlocks.style.display = 'flex'
})

// cards3
productsCards3.addEventListener('click', function(){
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let btn = document.createElement('button')
    let img = document.createElement('img')
    let titles1 = document.createElement('h3')
    let titles2 = document.createElement('h3')
    let titles3 = document.createElement('h3')
    let titles4 = document.createElement('h3')
    let titles5 = document.createElement('h3')
    let img1 = document.createElement('img')
    div.className = 'CardsBlocks3'
    div1.className = 'blocksButton3'
    div2.className = 'cardsBlocks2Image'
    div3.className = 'cardsBlocks2Tabs'
    btn.className = 'divBlock3Not'
    btn.innerHTML = 'X'
    btn.addEventListener('click', function(){
        CardsBlocks.classList.add('anima')
        function blocksNone(){
         CardsBlocks.style.display = 'none'
         CardsBlocks.classList.remove('anima')
         CardsBlocks.innerHTML = ''
        }
        setTimeout(blocksNone,1300)
        
    })
    img.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/basket/build/index.html')
    })
    titles1.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/basket/build/index.html')
    })
    titles2.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/basket/build/index.html')
    })
    img.src = 'images/products/cards5.png'
    img.className = 'imgBlock1Cards3'
    titles1.innerHTML = 'Basket'
    titles1.className = 'TitlesBlock1Cards3'
    titles2.innerHTML = 'Products that can be added to the cart'
    titles2.className = 'TextBlock1Cards3'
    titles3.className = 'cards3Tabs1'
    titles3.innerHTML = 'JavaScript'
    titles4.className = 'cards3Tabs2'
    titles4.innerHTML = 'Css'
    titles5.className = 'cards3Tabs3'
    titles5.innerHTML = 'Html'
    img1.src = 'images/products/Dribbble.png'
    img1.className = 'img1Block1Cards3'
    CardsBlocks.appendChild(div)
    div.appendChild(div1)
    div1.appendChild(btn)
    div.appendChild(img)
    div.appendChild(titles1)
    div.appendChild(titles2)
    div.appendChild(div3)
    div3.appendChild(titles3)
    div3.appendChild(titles5)
    div3.appendChild(titles4)
    div.appendChild(div2)
    div2.appendChild(img1)
    CardsBlocks.style.display = 'flex'
})

// cards4
productsCards4.addEventListener('click', function(){
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let btn = document.createElement('button')
    let img = document.createElement('img')
    let titles1 = document.createElement('h3')
    let titles2 = document.createElement('h3')
    let titles3 = document.createElement('h3')
    let titles4 = document.createElement('h3')
    let titles5 = document.createElement('h3')
    let img1 = document.createElement('img')
    div.className = 'CardsBlocks4'
    div1.className = 'blocksButton4'
    div2.className = 'cardsBlocks3Image'
    div3.className = 'cardsBlocks3Tabs'
    btn.className = 'divBlock4Not'
    btn.innerHTML = 'X'
    btn.addEventListener('click', function(){
        CardsBlocks.classList.add('anima')
        function blocksNone(){
         CardsBlocks.style.display = 'none'
         CardsBlocks.classList.remove('anima')
         CardsBlocks.innerHTML = ''
        }
        setTimeout(blocksNone,1300)
        
    })
    img.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/servis-it/build/index.html')
    })
    titles1.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/servis-it/build/index.html')
    })
    titles2.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/servis-it/build/index.html')
    })
    img.src = 'images/products/cards2.png'
    img.className = 'imgBlock1Cards4'
    titles1.innerHTML = 'Website about it'
    titles1.className = 'TitlesBlock1Cards4'
    titles2.innerHTML = 'A course for a programmer, with a good mentor'
    titles2.className = 'TextBlock1Cards4'
    titles3.className = 'cards4Tabs1'
    titles3.innerHTML = 'JavaScript'
    titles4.className = 'cards4Tabs2'
    titles4.innerHTML = 'Css'
    titles5.className = 'cards4Tabs3'
    titles5.innerHTML = 'Html'
    img1.src = 'images/products/Dribbble.png'
    img1.className = 'img1Block1Cards4'
    CardsBlocks.appendChild(div)
    div.appendChild(div1)
    div1.appendChild(btn)
    div.appendChild(img)
    div.appendChild(titles1)
    div.appendChild(titles2)
    div.appendChild(div3)
    div3.appendChild(titles3)
    div3.appendChild(titles5)
    div3.appendChild(titles4)
    div.appendChild(div2)
    div2.appendChild(img1)
    CardsBlocks.style.display = 'flex'
})

// cards5
productsCards5.addEventListener('click', function(){
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let btn = document.createElement('button')
    let img = document.createElement('img')
    let titles1 = document.createElement('h3')
    let titles2 = document.createElement('h3')
    let titles3 = document.createElement('h3')
    let titles4 = document.createElement('h3')
    let titles5 = document.createElement('h3')
    let img1 = document.createElement('img')
    div.className = 'CardsBlocks5'
    div1.className = 'blocksButton4'
    div2.className = 'cardsBlocks4Image'
    div3.className = 'cardsBlocks4Tabs'
    btn.className = 'divBlock5Not'
    btn.innerHTML = 'X'
    btn.addEventListener('click', function(){
        CardsBlocks.classList.add('anima')
        function blocksNone(){
         CardsBlocks.style.display = 'none'
         CardsBlocks.classList.remove('anima')
         CardsBlocks.innerHTML = ''
        }
        setTimeout(blocksNone,1300)
        
    })
    img.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/list-Product/')
    })
    titles1.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/list-Product/')
    })
    titles2.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/list-Product/')
    })
    img.src = 'images/products/cards6.png'
    img.className = 'imgBlock1Cards5'
    titles1.innerHTML = 'Shopping list'
    titles1.className = 'TitlesBlock1Cards5'
    titles2.innerHTML = 'Website for shopping, and other goods'
    titles2.className = 'TextBlock1Cards5'
    titles3.className = 'cards5Tabs1'
    titles3.innerHTML = 'JavaScript'
    titles4.className = 'cards5Tabs2'
    titles4.innerHTML = 'Css'
    titles5.className = 'cards5Tabs3'
    titles5.innerHTML = 'Html'
    img1.src = 'images/products/Dribbble.png'
    img1.className = 'img1Block1Cards5'
    CardsBlocks.appendChild(div)
    div.appendChild(div1)
    div1.appendChild(btn)
    div.appendChild(img)
    div.appendChild(titles1)
    div.appendChild(titles2)
    div.appendChild(div3)
    div3.appendChild(titles3)
    div3.appendChild(titles5)
    div3.appendChild(titles4)
    div.appendChild(div2)
    div2.appendChild(img1)
    CardsBlocks.style.display = 'flex'
})

// cards6
productsCards6.addEventListener('click', function(){
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let btn = document.createElement('button')
    let img = document.createElement('img')
    let titles1 = document.createElement('h3')
    let titles2 = document.createElement('h3')
    let titles3 = document.createElement('h3')
    let titles4 = document.createElement('h3')
    let titles5 = document.createElement('h3')
    let img1 = document.createElement('img')
    div.className = 'CardsBlocks6'
    div1.className = 'blocksButton5'
    div2.className = 'cardsBlocks5Image'
    div3.className = 'cardsBlocks5Tabs'
    btn.className = 'divBlock6Not'
    btn.innerHTML = 'X'
    btn.addEventListener('click', function(){
        CardsBlocks.classList.add('anima')
        function blocksNone(){
         CardsBlocks.style.display = 'none'
         CardsBlocks.classList.remove('anima')
         CardsBlocks.innerHTML = ''
        }
        setTimeout(blocksNone,1300)
        
    })
    img.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/random-quotes/случайные%20цитаты/index.html')
    })
    titles1.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/random-quotes/случайные%20цитаты/index.html')
    })
    titles2.addEventListener('click',function(){
        window.open('https://maksimka241e.github.io/random-quotes/случайные%20цитаты/index.html')
    })
    img.src = 'images/products/cards4.png'
    img.className = 'imgBlock1Cards6'
    titles1.innerHTML = 'Random quotes'
    titles1.className = 'TitlesBlock1Cards6'
    titles2.innerHTML = 'A site with random quotes of great people'
    titles2.className = 'TextBlock1Cards6'
    titles3.className = 'cards6Tabs1'
    titles3.innerHTML = 'JavaScript'
    titles4.className = 'cards6Tabs2'
    titles4.innerHTML = 'Css'
    titles5.className = 'cards6Tabs3'
    titles5.innerHTML = 'Html'
    img1.src = 'images/products/Dribbble.png'
    img1.className = 'img1Block1Cards6'
    CardsBlocks.appendChild(div)
    div.appendChild(div1)
    div1.appendChild(btn)
    div.appendChild(img)
    div.appendChild(titles1)
    div.appendChild(titles2)
    div.appendChild(div3)
    div3.appendChild(titles3)
    div3.appendChild(titles5)
    div3.appendChild(titles4)
    div.appendChild(div2)
    div2.appendChild(img1)
    CardsBlocks.style.display = 'flex'
})