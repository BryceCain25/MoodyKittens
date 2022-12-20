function setFontWeight() {
    let textArray = [].slice.call(document.getElementsByClassName("md_text"));
    textArray.forEach((element) => {
        let weightValue = element.getAttribute("fontWeight");
        if(weightValue <= 1000) {
            element.style.fontWeight = weightValue;
        } else {
            
        };
    });
};
setFontWeight();