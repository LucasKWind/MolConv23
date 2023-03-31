
 

document.getElementById('MolSubstance').style.textalign="center";
const MolSubstance = document.getElementById('MolSubstance');
const VolSubstance = document.getElementById('VolSubstance');
const MassSubstance = document.getElementById('MassSubstance');
const PartSubstance = document.getElementById('PartSubstance');
let inputvalue = 0;
let VolVal = 0;
let MassVal = 0;
let MolVal = 0;
let ParVal = 0;
let timer;

MolSubstance.addEventListener("keyup",function(e){
clearTimeout(timer);
timer = setTimeout(() => {
inputvalue = Number(MolSubstance.innerHTML);

VolVal = inputvalue*22.4;

VolSubstance.innerHTML = VolVal;
MassVal = inputvalue*55.85;

MassSubstance.innerhtml = MassVal;
ParVal = inputvalue*6.02e23;

PartSubstance.innerhtml = ParVal;
 alert('Converted values!');
},1000);
});
