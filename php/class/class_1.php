<?php
namespace class_1;

class main_class_1 {
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

  public $name = "Tom";
  public function func_2() {
    return $this->name;
  }
}

class sub_class_1 extends main_class_1 {
  public $arg1 = "test";
  public function sub_func() {
    return $this->func_1();
  }
  public function func_4() {
    return $this;
  }
}

?>
