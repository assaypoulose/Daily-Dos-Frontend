import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL

const getAllDailyDos = (setDailyDos) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setDailyDos(data)
    })
}

const addDailyDos = (text, setText, setDailyDos) =>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllDailyDos(setDailyDos)
    })
    .catch((err) => console.log(err))
}

const updateDailyDos = (toDoId, text, setDailyDos, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`,{_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllDailyDos(setDailyDos)
    })
    .catch((err) => console.log(err))
}

const deleteDailyDos = (_id, setDailyDos) => {
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data) => {
        console.log(data);
        getAllDailyDos(setDailyDos)
    })
    .catch((err) => console.log(err))
}

export {getAllDailyDos, addDailyDos, updateDailyDos, deleteDailyDos}