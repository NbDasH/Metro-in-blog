<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="pragma" contect="no-cache">
        <title>Metro in blog</title>
        <?php echo $this->Html->css(array('global/global'));?>
        <?php if(isset($styles))echo $this->Html->css($styles);?>
        <?php echo $this->Html->script(array('global/jquery-1.9.0.min.js','global/jquery.bp.macaroon.min.js','global/json2.js')); ?>
        <?php if(isset($scripts))echo $this->Html->script($scripts);?>
    </head>
    
    <body>
        <?php echo $content_for_layout; ?>
        <?php #echo $this->element('sql_dump');?>
    </body>
</html>
