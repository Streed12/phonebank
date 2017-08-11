export const retrieveStatus = () => {
  try {
    const retrievedData = localStorage.getItem('status');
    if (retrievedData === null) {
      return undefined;
    }
    return JSON.parse(retrievedData);
  } catch (e) {
    return undefined;
  }
};

export const saveStatus = ({ auth, account_info }) => {
  try {
    const updateState = Object.assign({}, { account_info, auth });
    localStorage.setItem('status', JSON.stringify(updateState));
  } catch (e) {
    console.log('There was an error saving state in localStorage', e)
  }
};

