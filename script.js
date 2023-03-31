import System = require('systemjs');

System.config({
  ...
});

System.import(...);

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
System.out.println(inputvalue);
VolVal = inputvalue*22.4;
System.out.println(VolVal);
VolSubstance.innerHTML = VolVal;
MassVal = inputvalue*55.85;
System.out.println(MassVal);
MassSubstance.innerhtml = MassVal;
ParVal = inputvalue*6.02e23;
System.out.println(ParVal);
PartSubstance.innerhtml = ParVal;
 alert('Converted values!');
},1000);
});
