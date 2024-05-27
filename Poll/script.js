let options = [
    {id: "option1", vote: 0, text:"C++"},
    {id: "option2", vote: 0, text:"Java"},
    {id: "option3", vote: 0, text:"Python"},
    {id: "option4", vote: 0, text:"JavaScript"}
]

function submitVote(){

    const selectedOption = document.querySelector('input[name=poll]:checked')

    if(!selectedOption){
        alert("Please pick an Option");
        return ;
    }

   const optionId = selectedOption.value;
   const selectObj = options.find((option)=> option.id === optionId);

   selectObj.vote++;
   displayResult();

}

function displayResult(){
    const result = document.getElementById("result")
    result.innerHTML = "";

    options.forEach((option)=>{
        const percentage = ((option.vote/TotalVotes())*100).toFixed(2) || 0;
        const barWidth = percentage > 0? percentage + "%" : "0%";
        const optionResult = document.createElement("div")
        optionResult.className = "option-result"
        optionResult.innerHTML = `
        <span class="option-text">${option.text}</span>
        <div class="bar-container">
            <div class="bar" style="width : ${barWidth};"></div>
        </div>
        <span class="percentage">${percentage}</span>
        `;
        result.appendChild(optionResult)
    })


}

function TotalVotes(){
    return options.reduce((total, option)=>total + option.vote, 0)
}