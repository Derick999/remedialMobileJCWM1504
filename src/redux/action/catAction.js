import axios from 'axios';

const url = 'https://api.thecatapi.com/v1/images/search';

export const fetchCatData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}`);
            dispatch({ type: "FETCH_CAT", payload: response.data.Cat });
        } catch (err) {
            console.log(err);
        }
    };
};