let output = document.querySelector(".grid_right")

// prototyped 
let prototyped = document.querySelector("#a")
let prototypedArray = ["assets/p_3.jpg", "assets/p_1.png", "assets/p_2.png"]
let currentIndex = 0;


prototyped.addEventListener("click", ()=>{
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
    prototyped.classList.add("green")

    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>Prototyped is an ongoing online anthology of design works shared and collected amongst its community. The archive aims to allow designers to get access and inspiration from unusual and secluded works.
    <br>
    <br>
    <a href="https://aprilhoff.github.io/prototyped/index.html" target="_blank">check out the live site here</a>
    </p>
    <img id="proto-img" src="${prototypedArray[currentIndex]}" alt="">
`

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
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";

    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>This project was inspired by a book I purchased, which featured 66 of Hans Holbein's woodcuts from his series, The Dance of Death. Using Holbein's woodcuts as templates, I’ve created a digital version of the cards, preserving the historical essence of these powerful images while introducing contemporary elements. Through a website interface, users are invited to engage with the cards in a way that invites personal reflection on their own mortality.
    <br>
    <br>
    <a href="http://hoffa617.interactive.rodeo/studio/projects/Input_Output/index.html" target="_blank">check out the live site here</a>
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
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
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
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
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
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
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
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>Carving Our Future is an auction event that aims to raise funds in support of Women's Reproductive Rights in the US. Hosted at the Leslie-Lohman Museum of Art, this event brings together a diverse group of eighteen female artists based in New York, each contributing unique sculptural works that pay homage to the ancient Venus Figurines.</p>
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

// manifesto poster


let manifesto = document.querySelector("#g")
let manifestoArray = ["assets/manifesto_3.png","assets/manifesto_2.png"]
let manifestoIndex = 0;


manifesto.addEventListener("click", ()=>{
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>The Manifesto Poster project chooses a historical manifesto and creates two typographic posters in reference to the the context of the manifesto. Sister Corita Kent’s Ten Rules For Students and Teachers, written in the late 60s, reimagines the learning enviroment as a creative space. Made in collaboration with her students, Kent’s rules covey a harsh, honest and inspiring feeling. 
    </p>
    <img id="carve-img" src="${manifestoArray[manifestoIndex]}" alt="">
`
    manifesto.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        manifestoIndex = (manifestoIndex + 1) % manifestoArray.length;
        document.getElementById("carve-img").src = manifestoArray[manifestoIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        manifestoIndex = (manifestoIndex - 1 + manifestoArray.length) % manifestoArray.length;
        document.getElementById("carve-img").src = manifestoArray[manifestoIndex];
    });
})

// style is not a 4 letter word



let style = document.querySelector("#h")
let styleArray = ["assets/style_1.gif", "assets/style_2.png", "assets/style_3.png", "assets/style_4.png"]
let styleIndex = 0;


style.addEventListener("click", ()=>{
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>Using excerpts from Mr Keedy's essay Style Is Not A Four Letter Word, Text On Web aims to physically depict what it is like to experience lack of stylisation and hyper ornamentation. This website does not have an opinion, it allows the readers to form one themselves or maybe even remain just as clueless as they did before the experience.
    <br>
    <br>
    <a href="http://hoffa617.interactive.rodeo/studio/projects/Text_On_Web/index.html" target="_blank">check out the live site here</a>
    </p>
    <img id="carve-img" src="${styleArray[styleIndex]}" alt="">
`
    style.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        styleIndex = (styleIndex + 1) % styleArray.length;
        document.getElementById("carve-img").src = styleArray[styleIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        styleIndex = (styleIndex - 1 + styleArray.length) % styleArray.length;
        document.getElementById("carve-img").src = styleArray[styleIndex];
    });
})



// jewelry


let cad = document.querySelector("#i")
let cadArray = ["assets/j_1.png", "assets/j_2.png", "assets/j_3.png", "assets/j_4.png", "assets/j_5.png"]
let cadIndex = 0;


cad.addEventListener("click", ()=>{
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <p>Collar Necklace created in Rhino and casted in Sterling Silver. *conceptual branding added as well

    </p>
    <img id="carve-img" src="${cadArray[cadIndex]}" alt="">
`
    cad.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        cadIndex = (cadIndex + 1) % cadArray.length;
        document.getElementById("carve-img").src = cadArray[cadIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        cadIndex = (cadIndex - 1 + cadArray.length) % cadArray.length;
        document.getElementById("carve-img").src = cadArray[cadIndex];
    });
})


// show some solidarity


let show = document.querySelector("#j")
let showArray = ["assets/s_1.png", "assets/s_2.png", "assets/s_3.png"]
let showIndex = 0;


show.addEventListener("click", ()=>{
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <img id="carve-img" src="${showArray[showIndex]}" alt="">
`
    show.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        showIndex = (showIndex + 1) % showArray.length;
        document.getElementById("carve-img").src = showArray[showIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        showIndex = (showIndex - 1 + showArray.length) % showArray.length;
        document.getElementById("carve-img").src = showArray[showIndex];
    });
})




// 3D work


let three = document.querySelector("#k")
let threeArray = ["assets/3_1.png", "assets/3_2.png", "assets/3_4.png"]
let threeIndex = 0;


three.addEventListener("click", ()=>{
    document.querySelectorAll(".green").forEach(el => el.classList.remove("green"));
    output.innerHTML = "";
    output.innerHTML += `
    <div class="nav">
    <h1 class="back"><</h1>
    <h1 class="next">></h1>
    </div>
    <img id="carve-img" src="${threeArray[threeIndex]}" alt="">
`
    three.classList.add("green")

    document.querySelector(".next").addEventListener("click", () => {
        threeIndex = (threeIndex + 1) % threeArray.length;
        document.getElementById("carve-img").src = threeArray[threeIndex];
    });
    document.querySelector(".back").addEventListener("click", () => {
        threeIndex = (threeIndex - 1 + threeArray.length) % threeArray.length;
        document.getElementById("carve-img").src = threeArray[threeIndex];
    });
})










