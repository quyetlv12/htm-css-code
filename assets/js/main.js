

// // console.log(name);

// // var name = 'quyet'


// // =======ES6=====




// let address = 'eeeee'

// address = 'quang tri'


// console.log(address);



// prompt('Nhập số')

// alert('nhập số')

// console.log('e')


// llllll

let age = 9
// console.log(typeof age)
// console.log("age == 9 && isNaN(age)" , age == 9 && isNaN(age));


// nếu age có giá trị bằng 9 và phải là kiểu dữ liệu số => ok

// 2 dấu bằng so sánh giá trị
// console.log("age == 9" , age ==  9);

//3 dấu bằng so sánh giá trị và kiểu dữ liệu
// console.log("age == 9" , age ===  9);
// if (age == 9 || isNaN(age)) {
//     console.log('ok');
// }


// function totalNumber(a,b){
//     if (a > 10) {
//         console.log("lớn hơn 10");
//         return
//     }
//     return a + b
// }


// console.log(totalNumber(12,9));


const obj = {
    'name' : 'quyet',
    'age' : 5, 
    'addrees' : "quang tri"
}
obj['name'] = 'le'
// console.log(obj['name']);


const list = document.querySelector('#list-product')

console.log(list);
const arr = [
    {
        'name' : 'xà lách 1',
        'price' :20,
        'cate' : 'danh mục'
    },
    {
        'name' : 'xà lách 2',
        'price' :20,
        'cate' : 'danh mục'
    },
    {
        'name' : 'xà lách 3',
        'price' :20,
        'cate' : 'danh mục'
    }
]
list.innerHTML = arr[2]['name']