const User={
    isUserDataExists:function(key)
    {
        if(localStorage.getItem(key)===null)
        {
            return false;
        }else{
            return true;
        }
    },createUserData:function(key,data)
    {
       let array=[]
    
        if(localStorage.getItem(key)===null)
        {
            localStorage.setItem(key,JSON.stringify(array))
        }
        else{
        let localStorageData=[]
        if(localStorage.getItem(key).length!==0){

            localStorageData=JSON.parse(localStorage.getItem(key));
            localStorageData.push(data);
            localStorage.setItem(key,JSON.stringify(localStorageData));
        }else{
            localStorageData.push(data)
            localStorage.setItem(key,JSON.stringify(localStorageData))
        }
            
        }
    },readUserData:function(key)
    {
        if(this.isUserDataExists(key))
        {
            let localStorageData=JSON.parse(localStorage.getItem(key));
            return localStorageData;
        }
    }
    
}
export default User;