import "./style/index.less";
import img from './images/img1.jpg';

let element = document.getElementById("app")

element.innerText = 'webpack';
const a = {name: 'xiaoming', age: '11'};
console.log(JSON.stringify(a, ['name']));

// 将图像添加到我们现有的 div。
var myImg = new Image();
myImg.src = 'style/'+img;

element.appendChild(myImg);
