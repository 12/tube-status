const dataBroker = async (url) => {
    const response = await fetch(url),
        status = await response.status;

    if (status >= 200 && status < 300) {
        return await response.json();
    } else {
        throw { status, body: await response.json() }
    }
}

export default dataBroker;