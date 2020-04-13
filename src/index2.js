import $ from 'jquery'
import './css/a.css'
import './css/a.less'
import './css/a.scss'
import Vue from 'vue'
//导入单文件组件
import App from './components/App.vue'
// $(function() {
//     $('p').css('background', 'red');
//     $('p').css('font-size', '30px');
// })

class Student {
    static name = 'zs'
}

console.log(Student.name);

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})