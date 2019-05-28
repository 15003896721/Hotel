<template>
<div>
<my-header></my-header>
<section class="container-fluid m-0 p-0 my_bg_lg m-auto">
 <!-- 主体部分-->
  <div class="w-100 pl-5 pr-5 text-center">
	<!-- 标题-->
	  <div class="row">
	    <h2 class="mt-5 font-weight-bold text-white col-12 big_title">放松心情,享受美食！</h2>
	    <!-- 左侧栏-->
	    <div class="col-lg-9 col-sm-12 mt-5 p-0">
	    	<!--餐厅介绍图及位置预定-->
	      <div><img src="image/hjct.jpg" class="img-thumbnail gray"></div>
	      <div class="h4 mt-3 btn btn-green">皇家海恩尼餐饮</div>
	      <div class="text-center pl-5 pr-5 ml-5 mr-5"> Lorem Ipsum的段落有许多变化，但是大多数都会通过注入幽默或者看起来不太可信的随机单词进行某种形式的改变。Lorem Ipsum的段落有许多变化，但是大多数都会通过注入幽默或者看起来不太可信的随机单词进行某种形式的改变。但是大多数都会通过注入幽默或者看起来不太可信的随机单词进行某种形式的改变。随机单词进行某种形式的改变。</div>
	      <div class="row" id="left">
		      <div class="col-md-6 col-sm-12 mt-4 pl-lg-5">
		      	<div class="text-lg-right">
			        <img src="image/jiatingyongcan.jpg" class="img-thumbnail gray">
			      </div>
			      <div class="h4 mt-3 btn btn-green">家庭用餐</div>
		       	<div class="text-lg-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		       	<div class="text-lg-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		      </div>
		      <div class="col-md-6 col-sm-12 mt-4 pr-lg-5 pl-lg-2">
		       	<div class="text-lg-left">
		       	  <img src="image/xiuxianyongcan.jpg" class="img-thumbnail gray">
		       	</div>
		       	<div class="h4 mt-3 btn btn-green">休闲用餐</div>
		       	<div class="text-lg-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		       	<div class="text-lg-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		      </div>
		      <div class="col-md-6 col-sm-12 mt-4 pl-lg-5">
		        <div class="text-lg-right">
		          <img src="image/zizhucan.jpg" class="img-thumbnail gray">
		        </div>
		        <div class="h4 mt-3 btn btn-green">自助用餐</div>
		        <div class="text-lg-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		        <div class="text-lg-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		      </div>
		      <div class="col-md-6 col-sm-12 mt-4 pr-lg-5 pl-lg-2">
		        <div class="text-lg-left">
		          <img src="image/hunliyongcan.jpg" class="img-thumbnail gray">
		        </div>
		        <div class="h4 mt-3 btn btn-green">婚礼用餐</div>
		        <div class="text-lg-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		        <div class="text-lg-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		      </div>
		      <div class="col-md-6 col-sm-12 mt-4 pl-lg-5 mb-5">
		        <div class="text-lg-right">
			        <img src="image/jiubayongcan.jpg" class="img-thumbnail gray">
		        </div>
		        <div class="h4 mt-3 btn btn-green">酒吧和休息室</div>
		        <div class="text-lg-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		        <div class="text-lg-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		      </div>
		      <div class="col-md-6 col-sm-12 mt-4 pr-lg-5 mb-5 pl-lg-2">
		        <div class="text-lg-left">
		          <img src="image/huwaiyongcan.jpg" class="img-thumbnail gray">
		        </div>
		        <div class="h4 mt-3 btn btn-green">户外用餐</div>
		        <div class="text-lg-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		        <div class="text-lg-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		      </div>
		    </div>
	    </div>
		  <!-- 右侧栏-->
      <div class="col-lg-3 col-sm-12 mt-5 p-0 text-left">
		    <!-- 进行预定-->
	    	<div class="text-center w-100 p-0">
		      <div class="my_font_nav p-0 m-0">餐厅预订☎</div>
		      <div class="row p-0 m-0">
		        <div class="col-12 mt-4 p-0">
		          <div class="my_font p-0">就餐时间：<input class="bg-light w-50 logo" style="text-align: center" type="date" value="stay date" onfocus="this.value = ''" onblur="if (this.value == '') {this.value = 'stay date';}"></div>
			      </div>
			      <div class="col-12 mt-4 p-0">
			        <div class="my_font p-0">成人人数：<input class="bg-light w-50" type="text" value=" population" onfocus="this.value = ''" onblur="if (this.value == '') {this.value =' population';}"></div>
			      </div>
			      <div class="col-12 mt-4 p-0">
			        <div class="my_font p-0">儿童人数：<input class="bg-light w-50" type="text" value=" population" onfocus="this.value = ''" onblur="if (this.value == '') {this.value = ' population';}"></div>
			      </div>
			      <div class="col-12 mt-4 p-0">
			        <div class="my_font p-0">房间类型:
			          <select class="w-50 bg-light pl-3 pt-2 pb-1">
			            <option value="">所有</option>
			            <option>家庭间</option>
			            <option>标准间</option>
			            <option>豪华房</option>
			            <option>单人房</option>
			          </select>
			        </div>
			      </div>
			      <div class="col-12 mt-4 p-0">
			        <div class="my_font p-0">预留电话：<input class="bg-light w-50" type="phone" value=" tellphone" onfocus="this.value = ''" onblur="if (this.value == '') {this.value = ' tellphone';}"></div>
			      </div>
			      <div class="col-12 mt-4 p-0">
			        <div class="btn btn-green my_font h-100 text-center p-0 w-50">提交订单</div>
			      </div>
		      </div>
		    </div>
		    <!--右侧栏推荐酒店以及玩乐-->
		    <div class="mt-5 border-info">
		      <div class="text-center p-5 m-0">
		        <img src="image/djc.jpg" class="img-thumbnail"/>
		        <h4>豪华度假村</h4>
		        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, saepe.</div>
		      </div>
		      <div class="text-center p-5 m-0">
		        <img src="image/ybc.jpg" class="img-thumbnail"/>
		        <h4>豪华度假村</h4>
		        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, saepe.</div>
		      </div>
		    </div>
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
/*主体部分的图片 鼠标经过时变为灰色*/
.center_part img:hover{
    -webkit-filter:grayscale(100%);
    -moz-filter:grayscale(100%);
    -ms-filter:grayscale(100%);
    -o-filter:grayscale(100%);
    filter:grayscale(100%);
    filter:gray;
}
/*左侧栏图片 鼠标经过时变为灰色*/
#left img:hover{
    -webkit-filter:grayscale(100%);
    -moz-filter:grayscale(100%);
    -ms-filter:grayscale(100%);
    -o-filter:grayscale(100%);
    filter:grayscale(100%);
    filter:gray;
    transition:duration;
}
/*右侧栏的日期插入图片*/
.logo{
    background-image: url("../../public/image/date.png");
    background-repeat: no-repeat;
    background-position: left;
}
/*按钮颜色样式*/
.btn-green {
  padding: 5px;
    color: #fff;
    background-color: #00AD8A;
    border-color: #00AD8A;
}
.btn-green:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;
}
.btn-green:focus, .btn-green.focus {
    box-shadow: 0 0 0 0.2rem rgb(0, 173, 138) !important;
}
</style>
