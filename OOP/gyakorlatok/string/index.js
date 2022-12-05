console.log("string");
var s = "ÁrvíztűrőTükörFúrógÉp";
if (String.prototype.deAccentationHU == undefined)
String.prototype.deAccentationHU = function(){
    var replacedChars = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ö": "o",
        "ő": "o",
        "ú": "u",
        "ű": "u",
        "ü": "u"
    }
    return this.replace(/á|é|í|ő|ö|ó|ú|ű|ü/gi, function(char){
        return char === char.toUpperCase() ? replacedChars[char.toLowerCase()].toUpperCase() : replacedChars[char];
    });
}

String.prototype.deAccentation = function(){
    return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}