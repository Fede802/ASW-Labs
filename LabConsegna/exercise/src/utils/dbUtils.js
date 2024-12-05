import axios from 'axios';

export const loadData = dbUrl => {
    return new Promise(
        (resolve, reject) => {
            axios.get(dbUrl)
                .then(response => {
                    resolve(response.data);
                });
        }
    )
}