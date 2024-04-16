var inputText = document.querySelector("#input");
var convertBtn = document.querySelector("#btn-translate");
var outputTxt = document.querySelector("#output");


function constructURL(text){
    return "https://api.funtranslations.com/translate/numbers.json" + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error is: " + error);
    alert("There is some issue with the server please try again!")
}
convertBtn.addEventListener("click",clickHandler);

function clickHandler(){
    var text = inputText.value;
    if(isNaN(text)){
        alert("You have entered text in place of number, please enter number!")
    }else{
        fetch(constructURL(text))
        .then(response => response.json())
        .then(json => {
            outputTxt.innerText = json.contents.translated;
        })
        .catch(errorHandler)
    }
    
}

