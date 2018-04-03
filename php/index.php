<?php
$dir = __DIR__;
require_once($dir."/class/class_1.php");
require_once($dir."/class_2.php");

$func_1 = new class_2\main_class_2("class2");

$func_2 = new class_2\sub_class_2("sub_class2");
// var_dump($func_2->func_2());


$func_3 = new class_1\sub_class_1("class1");
print("<pre>");
var_dump($func_3->func_4());
var_dump($func_3->name);
print("</pre>");


?>
