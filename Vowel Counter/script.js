function checkVowels(){
    let text = document.getElementById("inputText").value;
    text = text.toLowerCase();
    let result = document.getElementById("result");

    let vowelCnt = 0;
    for(let i = 0; i<text.length; i++){

        let ch = text.charAt(i);
        if(isVowel(ch)){
            vowelCnt++;
        }

    }

    result.textContent = "Total Vowels: " + vowelCnt;

}

function isVowel(char){
    const vowels = ["i", "a", "e", "o", "u"]
    return vowels.includes(char)
}