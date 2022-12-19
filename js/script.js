function myStyle(){
    document.getElementById("cp").style.borderBlockColor="gray";
}

let codepostal

function getCode(){
    let codepostal=document.getElementById("cp").value;
    if(codepostal.length==5){
        let url =`https://geo.api.gouv.fr/communes?codePostal=${codepostal}`;
       
        fetch(url).then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data);
        })
        }
}

