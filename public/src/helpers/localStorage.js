export const retrieveStatus = () => {
  try {
    const retrievedData = localStorage.getItem('state');
    console.log('RetrievedDate', retrievedData)
    if (retrievedData === null) {
      return undefined;
    }
    return JSON.parse(retrievedData);
  } catch (e) {
    return undefined;
  }
};

export const saveStatus = ({ auth: { id } }) => {
  console.log(id)
  try {
    const retrievedState = JSON.stringify(id);
    console.log(retrieveStatus, localStorage)
    localStorage.setItem('state', retrievedState);
  } catch (e) {
    //nada
  }
};

