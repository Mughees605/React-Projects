var axios = require("axios");

const URL = "https://mughees-hello-world.herokuapp.com";


module.exports = {
   getData:function(){
       return axios.get(URL).then(function(res){
           console.log(res);
        if(res.data.name){
            return res.data[0];
        }
        else {
            throw new Error(res.data.message);
        }
       })
   }
}