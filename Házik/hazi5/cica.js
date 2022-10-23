console.log("-----------Cica feladat-----------");

cirmi = {
    neve: "Cirmi",
    sulya: 4,
    ehes: true
}
class   cica{
    constructor(neve, sulya, ehes){
        this.neve = neve,
        this.sulya = sulya,
        this.ehes = ehes
    }
    
     etetes(){
        let etetes  = document.getElementById("etet").value;
        console.log("Cirmi most "+etetes+"g-ot evett!");
            
        return etetes;
    }
    jatek(sulya){
        /*var ujsuly = null;
        var fogy = -1;
        var fut = document.getElementById("futas");
        if (fut.onclick == true){
            sulya + fogy;
        }
        return ujsuly;
        var sulya = this.sulya;
        var fut = document.getElementById("futas");
        if (onclick(fut)){
            this.sulya + 1;
        }
        return sulya; */
        return{
            sulya,
            cicasuly: function(){
                return "Círmi súlya "+this.sulya;
            }
        }
        
    }
}

console.log(cirmi);
document.getElementById("etetve").innerHTML = "Cirmi súlya: "+cirmi.sulya
document.getElementById("ehes").innerHTML = 
`A Cirmi ${ this.ehes >= 5 ? "Éhes" : "Nem éhes"}`;
console.log(cirmi.sulya);
console.log(cirmi.ehes);

/*
    3. Valósíts meg egy cica osztályt:
        - a következő adatokkal: neve, súlya, és hogy éhes-e (az éhes legyen boolean típusú)
        - Az osztálynak legyen egy eszik metódusa, ami egy float értéket vár (étel mennyisége), 
        és egy boolean-al tér vissza (sikeres volt -e az etetés). Ha a macska éhes, az etetés
        sikeres, és a súlya nőjön az étel mennyiségével. A macska ezután ne legyen éhes. Ha a
        macska nem éhes, az etetés nem sikeres.
        -Az osztálynak legyen egy futkos metódusa, ami nem vár paramétert. A macska
        súlya csökkenjen 0.1-el, és ha nem volt éhes, akkor éhezzen meg.
        
*/