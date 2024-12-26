import instance from ".";

async function getAllCategories() {
    instance.get('/mini-project/api/categories/')
        .then(response => {
            console.log(response.data);
        });

}

async function getCategoryById(id) {
    instance.get('mini-project/api/categories/', id)
        .then(response => {
            console.log(response.data);
        });
}

async function createAnCategory() {

    instance.post('/mini-project/api/categories/')
        .then(response => {
            console.log(response.data);
        });

}