import axios from 'axios';

export function loadData(dbUrl) {
    return new Promise(
        (resolve, reject) => {
            axios.get(dbUrl)
                .then(response => {
                    resolve(response.data);
                });
        }
    )
}