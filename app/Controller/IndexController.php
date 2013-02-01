<?php
class IndexController extends AppController {

	public $name = 'Index';
	
	public function index() {
		$this->loadModel('IndexBlock');
		$index_blocks = $this->IndexBlock->find('all', array('order' => 'order ASC', 'contain' => false));
		$this->set('index_blocks', $index_blocks);
		#$this->set('styles', array());
    	$this->set('scripts', array('metro/metro'));
	}
}
