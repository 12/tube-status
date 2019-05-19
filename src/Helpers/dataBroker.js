const dataBroker = async url => {
  try {
    const response = await fetch(url);

    const status = await response.status;
  
    if (status >= 200 && status < 300) {
      return response.json();
    }
  } catch (err) {
    throw new Error('Invalid Response!');
  }
};

export default dataBroker;
