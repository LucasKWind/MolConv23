document.getElementById('MolSubstance').style.textalign="center";
const MolSubstance = document.querySelector('#MolSubstance');
const VolSubstance = document.querySelector('#VolSubstance');
const MassSubstance = document.querySelector('MassSubstance');
let inputvalue = 0;
let VolVal = 0;
let MassVal = 0;
let MolVal = 0;
let timer;

MolSubstance.addEventListener("keyup",function(e){
clearTimeout(timer);
timer = setTimeout(() => {
inputvalue = +MolSubstance.textcontent
VolVal = inputvalue*22.4
VolSubstance.textcontent = VolVal
MassVal = inputvalue*55.85
},1000);
});
