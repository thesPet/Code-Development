const fetchData = async () => {
    try{
        //dieuthinsh upologisth
        const response = await fetch('http://localhost:3000/');
        const jsonData = await response.json();
        return jsonData;
    }catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
};

export default fetchData;