//jeigu nera isaugotas vidutinis zingsnio ilgis
if(localStorage.getItem("zingsnioIlgis") != null){
    //patikrinme ar yra elementas id atstumasInput
    if(document.querySelector('#zingsnioIlgisInput') != null){
        //isaugome atstuma kuri ivede vartotojas
        document.querySelector('#zingsnioIlgisInput').value = localStorage.getItem("zingsnioIlgis");
    }
}else{
    //jei nieko neivesta numatytoji reiksme bus 0.85m
    localStorage.setItem("zingsnioIlgis", 0.85);
}
//isaugome atstuma kuri ivede vartotojas
function issaugotiAtstuma() {
    let atstumas = document.getElementById("zingsnioIlgisInput").value;
    localStorage.setItem("zingsnioIlgis", atstumas);
}