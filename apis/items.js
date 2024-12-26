import instance from ".";

// async function getAllItems() {
//     instance.get('/mini-project/api/items')
//         .then(response => {
//             console.log(response.data);
//         });

// }

async function getAllItems() {
    const data = await instance.get('/mini-project/api/items');
    const Data = await data.json();
    console.log(Data);
    return Data;


}

async function getItemById(id) {
    instance.get('/mini-project/api/items/', id)
        .then(response => {
            console.log(response.data);
        });
}

async function createAnItem(categoryId) {

    instance.post('/mini-project/api/items/', categoryId)
        .then(response => {
            console.log(response.data);
        });

}

export { getAllItems, getItemById, createAnItem }


