import User from './User'

class Exception{
    handle(error){
        this.isExipred(error.response.data.error)
    }

    isExipred(error){
        if(error == 'Token is expired' || error == 'Token is invalid'){
            User.logOut();            
        }
    
    }
}

export default Exception = new Exception()