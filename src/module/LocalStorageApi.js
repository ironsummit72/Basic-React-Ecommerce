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
function deleteLocalStorageItem(key,value)
{
let localStorageData=[]
localStorageData=JSON.parse(localStorage.getItem(key));
let indexOfValue=localStorageData.indexOf(value)
if(indexOfValue>-1)
{
 localStorageData.splice(indexOfValue,1)
 localStorage.setItem(key,JSON.stringify(localStorageData)); 
 const event = new CustomEvent('localdatachanged');
 document.dispatchEvent(event); 
}
}
function checkIfExists(key,value)
{
    let localStorageData=JSON.parse(localStorage.getItem(key));
    let indexof=localStorageData.indexOf(value)
    if(indexof===-1)
    {
        return false
    }else{
        return true
    }
}
export {createLocalStorage,insertDataLocalStorage,getLocalStorageData,getLocalStorageDataLength,deleteLocalStorageItem,checkIfExists}
