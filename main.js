const os = require('os');
var user = os.userInfo();

const product = require('./product')

const yargs = require('yargs')

console.log(`Minha aplicação de produtos - por ${user.username}, idade ${product.age}`);

let commands = yargs.argv;

let br = '----';


switch (process.argv[2]) {
    case 'create':

        product.AddProduct(product.SetProduct(
            commands.title,
            commands.description,
            commands.price,
            commands.stock
        ), () => {
            console.log(`produto criado ${commands.title}`);
        });
        
        break;
    case 'read':
        
        var productsList = product.GetProduct(commands.id);

        for (let index = 0; index < 5; index++) {
            br += br
        }

        console.log(br);

        productsList.forEach(prod => {
            console.log(prod.id);
            console.log(prod.name);
            console.log(prod.price);
            console.log(prod.stock);
            console.log(br);
        });

        break;
    case 'list':

        var productsList = product.ListAll();        

        for (let index = 0; index < 5; index++) {
            br += br
        }

        console.log(br);

        productsList.forEach(prod => {
            console.log(prod.id);
            console.log(prod.name);
            console.log(prod.price);
            console.log(prod.stock);
            console.log(br);
        });

    case 'update':
    case 'delete':
    default:
        break;
}

//console.log(process.argv);
//console.log(yargs.argv);