function post ()
{
// Front and Back End

// Inputs
let pokemon= document.getElementById("pokemon").value;
let num= document.getElementById("num").value;
let type= document.getElementById("type").value;
let type2= document.getElementById("type2").value;
let hp= document.getElementById("hp").value;
let atk= document.getElementById("atk").value;
let def= document.getElementById("def").value;
let spa= document.getElementById("spa").value;
let spd= document.getElementById("spd").value;
let spe= document.getElementById("spe").value;
let abe= document.getElementById("abe").value;
let abedesc = document.getElementById("abedesc").value;
let wt= document.getElementById("wt").value;
let comp= document.getElementById("comp").value;

// Ability code
let abedescription = `(${abedesc})`;

let abesmall = abe.toLowerCase();
let abecode = `abilities.js <br>[CODE=javascript]${abesmall}: { // Remove spacing in the ability name (Onto the left) if applicable<br>shortDesc:&quot;${abedesc}&quot;,<br>id: ${abesmall}, <br> name: &quot;${abe}&quot;, <br>// Code[/CODE]<br>},`;

if (abedesc === "") {
abedescription = "";
abecode = "";
}

// Learnsets code
let newmove1 = document.getElementById("newmove1").value;
let newmove2 = document.getElementById("newmove2").value;
let newmove3 = document.getElementById("newmove3").value;
let newmove4 = document.getElementById("newmove4").value;

let nm1 = newmove1.toLowerCase();
let nm2 = newmove2.toLowerCase();
let nm3 = newmove3.toLowerCase();
let nm4 = newmove4.toLowerCase();

if (newmove1 === "") {
nm1 = "N/A";
}

if (nm1 === "N/A") {
nm1 = `// Ignore learnsets.js (Don't copy the whole learnsets.js if you see this message)`
}
if (nm2 === "") {
nm2 = `// Remove this line`
}
if (nm3 === "") {
nm3 = `// Remove this line`
}
if (nm4 === "") {
nm4 = `// Remove this line`
}

let learncode = `learnsets.js <br>[CODE=javascript]${nm1}: [&quot;6L1&quot;], <br> ${nm2}: [&quot;6L1&quot;], <br> ${nm3}: [&quot;6L1&quot;], <br> ${nm4}: [&quot;6L1&quot;],[/CODE]<br>`;
if (nm1 === "// Ignore learnsets.js (Don't copy the whole learnsets.js if you see this message)") {
learncode = "";
}

// Stats modification regulator

let oldatk= document.getElementById("oldatk").value;
let olddef= document.getElementById("olddef").value;
let oldspa= document.getElementById("oldspa").value;
let oldspd= document.getElementById("oldspd").value;
let oldspe= document.getElementById("oldspe").value;

let modatk = atk - oldatk;
let moddef = def - olddef;
let modspa = spa - oldspa;
let modspd = spd - oldspd;
let modspe = spe - oldspe;

let dmodatk = modatk;
if (atk > oldatk) {
dmodatk = `&#43;${dmodatk}`;
}
let dmoddef = moddef;
if (def > olddef) {
dmoddef = `&#43;${dmoddef}`;
}
let dmodspa = modspa;
if (spa > oldspa) {
dmodspa = `&#43;${dmodspa}`;
}
let dmodspd = modspd;
if (spd > oldspd) {
dmodspd = `&#43;${dmodspd}`;
}
let dmodspe = modspe;
if (spe > oldspe) {
dmodspe = `&#43;${dmodspe}`;
}

let totalmod = modatk + moddef + modspa + modspd + modspe;
let modify = 100 - totalmod;
if (totalmod > 100) {
msg = `<span class=mod>The net stat gain is more than 100, reduce by ${modify} from the current distribution.</span>`;
}
else if (totalmod === 100) {
msg = ""
}
else if (totalmod < 100) {
msg = `<span class=mod>The net stat gain is less than 100, add ${modify} in the current distribution.</span>`;
}

// Defaults and casing

let poke = pokemon.toLowerCase();
let t1 = type.toLowerCase();
let t2 = type2;
if (type2 === "") {
type2 = "],";
}
else {
type2 = ", &quot;"+type2+" &quot;],";
}
if (wt === "") {
wt = "100";
}
if (newmove1 === "") {
newmove1 = "N/A";
}


document.getElementById("xd").innerHTML = ""+msg+"<br>[IMG]http://play.pokemonshowdown.com/sprites/xyani/"+poke+".gif[/IMG]<br>[IMG]http://play.pokemonshowdown.com/sprites/types/"+type+".png[/IMG][IMG]http://play.pokemonshowdown.com/sprites/types/"+t2+".png[/IMG]<br>[B]Mega "+pokemon+"[/B] <br>[B]Ability:[/B] "+abe+" "+abedescription+"<br>[B]HP:[/B] "+hp+" <br> [I][B]Atk:[/B][/I] "+oldatk+" ---> "+atk+" [I]("+dmodatk+")[/I] <br>[I][B]Def:[/B][/I] "+olddef+" ---> "+def+" [I]("+dmoddef+")[/I] <br>[I][B]SpA:[/B][/I] "+oldspa+" ---> "+spa+" [I]("+dmodspa+")[/I]<br>[I][B]SpD:[/B][/I] "+oldspd+" ---> "+spd+" [I]("+dmodspd+")[/I] <br>[I][B]Spe:[/B][/I] "+oldspe+" ---> "+spe+" [I]("+dmodspe+")[/I]<br> [B]Weight:[/B] "+wt+" kg<br>[B]New Moves:[/B] "+newmove1+", "+newmove2+", "+newmove3+", "+newmove4+", <br>[B]Description:[/B]  "+comp+"<br><br><div class=code>[hide=Code]pokedex.js <br> [CODE=javascript]"+poke+"mega: {<br>num: "+num+", <br>species: "+pokemon+"-Mega, <br>baseSpecies: "+pokemon+", <br>forme: Mega, <br> formeLetter: M, <br>types:[&quot;"+type+"&quot;"+type2+"<br> baseStats: {hp:"+hp+", atk: "+atk+", def, "+def+", spa: "+spa+", spd: "+spd+", spe: "+spe+"} <br>abilities: {0: &quot;"+abe+"&quot;}, <br>weightkg: "+wt+", <br>evoLevel: 1,<br>}, [/CODE]<br> <br> items.js <br>[CODE=javascript]"+poke+"ite: { <br>id: &quot;"+poke+"ite&quot;,<br>name: &quot;"+pokemon+"ite, <br> spritenum: 612, <br> megaStone: &quot;"+pokemon+"-Mega&quot;, <br>megaEvolves: &quot;"+pokemon+"&quot;,<br>onTakeItem: function (item, source) { <br> if (item.megaEvolves === source.baseTemplate.baseSpecies} return false; <br> return true; <br> }, <br>num: 760, <br> gen: 7, <br>desc: &quot;If holder is a "+pokemon+", this item allows it to mega evolve in battle.&quot; <br> },[/CODE]<br><br>formats-data.js<br>[CODE=javascript]"+poke+":<br>randomBattleMoves: [], <br>randomDoublesBattleMoves: [], <br>requiredItem: &quot;"+pokemon+"ite&quot;,<br>tier: &quot;OU&quot;,<br>},[/CODE]<br><br>"+abecode+"<br><br>"+learncode+"[/hide]</div>";
}
