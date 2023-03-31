
 

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
 removeinteg = MolSubstance.value.replace(/\D/g, '');
inputvalue = Number(removeinteg);

VolVal = inputvalue*22.4;

VolSubstance.value = VolVal.toFixed(2)+"L";
MassVal = inputvalue*55.85;

MassSubstance.value = MassVal+"g";
ParVal = inputvalue*6.02e23;

PartSubstance.value = ParVal.toFixed(2)+"particles";
},100);
});

VolSubstance.addEventListener("keyup",function(r){
clearTimeout(timer1);
timer1 = setTimeout(() => {
 removeinteg = VolSubstance.value.replace(/\D/g, '');
inputvalue = Number(removeinteg);

MolVal = inputvalue/22.4;

MolSubstance.value = MolVal.toFixed(2)+"mol";
MassVal = MolVal*55.85;

MassSubstance.value = MassVal.toFixed(2)+"g";
ParVal = MolVal*6.02e23;

PartSubstance.value = ParVal.toFixed(2)+"particles";
},100);
});


MassSubstance.addEventListener("keyup",function(t){
clearTimeout(timer2);
timer2 = setTimeout(() => {
 removeinteg = MassSubstance.value.replace(/\D/g, '');
inputvalue = Number(removeinteg);

MolVal = inputvalue/55.85;

MolSubstance.value = MolVal.toFixed(2)+"mol";
VolVal = MolVal*22.4;

VolSubstance.value = VolVal.toFixed(2)+"L";
ParVal = MolVal*6.02e23;

PartSubstance.value = ParVal.toFixed(2)+"particles";
},100);
});

PartSubstance.addEventListener("keyup",function(y){
clearTimeout(timer3);
timer3 = setTimeout(() => {
 removeinteg = PartSubstance.value.replace(/\D/g, '');
inputvalue = Number(removeinteg);

MolVal = inputvalue/6.02e23;

MolSubstance.value = MolVal.toFixed(2)+"mol";
VolVal = MolVal*22.4;

VolSubstance.value = VolVal.toFixed(2)+"L";
MassVal = MolVal*55.85;

MassSubstance.value = MassVal.toFixed(2)+"g";
},100);
});
