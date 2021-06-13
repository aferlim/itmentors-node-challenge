console.log('iniciando product.js');

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const repoFile = './database/data.json';


module.exports.age = 38;


module.exports.AddProduct = (product, callback) => {

    var products = JSON.parse(fs.readFileSync(repoFile));

    products.push(product);

    fs.writeFile(repoFile, JSON.stringify(products), callback);

}

module.exports.ListAll = () => {

    var data = fs.readFileSync(repoFile);

    return JSON.parse(data);

}

module.exports.SetProduct = (title, description, price, stock) => {
    return {
        id: uuidv4(),
        name: title,
        description: description,
        price: price,
        stock: stock
    }
}


module.exports.GetProduct = (id) => {

    var products = JSON.parse(fs.readFileSync(repoFile));

    return products.filter(elem => elem.id === id);

}