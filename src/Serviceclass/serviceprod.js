import axios from "axios"
let baseURL="http://localhost:9000/product"   //  /product/prod
class product
{
    constructor()
    {

    }
   
    validatelogin(admin)
    {
        return axios.post(baseURL+"/prod",admin);
    }

}

export default new product();


//Read---->Get 
//Post,put---->Send---->2 arguments----->url+object
//delete