<template>
  <div class="container-fluid m-0 p-0 my_bg_lg">
    <my-header></my-header>
    <section class="text-center mt-5">
	<!-- 酒店历史介绍-->
  <div class="main container m-auto">
	<h1 class="big_title text-white font-weight-bold text-center mt-5">关于酒店</h1>
    <div class="row mt-5">
	  <div class="col-lg-4 col-sm-12">
		<h1 class="m-3">酒店历史</h1>
		<p class="mb-lg-5 mb-md-2 mb-sm-3 text-justify text-indent">Duis at ante nec neque rhoncus pretium. Ut placerat euismod nibh industry's stand orci donec mollis, est non scelerisque blandit, velit nunc laoreet dol scrambled it to augue non elit aliquam in vehicula sem phasellu consectetur adipiscing elit donec porttitor lectus at neque sollicitudin.</p>
		<p class=" text-justify text-indent">Ut placerat euismod nibh industry's stand orci donec mollis, est non scelerisque blandit, velit nunc laoreet dol scrambled it to augue non elit aliquam in vehicula sem phasellu consectetur adipiscing elit donec porttitor lectus at neque sollicitudin.</p>
	  </div>
	  <div class="col-lg-8 col-sm-12">
		<div class="row">
		  <div class="col-lg-6 col-sm-12 p-1">
			  <img src="image/history1.jpg" class="img-thumbnail"/>
		  </div>
		  <div class="col-lg-6 col-sm-12 p-1">
			  <img src="image/history2.jpg" class="img-thumbnail"/>
		  </div>
		  <div class="col-lg-6 col-sm-12 p-1">
			  <img src="image/history3.jpg" class="img-thumbnail"/>
		  </div>
		  <div class="col-lg-6 col-sm-12 p-1">
			  <img src="image/hl2.jpg" class="img-thumbnail"/>
		  </div>
		</div>
	  </div>
	</div>
  </div>
	<!-- 酒店浏览量、入住量-->
  <div class="w-100 center_img mt-5">
	  <h2 class="my_font_lg text-white mb-5 pt-4">酒店统计</h2>
	  <div class="my_font_nav text-white row count">
		<div class="col-sm-3 mb-5">
		  <p><a href="JavaScript:;">10520</a></p>
		  <p>客流量</p>
		</div>
		<div class="col-sm-3 mb-5">
		  <p><a href="JavaScript:;">372</a></p>
		  <p>房间数量</p>
		</div>
		<div class="col-sm-3 mb-5">
		  <p><a href="JavaScript:;">1516</a></p>
		  <p>注册会员</p>
		</div>
		<div class="col-sm-3 mb-5">
		  <p><a href="JavaScript:;">256</a></p>
		  <p>菜品种类</p>
		</div>
  </div>
  </div>
	<!-- 酒店优秀团队-->
  <div class="container mt-5 m-auto" id="my_border">
	  <h1 class="mt-4">My Team</h1>
	<div class="row team p-5">
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg1.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">玛丽</div>
	  </div>
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg2.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">杰瑞</div>
	  </div>
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg3.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">林梅</div>
	  </div>
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg4.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">marry</div>
	  </div>
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg3.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">Lily</div>
	  </div>
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg5.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">Tom</div>
	  </div>
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg2.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">Jack</div>
	  </div>
	  <div class="col-md-3 col-sm-6" >
		<div><img src="image/yg1.jpg" class="img-thumbnail"/></div>
		<div class="mt-2 mb-2">Judy</div>
	  </div>
	</div>
  </div>
</section>
<my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from '@/components/header.vue' 
import myFooter from '@/components/footer.vue'
export default {
  data(){
    return {

    }
  },
  components:{
		myHeader,
		myFooter
  }
}
</script>
<style scoped>
*{margin:0;padding:0;font-family: "宋体";}
/*container-fluid的背景渐变色*/
.my_bg_lg{background:linear-gradient(to bottom,#47dcc9 0%,#fde2e2 30%,#fde2e2 100%) !important;}
.big_title{font-size: 4rem;}
/*导航栏*/
.my_bg{background:rgb(71,220,201);}
/*导航栏字体样式*/
.my_font_nav{
    color:gray;
    font-size:2rem;
    font-family: "宋体" !important;
}

/*最大字体*/
.my_font_lg{
    font-size:4rem;
    font-family: "宋体" !important;
}
/*最小字体*/
.my_font_sm{font-size: 8px !important;}
.pro{margin:0 auto;}
/*通用字体样式*/
.my_font{
    font-size:1.5rem;
    font-family: "宋体" !important;}
.w-1920{width: 100%;}
.my_font_color{color: #47dcc9;}
p{
    font-family: "宋体" !important;
    font-weight: bolder !important;
}

*{margin:0;padding:0;}
/*左侧栏图片 鼠标经过时变为灰色*/
.main img:hover{
    -webkit-filter:grayscale(100%);
    -moz-filter:grayscale(100%);
    -ms-filter:grayscale(100%);
    -o-filter:grayscale(100%);
    filter:grayscale(100%);
    filter:gray;
    transition:duration;
}
.center_img{height: auto !important;background-color: #000;}
.text-indent{text-indent: 2rem;}
/*==========酒店统计==========*/
/*设置a标签无下划线并设置字体颜色*/
.count p a{text-decoration: none;color: #fff;}
/*设置鼠标悬停时a标签无下划线并设置字体颜色*/
.count p a:hover{text-decoration: none;color: #47dcc9;}
/*设置count里面的div标签里的第一个孩子的标签的属性,设置绕X轴旋转360deg*/
.count div p:nth-child(1):hover{transform: rotateX(360deg);transition: all .5s;}
/*设置鼠标悬停在每个team中的图片绕Y轴旋转360deg*/
.team div div:nth-child(1):hover,
.team div img.team2:hover,
.team div img.team3:hover,
.team div img.team4:hover{
    transform: rotateY(360deg);
    transition: all .5s;
}

</style>
