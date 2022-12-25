 /* classes go here */
let newQuery = function(fileName) {
    let query = new XMLHttpRequest();
    fileName = "functions\${fileName}";
    query.open("GET",fileName);
    return query;
};
class setFontWeight {
    initialize = 1;
    constructor() {
        newQuery("md_fnc_setFontWeight");
        var md_setFontWEight = query;
        if(this.initialize == 1) {
            setFontWeight(); 
        };
    };
}
