
type requestGet = "GET" | "POST";

let getRequest : requestGet;

getRequest = "POST";

console.log(getRequest)

function postRequest (postRequest : requestGet){
      console.log(postRequest)
}

postRequest("GET")