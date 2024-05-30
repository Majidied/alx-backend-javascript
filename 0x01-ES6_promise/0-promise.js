export function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        fetch('https://api.example.com/data')
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject(new Error('Failed to get response from API'));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}