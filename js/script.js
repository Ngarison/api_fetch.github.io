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
            let html='<div class="results">';
                   html+=`<div class="nom"><span>Nom:</span>${data[0].nom}</div>`;
                   html+=`<div class="code"><span>Code:</span>${data[0].code}</div>`;
                   html+=`<div class="population"><span>Population:</span>${data[0].population}</div>`;
                   html+="</div>"
                   document.getElementById("container-results").innerHTML=html;
                   console.log(data);
        }).catch(err=>{console.log("Erreur :"+err);})
        }
}

