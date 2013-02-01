<?php
class IndexController extends AppController {

	public $name = 'Index';
	public $uses = array();
	
	public function index() {
		#$this->set('styles', array());
    	$this->set('scripts', array('metro/metro'));
	}
}
