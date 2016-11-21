'use strict'
/*
 @autor: zen
 javascript 原生代码及方法
*/
// 1- 80 为 Object.defineProperty()
// 说明了如何实现自我存档的对象。当 temperature 属性设置时，archive 数组会得到一个 log
/*function Archiver() {
  var temp = null;
  var archive = [];

//  为Archiver 实例添加temperature 属性
  Object.defineProperty(this, 'temperature', {

    get: function() {
      console.log('get!');
      return temp;
    },
    // 设置 temperature 值，如 arc.temperature = 11;
    set: function(value) {
      temp = value;
      archive.push({ val: temp });
    }
  });
 //  方法， 返回archive 数组
  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
console.log(arc.getArchive()) // [{ val: 11 }, { val: 13 }]*/


/*// 关于 defineProperty  的另一个例子：
var pattern = {
	get: function() {
		return 'I LOVE CHINA !'
	},
	set: function () {
		this.myname = 'no'
	}
};

function defineGetSet (){
	Object.defineProperty(this, 'mynew', pattern);
}

var instance = new defineGetSet();
console.log(instance.mynew)
instance.mynam = '11test';
instance.myname ='yes'
console.log(instance.mynew) // I LOVE CHINA !
console.log(instance.mynam)
console.log(instance.myname)
console.log(instance)
*/
/*// 关于 defineProperty  的另一个例子：
var pattern = {
    get: function () {
        return 'I alway return this string,whatever you have assigned';
    },
    set: function () {
        this.myname = 'this is my name string';
    }
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty);
console.log(instance.myname); */
// 因为执行了instance.myproperty = 'test'; 所以为instance 在set中新增了this.myname 属性，所以可以访问 instance.myname

// 如果只是单纯的设置 一个属性（非 instance.myproperty，除非是instance.myname, 但是instance.myname = 'ok'，并不是走pattern 而是为instance 添加 了一个myname属性而已），
//并不会 走 pattern 对象，此时访问instance.myname 为undefined

/*
81-- Object.assign()
*/
 // 关于assign 的拷贝，对于一级 属性或者对象，拷贝的是对象本身，如 obj对象的a与c，copy对象或者原对象obj在改变这两个属性时，obj并不改变
 // 但是对于a 对象的d 属性是 拷贝的引用，copy 在改变这个d属性时，会引起obj 对象中a对象c的变化，即，assign只拷贝 直接子属性（对象），深层次的对象是引用；
 
/*var obj = { a: { d: 2},c: 234}
var copy = Object.assign({}, obj)
copy.a.d = 3
copy.c = 555
console.log(obj)  // { a: { d: 3 }, c: 234 }
console.log(copy)  // { a: { d: 3 }, c: 555 }*/

/* 思考
var obj =  { b: {c:4} , d: { e: {f:1}} }
var copy = Object.assign({}, obj)
copy.d.e = 32
console.log(obj)          // { b: { c: 4 }, d: { e: 32 } }
console.log(copy)*/       // { b: { c: 4 }, d: { e: 32 } }

/*
var obj =  { b: {c:4} , d: { e: {f:1}} }
var copy = Object.assign({}, obj)
copy.d = 32
console.log(obj)          //  { b: { c: 4 }, d: { e: { f: 1 } } }
console.log(copy)         //  { b: { c: 4 }, d: 32 }
*/
/*  
  var a = { b: {c:4} , d: { e: {f:1}} }
  var g = Object.assign({},a)
  var h = JSON.parse(JSON.stringify(a));
  g.d.e = 32
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: 54 } }
*/

/*Object.keys()*/
/*var obj = { "a": 0, 1 : "b", 2 : "c", d: {f:3}};
console.log(Object.keys(obj))
console.log(Object.keys(obj.d));
console.log(Object.getOwnPropertyNames(obj));
*/
/*Promise练习*/
/*function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

timeout(1000).then(() => {
  console.log('done');
});
*/

let val = 4 > 3 ? 100 : 50
console.log(val)
console.log(6>7)
console.log(val === '100')
let valus = val !== 50
console.log(valus)












