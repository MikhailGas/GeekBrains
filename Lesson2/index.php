<?php
interface Transport {
    function deliver();
    
} 

class Truck implements Transport{
    function deliver(){
        echo('Везем по дороге');
    }
}

class Ship implements Transport{
    function deliver(){
        echo('Везем по воде');
    }
}

$truck1 = new Truck();

$ship1 = new Ship();

$truck1->deliver();
$ship1->deliver();
?>
