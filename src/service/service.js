

export function generateResponse(req) {
    return new Promise((resolve, reject) => {
  
  
  
      var requestOptions = {
        method: "GET",
        redirect: "follow",
    
      };
  
      fetch("http://54.167.240.92/query?text="+req,requestOptions)
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
          console.log("error");
        });
    });
  }