document.getElementById('MolSubstance').style.textalign="center";
const MolSubstance = document.querySelector('#MolSubstance');
const VolSubstance = document.querySelector('#VolSubstance');
const MassSubstance = document.querySelector('MassSubstance');
let subvalue = "";
let inputvalue = 0;
let VolVal = 0;
let MassVal = 0;
let MolVal = 0;
let timer;

MolSubstance.addEventListener("keyup",function(e){
clearTimeout(timer);
timer = setTimeout(() => {
inputvalue = +MolSubstance.textcontent.substr(1,4);
subvalue = MolSubstance.textcontent.substr(5,20);
VolVal = inputvalue*22.4
VolSubstance.textcontent = VolVal

},1000);
});
