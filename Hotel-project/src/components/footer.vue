<template>
  <footer>
  <!--底部详情楼层-->
  <div class="d-flex justify-content-around m-0 p-5 my_bg_footer">
	  <div>
	    <h4>保持联系</h4>
	    <table>
		    <tr><td>办公室：0041-456-3692</td></tr>
		    <tr><td>手机：0200-123-4567</td></tr>
		    <tr><td>info@example.com</td></tr>
		    <tr><td>传真：0091-789-456100</td></tr>
	    </table>
    </div>
		<div>
	    <h4>酒店顶级链接</h4>
	    <table>
		    <tr><td>我们的故事</td></tr>
		    <tr><td>睡眠计划</td></tr>
		    <tr><td>行政旅行计划</td></tr>
		    <tr><td>丰富的健康</td></tr>
	    </table>
    </div>
		<div>
	    <h4>我们的房间</h4>
	    <table>
		    <tr><td>高级客房</td></tr>
		    <tr><td>豪华房</td></tr>
		    <tr><td>商务房</td></tr>
		    <tr><td>行政角落间</td></tr>
	    </table>
    </div>
		<div>
	    <h4>我们的服务</h4>
	    <table>
		    <tr><td>客房服务</td></tr>
		    <tr><td>免费上网Wifi</td></tr>
		    <tr><td>电视（50个频道）</td></tr>
		    <tr><td>可带宠物</td></tr>
	    </table>
    </div>
  </div>
	<!-- 底部版权详情-->
	<div class="p-0 text-center copy-section">
		<!-- 版权-->
		<div class="pt-5">
			<p class="pt-3">Copyright © 2019.公司名称保留所有权利。<a href="index.html" target="_blank" title="更多详情">更多详情</a> -从<a href="index.html" title="柏爱酒店" target="_blank">柏爱酒店首页</a>了解</p>
		</div>
		<div class="social-icons footer_logo">
			<a href="javascript:;"><i class="icon"></i></a>
			<a href="javascript:;"><i class="icon1"></i></a>
			<a href="javascript:;"><i class="icon2"></i></a>
			<a href="javascript:;"><i class="icon3"></i></a>
		</div>
	</div>
</footer>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>
<style scoped>
/*============footer底部*===========/
/*footer的背景色*/
.my_bg_footer{background:#333 !important;}
/*footer的字体*/
footer h4,footer td{font-weight: bolder;color:rgba(245,245,245,0.5);font-family: "宋体";}
footer h4{text-align: left;color: #fff;}
/*footer里的a标签清除下划线*/
footer a{text-decoration: none;}
/*鼠标经过footer里的a标签时清除下划线*/
footer a:hover{text-decoration: none;}
/*初始i的背景色设置*/
.footer_logo a i.icon{  background: #777 url(../../public/image/icon.png) no-repeat 0px 0px;}
.footer_logo a i.icon1{  background: #777 url(../../public/image/icon1.png) no-repeat 0px 0px;}
.footer_logo a i.icon2{  background: #777 url(../../public/image/icon2.png) no-repeat 0px 0px;}
.footer_logo a i.icon3{  background: #777 url(../../public/image/icon3.png) no-repeat 0px 0px;}
/*鼠标经过i时沿Y轴旋转360deg*/
.social-icons i.icon:hover,
.social-icons i.icon1:hover,
.social-icons i.icon2:hover,
.social-icons i.icon3:hover {
    transform: rotateY(360deg);
}
/*鼠标经过i时设置背景色*/
.social-icons i.icon:hover{ background: #00AD8A url(../../public/image/icon.png) no-repeat 0px 0px;}
.social-icons i.icon1:hover{ background: #00AD8A url(../../public/image/icon1.png) no-repeat 0px 0px;}
.social-icons i.icon2:hover{ background: #00AD8A url(../../public/image/icon2.png) no-repeat 0px 0px;}
.social-icons i.icon3:hover{ background: #00AD8A url(../../public/image/icon3.png) no-repeat 0px 0px;}
/*版权下的i背景定位*/
.footer_logo i {background-position: 0px 0px;  }
/*设置i的大小以及动画*/
.footer_logo a i {
    width: 32px;
    height: 32px;
    display: inline-block;
    margin: 0 0.2em;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
/*底部版权的背景色*/
.copy-section {background: #000;  }
/*为social-icons设置上外边距*/
.social-icons { margin-top: 1em;  }

</style>