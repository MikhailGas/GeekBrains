<?php
interface MyInt {
    function funcI();
    function funcP();
} 
class A {
    protected $prop1;
    private $prop2;

    function funcA(){
       return $this->prop2;
    }
}
class B extends A {
    function funcB(){
       return $this->prop1;
    }
}
class C extends B implements MyInt {
    function funcB(){
       return $this->prop1;
    }
    function funcP(){
       return 123;
    }
    function funcI(){}
    
}  
$b = new B();
$b->funcA();
$c = new C();
$c->funcI();



?>
