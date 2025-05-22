let output = document.querySelector(".grid_right")

// prototyped 
let prototyped = document.querySelector("#a")
let prototypedArray = ["assets/p_3.jpg", "assets/p_1.png", "assets/p_2.png"]
let currentIndex = 0;


prototyped.addEventListener("click", ()=>{
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>Prototyped is an ongoing online anthology of design works shared and collected amongst its community. The archive aims to allow designers to get access and inspiration from unusual and secluded works.
    <br>
    <br>
    check out the live site here
    </p>
    <img id="proto-img" src="${prototypedArray[currentIndex]}" alt="">
`
    prototyped.classList.add("green")

     document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % prototypedArray.length;
        document.getElementById("proto-img").src = prototypedArray[currentIndex];
    });

    document.querySelector(".back").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + prototypedArray.length) % prototypedArray.length;
        document.getElementById("proto-img").src = prototypedArray[currentIndex];
    });
})



// dance 
let dance = document.querySelector("#b")
let danceArray = ["assets/d_2.png", "assets/d_1.gif"]
let danceIndex = 0;


dance.addEventListener("click", ()=>{
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>This project was inspired by a book I purchased, which featured 66 of Hans Holbein's woodcuts from his series, The Dance of Death. Using Holbein's woodcuts as templates, I’ve created a digital version of the cards, preserving the historical essence of these powerful images while introducing contemporary elements. Through a website interface, users are invited to engage with the cards in a way that invites personal reflection on their own mortality.
    <br>
    <br>
    check out the live site here
    </p>
    <img id="dance-img" src="${danceArray[danceIndex]}" alt="">
`
    dance.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        danceIndex = (danceIndex + 1) % danceArray.length;
        document.getElementById("dance-img").src = danceArray[danceIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        danceIndex = (danceIndex - 1 + danceArray.length) % danceArray.length;
        document.getElementById("dance-img").src = danceArray[danceIndex];
    });
})


// wikibook

let wiki = document.querySelector("#c")
let wikiArray = ["assets/r_1.png", "assets/r_2.png", "assets/r_3.png"]
let wikiIndex = 0;


wiki.addEventListener("click", ()=>{
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>Wikibook project uses the content from one of Wikipedia’s longest pages and translates the infromation into a book. Russia’s Invasion Of Ukraine served as an excellent basis for both a typographically provocative and highly personal Wikibook. I took it upon myself to highlight the monstrosities acted by Russia through typography. 

    </p>
    <img id="wiki-img" src="${wikiArray[wikiIndex]}" alt="">
`
    wiki.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        wikiIndex = (wikiIndex + 1) % wikiArray.length;
        document.getElementById("wiki-img").src = wikiArray[wikiIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        wikiIndex = (wikiIndex - 1 + wikiArray.length) % wikiArray.length;
        document.getElementById("wiki-img").src = wikiArray[wikiIndex];
    });
})


// venn diagram 

let venn = document.querySelector("#d")
let vennArray = ["assets/h_1.png", "assets/h_2.png", "assets/h_3.png"]
let vennIndex = 0;


venn.addEventListener("click", ()=>{
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>Home is a Venn Diagram explores the amalgamation of two contrasting yet eerily similar cultures that shape my identity. As a Global Nomad, I often find myself torn between a sense of belonging everywhere and nowhere at once. This inherent tension forms the foundation of this project, one marked by differing cultural influences that merge to make me. 

    </p>
    <img id="venn-img" src="${vennArray[vennIndex]}" alt="">
`
    venn.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        vennIndex = (vennIndex + 1) % vennArray.length;
        document.getElementById("venn-img").src = vennArray[vennIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        vennIndex = (vennIndex - 1 + vennArray.length) % vennArray.length;
        document.getElementById("venn-img").src = vennArray[vennIndex];
    });
})


// mothers mother


let mom = document.querySelector("#e")
let momArray = ["assets/mom_1.jpeg", "assets/mom_2.jpeg", "assets/mom_3.jpeg"]
let momIndex = 0;


mom.addEventListener("click", ()=>{
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <img id="mom-img" src="${momArray[momIndex]}" alt="">
`
    mom.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        momIndex = (momIndex + 1) % momArray.length;
        document.getElementById("mom-img").src = momArray[momIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        momIndex = (momIndex - 1 + momArray.length) % momArray.length;
        document.getElementById("mom-img").src = momArray[momIndex];
    });
})

// carving our Future 


let carve = document.querySelector("#f")
let carveArray = ["assets/c_1.png", "assets/c_2.png","assets/c_3.png","assets/c_4.png","assets/c_5.png","assets/c_6.png"]
let carveIndex = 0;


carve.addEventListener("click", ()=>{
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <img id="carve-img" src="${carveArray[carveIndex]}" alt="">
`
    carve.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        carveIndex = (carveIndex + 1) % carveArray.length;
        document.getElementById("carve-img").src = carveArray[carveIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        carveIndex = (carveIndex - 1 + carveArray.length) % carveArray.length;
        document.getElementById("carve-img").src = carveArray[carveIndex];
    });
})