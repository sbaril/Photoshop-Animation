/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/



//Evaluate a file and catch the exception.
function evalFile (path) {
    try {
        $.evalFile(path);
    } catch (e) {
        alert("Exception:" + e);
    }
}



function sayHello(){
    alert("hello from ExendScript");
}
