<?php
namespace class_2;

class main_class_2 {
  public $arg;
  public function __construct($value) {
    $this->arg = $value;
  }

  protected function func_1() {
    $num = 0;
    for ($i = 0; $i <= 100; $i++) {
      $num = $num + $i;
    }
    return $num;
  }

  private $name = "Bob";
  public function func_2() {
    return $this->name;
  }
}

class sub_class_2 extends main_class_2 {
  public $arg2 = "test";
  public function sub_func() {
    return $this->func_1();
  }
}



?>
