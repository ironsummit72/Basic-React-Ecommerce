function createLocalStorage(key) {
  let data = [];
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

function insertDataLocalStorage(key, value) {
  let localStorageData = [];
  localStorageData = localStorage.getItem(key);
  if (localStorageData.length === 0) {
    let localStorageData = [];
    localStorageData.push(value);
    localStorage.setItem(key, JSON.stringify(localStorageData));
    const event = new CustomEvent("localdatachanged");
    document.dispatchEvent(event);
    return 0;
  } else {
    localStorageData = JSON.parse(localStorage.getItem(key));
    if (localStorageData.findIndex((item) => item.id === value.id) === -1) {
      localStorageData.push(value);
      localStorage.setItem(key, JSON.stringify(localStorageData));
      const event = new CustomEvent("localdatachanged");
      document.dispatchEvent(event);
      return 0;
    } else {
      return -1;
    }
  }
}

function getItemQuantity(key, id) {
  if (localStorage.getItem(key) !== null) {
    let item = JSON.parse(localStorage.getItem(key));
    let data = item.find((item) => item.id === id);
    return data?.quantity

    
  }
}

function getLocalStorageData(key) {
  const localStorageData = JSON.parse(localStorage.getItem(key));
  return localStorageData;
}

function getLocalStorageDataLength(key) {
  if (localStorage.getItem(key) !== null) {
    const localStorageData = JSON.parse(localStorage.getItem(key));
    return localStorageData.length;
  } else {
    return 0;
  }
}

function getCartLength(key) {
  if (localStorage.getItem(key) !== null) {
    const localStorageData = JSON.parse(localStorage.getItem(key));
    let quantities = localStorageData.map((items) => items.quantity);
    const cartLength = quantities.reduce((a, b) => a + b, 0);
    return cartLength;
  } else {
    return 0;
  }
}

function updateQuantity(key, id, quantity) {
  let localStorageData = [];
  localStorageData = JSON.parse(localStorage.getItem(key));
  let IndexOfItem = localStorageData.findIndex((items) => items.id === id);
  localStorageData[IndexOfItem].quantity = quantity;
  localStorage.setItem(key, JSON.stringify(localStorageData));
  const event = new CustomEvent("localdatachanged");
  document.dispatchEvent(event);
}
function deleteLocalStorageItem(key, value) {
  let localStorageData = [];
  localStorageData = JSON.parse(localStorage.getItem(key));
  let indexOfValue = localStorageData.findIndex((item) => item.id === value);
  if (indexOfValue > -1) {
    localStorageData.splice(indexOfValue, 1);
    localStorage.setItem(key, JSON.stringify(localStorageData));
    const event = new CustomEvent("localdatachanged");
    document.dispatchEvent(event);
  }
}
function checkIfExists(key, value) {
  let localStorageData = JSON.parse(localStorage.getItem(key));
  let indexof = localStorageData.findIndex((va) => va.id === value);
  if (indexof === -1) {
    return false;
  } else {
    return true;
  }
}
export {
  createLocalStorage,
  insertDataLocalStorage,
  getLocalStorageData,
  getLocalStorageDataLength,
  deleteLocalStorageItem,
  checkIfExists,
  getItemQuantity,
  updateQuantity,
  getCartLength,
};
