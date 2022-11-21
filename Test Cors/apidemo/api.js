
const init = () => {
 //insert your API Gateway invoke url
   let url = "https://xxxxxxxxxx.execute-api.us-east-2.amazonaws.com/prod/pets";
  
    fetch(url)
    .then(data =>{
      return data.json();
    })
    .then(student => {
        console.log(student);
    })
}




window.addEventListener("load",init);
