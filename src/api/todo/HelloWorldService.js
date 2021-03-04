import axios from "axios"

class HelloWorldService {
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/bem-vindo')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/bem-vindo-bean')
    }

    executeHelloWorldBeanPathService(name){
        // let user = 'gabs'
        // let password = 'dummy'
        // let basicAuthHeader = 'Basic ' + window.btoa(user + ":" + password)

        return axios.get(`http://localhost:8080/bem-vindo-bean/${name}`
        // ,
        // {
        //     headers: {
        //         authorization: basicAuthHeader
        //     }
        // }
        )
    }
}

export default new HelloWorldService()