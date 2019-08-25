//js中没有专门的类，function就是类
/*
1.构造方法中动态地实例，附加属性
2.静态强制附加属性
*/
function A(){//this动态附加各种属性
    this.sayHehe = function(){
        console.log("hehe");
    }
}

A.prototype.sayHello = function(){//动态实例产生
    console.log("Hello");
}

A.sayHello = function(){//强制静态产生
    console.log("Hello girl");
}

var a = new A();//实例化类A
a.sayHello();
A.sayHello();//静态调用


//继承
function B(){

}
B.prototype = new A();

var b = new B();
b.sayHello();
b.sayHehe();