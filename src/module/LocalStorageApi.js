function createLocalStorage(key)
{
    localStorage.setItem(key,[])
}

function insertDataLocalStorage(key,value)
{
    let localStorageData=[]
    localStorageData=localStorage.getItem(key)
    console.log(localStorageData.length);
    if(localStorageData.length===0)
    {
        let localStorageData=[]
        localStorageData.push(value)
        localStorage.setItem(key,JSON.stringify(localStorageData));
        const event = new CustomEvent('localdatachanged');
        document.dispatchEvent(event);
        return 0;

    }else{
        localStorageData=JSON.parse(localStorage.getItem(key))
        if(localStorageData.indexOf(value)===-1){
            localStorageData.push(value);
            localStorage.setItem(key,JSON.stringify(localStorageData));
            const event = new CustomEvent('localdatachanged');
            document.dispatchEvent(event);
            return 0;
        }
        else{
            return -1;
        }
    }
    
}
function getLocalStorageData(key)
{
    const localStorageData=JSON.parse(localStorage.getItem(key));
    return localStorageData;
}
function getLocalStorageDataLength(key)
{
    if(localStorage.getItem(key)!==null){
        const localStorageData=JSON.parse(localStorage.getItem(key));
        return localStorageData.length;
    }else{
        return 0
    }
}
export {createLocalStorage,insertDataLocalStorage,getLocalStorageData,getLocalStorageDataLength}
