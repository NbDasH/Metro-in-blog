//定义公用变量
var exports = this;
var util = {};
if(/firefox/.test(navigator.userAgent.toLowerCase())){
	util.browser = 'mozilla';
}else if(/webkit/.test(navigator.userAgent.toLowerCase())){
	util.browser = 'webkit';
}else if(/msie/.test(navigator.userAgent.toLowerCase())){
	util.browser = 'ie';
}else{
	util.browser = 'other';
}
//浏览定位
util.main_tagget = 0;
//是否已进入桌面
util.is_intro = 0;
//是否允许鼠标滚动
util.is_mouse = 0;
//是否允许鼠标滚动
util.is_click = 0;
//是否打开过页面
util.is_open = 0;
//图片路径
util.image_path = 'img/'
//公用变量名为Metro
exports.Metro = util;

//hex颜色转换为rgb
var hex_to_rgb = function(color) {
    if ( color[0] == '#' ) color = color.substr(1);
	if(color.length == '6'){
		var row = [];
		row[0] = parseInt(color.substr(0,2),16);
		row[1] = parseInt(color.substr(2,2),16);
		row[2] = parseInt(color.substr(4,2),16);
	}else if(color.length == '3'){
		var row = [];
		row[0] = parseInt(color.substr(0,1)+color.substr(0,1),16);
		row[1] = parseInt(color.substr(1,1)+color.substr(1,1),16);
		row[2] = parseInt(color.substr(2,1)+color.substr(2,1),16);
	}
    return row;
}

//获取theme中图片路径
var get_theme_image_path = function(type,get_retina){
	var is_retina = '';
	if(custom_is_on('retina') && get_retina) is_retina = '_retina';
	var path = Metro.image_path + 'metro/' + $('#theme a[data-type="'+type+'"]').attr('data-background') + is_retina + '.'+$('#theme a[data-type="'+type+'"]').attr('data-image_type');
	return path;
}

//获取cookie
var get_metro_cookie = function(){
	var cookie_data = JSON.parse(decodeURIComponent($.macaroon('Metro_cookie')));
	if(cookie_data){
		Metro.main_tagget = cookie_data.main_tagget;
		Metro.is_open = cookie_data.is_open;
		var custom_data = cookie_data.custom_data;
		$.each(custom_data,function(k,v){
			$('#'+k).attr('class',v.style);
			$('#'+k).html(v.html);
		});
		
		$('#theme a[data-type="border"]').attr('data-border',cookie_data.border);
		$('#theme a[data-type="background-color"]').attr('data-background-color',cookie_data.background_color);
		$('#theme a[data-type="background"]').attr('data-background',cookie_data.background.img);
		$('#theme a[data-type="background"]').attr('data-image_type',cookie_data.background.type);
		
	}
}

//开关判断
var custom_is_on = function(obj_id){
	return $('#'+obj_id).children('p').attr('class') == 'on';
}

//滚动方法
var slow_action = function(point, now, doing, callback){
	var now = eval(now);
	var done = now + ((point - now) /4);
	if(point - now <= 3 && point - now >= -3 || !custom_is_on('slow_action')) done = point;
	if(now - point > 0.5 || now - point < -0.5){
		var now = doing(done);
		setTimeout(function(){slow_action(point, now, doing, callback);},20)
	}else{
		if(callback)callback();
	}
}

//载入皮肤
var load_theme = function(){
	var theme_border_color = $('#theme a[data-type="border"]').attr('data-border');
	var theme_background_color = $('#theme a[data-type="background-color"]').attr('data-background-color');
	
	$('.block,.long_block').css('border-color',theme_border_color);
	var background_position = $('.background').css('background-position');
	$('.background').css({'background':'url('+get_theme_image_path('background',true)+')','background-size':'auto 100%','background-position':background_position});
	$('#hover_block').css({'background':'url('+get_theme_image_path('hover_block',false)+')', 'background-size':'cover'});
	
	$('.theme_block_select').css({'background':theme_background_color,'border-color':theme_border_color});
	var boder_rgb = hex_to_rgb(theme_border_color);
	$('.custom_btn_background').css('border-top-color','rgba('+(boder_rgb[0]+20)+','+(boder_rgb[1]+20)+','+(boder_rgb[2]+20)+',0.5)');
	$('.custom_div ul li,.theme,#theme_select').css('background','rgba('+(boder_rgb[0]+20)+','+(boder_rgb[1]+20)+','+(boder_rgb[2]+20)+',0.5)');
	$('.theme_select_btn').each(function(){
		
		$(this).css({'background':$(this).attr('data-background'),'border-color':$(this).attr('data-border')});
	});
}

//方块背景颜色设置
var set_block_background = function(obj,bgc_start,bgc_end){
	var background_val = bgc_start

	switch(Metro.browser){
		case 'ie':var block_background_type = '-ms-linear-gradient';break;
		case 'mozilla':var block_background_type = '-moz-linear-gradient';break;
		case 'webkit':var block_background_type = '-webkit-linear-gradient';break;
		default:var block_background_type = 'linear-gradient';break;
	}
	
	background_val = block_background_type+'(left, '+bgc_start+', '+bgc_end+')';
	if(custom_is_on('glass'))background_val = block_background_type+'(left top, '+bgc_start+', rgba(0,0,0,0))';
	obj.css('background',background_val);
	if(obj.css('background').indexOf('none') > -1)obj.css('background',bgc_start);
}

//浏览器尺寸重置触发计算
var main_resize = function(){
	$('.main').html('');
	
	var height = $('.frame').height();
	
	var custom_margin = 90;
	var calc_height = height - 180;
	if(height < 218){
		calc_height = height;
		custom_margin = 0;
	}else if(height < 308){
		calc_height = height - 90;
		custom_margin = 45;
	}
	var ynm = (calc_height)%128;
	var block_row = Math.floor((calc_height)/128) * 10;
	var main_margin_top = custom_margin + (ynm/2);
	
	$('.main').css({'margin-top':main_margin_top + 'px'});
	
	
	var row = $('<div class="row"></div>');
	var block_row_nm = 0;
	$('#data a').each(function(){
		if($(this).attr('data-type') == 'block'){
			block_row_nm += 5;
		}else{
			if(block_row_nm%10 == 5){
				block_row_nm += 15;
			}else{
				block_row_nm += 10;
			}
		}
		var border_css = 'short_border';
		if($(this).attr('data-type') != 'block')border_css = 'long_border';
		var data;
		data = "<img class='block_middle_logo' data-href='"+$(this).attr('href')+"' data-hover_block_bg='"+$(this).attr('data-bgc-start')+"' src='"+$(this).attr('data-image')+"' /><div class='block_middle_logo_title'>"+$(this).html()+"</div>"
		
		var block = $('<div class="'+$(this).attr('data-type')+'"><div class="'+border_css+'">'+data+'</div></div>');
		set_block_background(block, $(this).attr('data-bgc-start'), $(this).attr('data-bgc-end'));
		
		if(block_row_nm > block_row){
			$('.main').append(row.clone());
			row = $('<div class="row"></div>');
			row.append(block);
			block_row_nm = block_row_nm - block_row;
		}else{
			row.append(block);
		}
	});
	$('.main').append(row);
	$('.main').css({'height':block_row/10*128 + 'px','width':$('.main .row').length*276 + 'px'});
	if(!Metro.is_intro)$('.row').hide();
	load_theme();
}

//旋转logo
var roll_logo = function(obj,action,now){
	if(action == '+'){
		point = 0.1;
	}else{
		point = -0.1;
	}
	if(!now) now = 1;
	now += point;
	if(now <= -0.9) action = '+';
	$(obj).css('transform','scaleX('+now+')');
	if(now != 1){
		setTimeout(function(){roll_logo(obj,action,now)},10);
	}else{
		window.location.href = $(obj).attr('data-href');
		setTimeout(function(){window.location.reload();},1000);
	}
}

//方块点击后入场动画
var start_jump = function(){
	$(document).on('click','.block,.long_block',function(){
		if(Metro.is_click){
			Metro.is_mouse = 0;
			Metro.is_click = 0;
			var block_middle_logo = $(this).find('.block_middle_logo');
			var left = block_middle_logo.offset().left;
			var top = block_middle_logo.offset().top;
			var href = block_middle_logo.attr('data-href');
			$('#start_jump').html('<img src="'+block_middle_logo.attr('src')+'" data-href="'+href+'" />');
			block_middle_logo.css('height','220');
			var point_height = block_middle_logo.height();
			var point_width = block_middle_logo.width();
			var hover_block_bg = block_middle_logo.attr('data-hover_block_bg');
			
			block_middle_logo.remove();
			$('#start_jump img').css({'left':left,'top':top});
			
			var point = $('.background').height()/2 - point_height/2;
			var now = parseFloat($('#start_jump img').css('top'));
			var doing = function(done){
				$('#start_jump img').css('top',done+'px');
				return parseFloat($('#start_jump img').css('top'));
			}
			slow_action(point, now, doing);
			
			var point2 = $('.background').width()/2 - point_width/2;
			var now2 = parseFloat($('#start_jump img').css('left'));
			var doing2 = function(done){
				$('#start_jump img').css('left',done+'px');
				return parseFloat($('#start_jump img').css('left'));
			}
			slow_action(point2, now2, doing2);
			
			var point3 = 220;
			var now3 = parseFloat($('#start_jump img').css('height'));
			var doing3 = function(done){
				$('#start_jump img').css('height',done+'px');
				return parseFloat($('#start_jump img').css('height'));
			}
			slow_action(point3, now3, doing3);
			
			roll_logo($('#start_jump img'));
			
			$('#hover_block').css('background',hover_block_bg);
			$('#hover_block').show();
			hover_block_roll_down();
			
		}
	});
}

//背景移动动画
var move_antimate = function(){
	var target = Metro.main_tagget*5;
	var position = $('.background').css('background-position');
	var position_arr = position.split(" ");
	var position_x = parseFloat(position_arr[0]);
	var done = position_x + ((target - position_x) /4);
	if(!custom_is_on('mouse')) done = target;
	if(Metro.main_tagget > 0){
		if(!custom_is_on('mouse'))done = 0;
		Metro.main_tagget = 0;
	}
	var max_position = $('.background').width() - $('.main').width() - 100;
	if(target*2 < max_position){
		if(!custom_is_on('mouse'))done = max_position/2;
		Metro.main_tagget = max_position/10;
	}
	$('.background').css('background-position',done+'px 0px');
	$('.main').css('margin-left',done*2+'px');
	setTimeout(move_antimate,20)
}

//鼠标滚动移动速度控制
var move_background_speed = function(direction){
	if(direction == '-'){
		Metro.main_tagget = Metro.main_tagget - 5;
	}else{
		Metro.main_tagget = Metro.main_tagget + 5;
	}
}

//检测鼠标滚动
var scrollFunc=function(e){
	if(!Metro.is_mouse) return false;
	e=e || window.event;
	if(e.wheelDelta){//IE/Opera/Chrome 
		if(e.wheelDelta > 0){
			move_background_speed('+');
		}else{		
			move_background_speed('-');
		}
		return false;
	}else if(e.detail){//Firefox
		if(e.detail > 0){
			move_background_speed('+');
		} else {
			move_background_speed('-');
		}
		return false;
	}
}

//开场壁纸弹出动画
var start_show = function(){
	if($('#start_show_time').length > 0 && Metro.is_click){
		Metro.is_click = 0;
		var point = -$('#hover_block').height();
		var now = parseFloat($('#hover_block').css('top'));
		var doing = function(done){
			$('#hover_block').css('top',done+'px');
			return parseFloat($('#hover_block').css('top'));
		}
		var callback = function(){
			Metro.is_click = 1;
			if(Metro.is_intro){
				Metro.is_mouse = 1;
				Metro.is_click = 1;
			}
			$('#hover_block').html('');
			$('#hover_block').hide();
		}
		slow_action(point, now, doing, callback);
	}
}

//方块出现动画
var show_row = function(nm){
	$('.row').eq(nm).fadeIn();
}

//壁纸出现后方块左漂移动画并注册鼠标滚动检测
var show_main = function(){
	if(Metro.is_open){
		move_antimate();
		Metro.is_mouse = 1;
		Metro.is_click = 1;
		return false;	
	}
	var point = 0;
	var now = parseFloat($('.main').css('margin-left'));
	var doing = function(done){
		$('.main').css('margin-left',done+'px');
		return parseFloat($('.main').css('margin-left'));
	}
	var callback = function(){
		move_antimate();
		Metro.is_mouse = 1;
		Metro.is_click = 1;
	}
	slow_action(point, now, doing, callback);
}

//壁纸弹出后方块出现
var intro = function(){
	var i = 0;
	$('.row').each(function(){
		var time = i*50;
		setTimeout("show_row("+i+")",time);
		i++;
	});
	$('.main').css('margin-left','200px');
	show_main();
}

//壁纸上方时间显示
var show_time = function(){
	var date = new Date();
	//var vYear = d.getFullYear();
	//var vMon = d.getMonth() + 1;
	//var vDay = d.getDate();
	var h = date.getHours(); 
	var i = date.getMinutes(); 
	var s = date.getSeconds();
	if(h<10)h='0'+h;
	if(i<10)i='0'+i;
	if(s<10)s='0'+s;
	
	$('#start_show_time').html(h+':'+i+'<span id="start_show_second">'+s+'</span>');
	if($('#start_show_time').length > 0)setTimeout(show_time,1000);
}

//控制按钮
var custom_btn = function(){
	var custom_width = 0;
	$('.custom_div ul li').each(function(){
		custom_width += $(this).width() + 20;
	});
	custom_width += $('.theme').width() + 20;
	$('.custom_div').css('left',-custom_width + 'px');
	$('.custom_btn').click(function(){
		var now = parseFloat($('.custom_div').css('left'));
		var doing = function(done){
			$('.custom_div').css('left',done+'px');
			return parseFloat($('.custom_div').css('left'));
		}
		if($('.custom_btn').children('img').attr('src') == Metro.image_path + 'metro/custom.png'){
			$('.custom_btn').children('img').attr('src', Metro.image_path + 'metro/exit.png');
			var point = 0;
		}else{
			$('.custom_btn').children('img').attr('src', Metro.image_path + 'metro/custom.png');
			var point = -custom_width;
		}
		slow_action(point, now, doing);
	});
	$('.custom_div ul li').click(function(){
		$(this).children('p').toggleClass(function(index,this_class) {
            if(this_class == 'on'){
				$(this).html('OFF');
			}else{
				$(this).html('ON');
			}
			return 'on off';
        });
	});
	$('#glass').click(function(){
		main_resize();
	});
	$('#retina').click(function(){
		load_theme();
	});
}

//点击屏幕字符闪烁
var light = function(){
	if($("#hello_world").length > 0){
		$("#hello_world").fadeOut(500).fadeIn(500);
		setTimeout(light,1000);
	}
}

//待机按钮
var power_btn = function(){
	$('.power_btn_div').click(function(){
		Metro.is_mouse = 0;
		$('#hover_block').html('<div id="start_show"><div id="start_show_time"></div><div id="hello_world">欢迎访问DasH的博客，请点击屏幕</div></div>').show();
		show_time();
		light();
		hover_block_roll_down();
	});
}

//大滑块滑下动画
var hover_block_roll_down = function(){
	Metro.is_click = 0;
	var point = 0;
	var now = parseFloat($('#hover_block').css('top'));
	var doing = function(done){
		$('#hover_block').css('top',done+'px');
		return parseFloat($('#hover_block').css('top'));
	}
	var callback = function(){
		if($('#start_show_time').length > 0)Metro.is_click = 1;
	}
	slow_action(point, now, doing, callback);
}

var change_theme = function(){
	$('.theme_select_btn').click(function(){
		$('#theme a[data-type="border"]').attr('data-border',$(this).attr('data-border'));
		$('#theme a[data-type="background-color"]').attr('data-background-color',$(this).attr('data-background'));
		$('#theme a[data-type="background"]').attr({'data-background':$(this).attr('data-bgimg'),'data-image_type':$(this).attr('data-bgimg-type')});
		//$('#theme a[data-type="hover_block"]');
		
		load_theme();
	});
}

//start
var start = function(){
	$('#hello_world').html('欢迎访问DasH的博客，请点击屏幕');
	light();
	$(window).resize(function() {
		main_resize();
	});
	main_resize();
	
	$('#hover_block').click(function(){
		if(!Metro.is_intro){setTimeout(intro,200);Metro.is_intro=1;Metro.is_click=1;}
		start_show();
	});
	if(Metro.is_open){
		Metro.is_intro=1;
		Metro.is_click=1;
		intro();
		start_show();
	}
	custom_btn();
	power_btn();
	phone_touch();
	start_jump();
	change_theme();
}

//预先载入屏保和背景
var load_image = function(url, callback) {
	var img = new Image();
    img.src = url;
  
    if (img.complete) {
         callback();
        return;
     }

     img.onload = function () {
         callback();
     };
};

/*
触摸的4个事件
ontouchstart
ontouchmove
ontouchend
ontouchcancel 
*/
var phone_touch = function(){
	var x = 0;
	var y = 0;
	document.ontouchstart = function(e){
		var touch = e.touches[0];
		x = touch.clientX;
		y = touch.clientY;
	}
	document.ontouchmove = function(e){
		var touch = e.touches[0];
		var point = touch.clientX - x;
		x = touch.clientX;
		Metro.main_tagget = Metro.main_tagget + (point / 10);
		e.preventDefault();
	}
}

$(document).ready(function(e) {
	get_metro_cookie();
	$('#hover_block,.background').css('background',$('#theme a[data-type="border"]').attr('data-border'));
	var hover_block_bg = get_theme_image_path('hover_block',false);
	var background = get_theme_image_path('background',true);
	var image_arr = [hover_block_bg,background];

	show_time();
	
	if(document.addEventListener){
		document.addEventListener('DOMMouseScroll',scrollFunc,false);
	}
	window.onmousewheel=document.onmousewheel=scrollFunc;
	
	var point = 0;
	$.each(image_arr,function(k,v){
		var callback = function(){
			point++;
			if(point == image_arr.length)start();
		}
		load_image(v,callback);
	});
	
	setTimeout(function(){if(point != 2)start();},10000);
	
});

//窗口关闭写入cookie
$(window).on('beforeunload',function(e) {
	var cookie_data={};
	cookie_data.main_tagget = Metro.main_tagget;
	cookie_data.is_open = 1;
	
	var custom_data={};
	$('.custom_div ul li').each(function(){
		custom_data[$(this).attr('id')] = {};
		custom_data[$(this).attr('id')].style = $(this).attr('class');
		custom_data[$(this).attr('id')].html = $(this).html();
	});
	cookie_data.custom_data = custom_data;
	
	cookie_data.border = $('#theme a[data-type="border"]').attr('data-border');
	cookie_data.background_color = $('#theme a[data-type="background-color"]').attr('data-background-color');
	
	cookie_data.background = {}
	cookie_data.background.img = $('#theme a[data-type="background"]').attr('data-background');
	cookie_data.background.type = $('#theme a[data-type="background"]').attr('data-image_type');
	
	$.macaroon('Metro_cookie', encodeURIComponent(JSON.stringify(cookie_data)), {
		expires: 7,
		path: "/"
	});
});