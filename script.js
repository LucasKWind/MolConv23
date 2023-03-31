
 

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
let timer1;
let timer2;
let timer3;

MolSubstance.addEventListener("keyup",function(e){
clearTimeout(timer);
timer = setTimeout(() => {
inputvalue = Number(MolSubstance.value);

VolVal = inputvalue*22.4;

VolSubstance.value = VolVal;
MassVal = inputvalue*55.85;

MassSubstance.value = MassVal;
ParVal = inputvalue*6.02e23;

PartSubstance.value = ParVal;
 alert('Converted values!');
},1000);
});

VolSubstance.addEventListener("keyup",function(r){
clearTimeout(timer1);
timer1 = setTimeout(() => {
inputvalue = Number(VolSubstance.value);

MolVal = inputvalue/22.4;

MolSubstance.value = MolVal;
MassVal = MolVal*55.85;

MassSubstance.value = MassVal;
ParVal = MolVal*6.02e23;

PartSubstance.value = ParVal;
 alert('Converted values!');
},1000);
});


MassSubstance.addEventListener("keyup",function(t){
clearTimeout(timer2);
timer2 = setTimeout(() => {
inputvalue = Number(MassSubstance.value);

MolVal = inputvalue/55.85;

MolSubstance.value = MolVal;
VolVal = MolVal*22.4;

VolSubstance.value = VolVal;
ParVal = MolVal*6.02e23;

PartSubstance.value = ParVal;
 alert('Converted values!');
},1000);
});

PartSubstance.addEventListener("keyup",function(y){
clearTimeout(timer3);
timer3 = setTimeout(() => {
inputvalue = Number(PartSubstance.value);

MolVal = inputvalue/6.02e23;

MolSubstance.value = MolVal;
VolVal = MolVal*22.4;

VolSubstance.value = VolVal;
MassVal = MolVal*55.85;

MassSubstance.value = MassVal;
 alert('Converted values!');
},1000);
});
