// 当post或get请求到/api 路由时Mock会拦截请求并返回上面的数据
import Mock from "mockjs"
// Mock.Random 是一个工具类，用于生成各种随机数据。
const Random = Mock.Random;

import { 
    product_v18_1 ,
    product_v18_2 ,
    product_v18_3 ,

    product_z17_1 ,

    products_z17 ,
    products_v18 ,

    indexData
} from './database'



const products_list = [
      product_v18_1,
      product_v18_2,
      product_v18_3,
      product_z17_1,
];
const products_modle = [
    products_z17,
    products_v18
]

const typesData ={
    "phone":[
        products_v18,
        products_z17
    ]
}


// index
Mock.mock('/get_index_data', 'get', indexData);
Mock.mock('/get_types_data', 'get', typesData);

// product
Mock.mock('/get_product_by_id', 'post', function(options){
    // console.log(JSON.parse(options.body))
    let product_id = JSON.parse(options.body).product_id;
    let model = '';
    let tmp;
    
    products_list.forEach(function(item){
        if(item.id == product_id){
            model = item.model;
        }
    });
    
    products_modle.forEach(function(item){
        if(item.model == model){
            tmp=item
        }
    });
    return tmp;
});

