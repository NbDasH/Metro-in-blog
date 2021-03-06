<div class="frame">
	<div class="background">
    </div>
    <div class="main">
    </div>
    <div class="custom_div">
    	<div class="theme">
        	<div class="theme_block_select theme_block_on_select" data-background='#180052' data-border='#6b30ae'></div>
            <div id="theme_select">
            	<div class="theme_select_btn" data-background='#180052' data-border='#6b30ae' data-bgimg='11033' data-bgimg-type='png'></div>
                <div class="theme_select_btn" data-background='#0d3772' data-border='#4d6f9c' data-bgimg='1' data-bgimg-type='png'></div>
                <div class="theme_select_btn" data-background='#16499a' data-border='#2476ca' data-bgimg='10003' data-bgimg-type='png'></div>
                <div class="theme_select_btn" data-background='#128023' data-border='#5dc16d' data-bgimg='10623' data-bgimg-type='png'></div>
            </div>
        </div>
    	<ul>
        	<li id="slow_action">滑动效果<p class="on">ON</p></li>
            <li id="mouse">鼠标滚轮缓动<p class="on">ON</p></li>
            <li id="retina">高清壁纸<p class="on">ON</p></li>
            <li id="glass">图标背景透明<p class="on">ON</p></li>
        </ul>
    	<div class="custom_btn"><div class="custom_btn_background"></div><img src="img/metro/custom.png" height="20px" width="20px"/></div>
	</div>
    <div class="power_btn_div">
        <div class="power_btn_background"></div>
        <div class="power_btn_top"></div>
        <div class="power_btn"></div>
    </div>
</div>

<div id="data">
	<?php
		foreach($index_blocks as $v){
			echo '<a href="'.$v['IndexBlock']['url'].'" data-type="'.$v['IndexBlock']['type'].'" data-image="'.IMAGES_URL.$v['IndexBlock']['img_path'].'" data-bgc-start="#'.$v['IndexBlock']['bgc_start'].'" data-bgc-end="#'.$v['IndexBlock']['bgc_end'].'">'.$v['IndexBlock']['name'].'</a>';
		}
	?>
    
    <a href="http://user.qzone.qq.com/273056333/" data-type='long_block' data-image='img/metro/rizhi.png' data-bgc-start="#4f2eb2" data-bgc-end="#6239c7">日志</a>
    <a href="http://weibo.com/thedash" data-type='block' data-image='img/metro/weibo.png' data-bgc-start="#fbc600" data-bgc-end="#fcd74d">新浪微博</a>
    <a href="http://mp3.baidu.com" data-type='block' data-image='img/metro/music.png' data-bgc-start="#89009b" data-bgc-end="#a300b5">音乐</a>
    <a href="http://user.qzone.qq.com/273056333/" data-type='long_block' data-image='img/metro/photo.png' data-bgc-start="#1a819c" data-bgc-end="#239fb3">相册</a>
    <a href="http://valkyria-duel.hangame.co.jp/index.nhn" data-type='long_block' data-image='img/metro/nvwushen.png' data-bgc-start="#5282c9" data-bgc-end="#6c96d5">战场女武神Duel</a>
    <a href="http://www.12306.cn" data-type='long_block' data-image='img/metro/12306.png' data-bgc-start="#aa4d47" data-bgc-end="#c66e68">12306订票</a>
    <a href="http://baidu.com/" data-type='block' data-image='img/metro/baidu.png' data-bgc-start="#fff" data-bgc-end="#fff">百度</a>
    <a href="http://www.ltaaa.com/" data-type='block' data-image='img/metro/longteng.png' data-bgc-start="#14629b" data-bgc-end="#1773b2">龙腾网</a>
    <a href="http://www.acfun.tv" data-type='long_block' data-image='img/metro/acfun.png' data-bgc-start="#333" data-bgc-end="#444">AcFun</a>
    <a href="http://www.bilibili.tv" data-type='long_block' data-image='img/metro/bilibili.png' data-bgc-start="#f16d2b" data-bgc-end="#fe9663">嗶哩嗶哩</a>
    <a href="http://user.qzone.qq.com/273056333/" data-type='long_block' data-image='img/metro/rizhi.png' data-bgc-start="#4f2eb2" data-bgc-end="#6239c7">日志</a>
    <a href="http://weibo.com/thedash" data-type='block' data-image='img/metro/weibo.png' data-bgc-start="#fbc600" data-bgc-end="#fcd74d">新浪微博</a>
    <a href="http://mp3.baidu.com" data-type='block' data-image='img/metro/music.png' data-bgc-start="#89009b" data-bgc-end="#a300b5">音乐</a>
    <a href="http://user.qzone.qq.com/273056333/" data-type='long_block' data-image='img/metro/photo.png' data-bgc-start="#1a819c" data-bgc-end="#239fb3">相册</a>
    <a href="http://valkyria-duel.hangame.co.jp/index.nhn" data-type='long_block' data-image='img/metro/nvwushen.png' data-bgc-start="#5282c9" data-bgc-end="#6c96d5">战场女武神Duel</a>
    <a href="http://www.12306.cn" data-type='long_block' data-image='img/metro/12306.png' data-bgc-start="#aa4d47" data-bgc-end="#c66e68">12306订票</a>
    <a href="http://baidu.com/" data-type='block' data-image='img/metro/baidu.png' data-bgc-start="#fff" data-bgc-end="#fff">百度</a>
    <a href="http://www.ltaaa.com/" data-type='block' data-image='img/metro/longteng.png' data-bgc-start="#14629b" data-bgc-end="#1773b2">龙腾网</a>
    <a href="http://www.acfun.tv" data-type='long_block' data-image='img/metro/acfun.png' data-bgc-start="#333" data-bgc-end="#444">AcFun</a>
    <a href="http://www.bilibili.tv" data-type='long_block' data-image='img/metro/bilibili.png' data-bgc-start="#f16d2b" data-bgc-end="#fe9663">嗶哩嗶哩</a>
</div>

<div id="theme">
	<a href="#" data-type="border" data-border="#6b30ae">border</a>
    <a href="#" data-type="background-color" data-background-color="#180052">background-color</a>
    <a href="#" data-type="background" data-background="11033" data-image_type="png">background</a>
    <a href="#" data-type="hover_block" data-background="tonghua" data-image_type="jpg">hover_block</a>
</div>

<div id="hover_block">
	<div id="start_show">
    	<div id="start_show_time"></div>
        <div id="hello_world"><img src="img/metro/loading.gif" height="20px" width="20px"/> 载入中,请稍后...</div>
        <div id="browser">使用最新版IE浏览器可以达到最佳浏览效果</div>
    </div>
</div>

<div id="start_jump"></div>