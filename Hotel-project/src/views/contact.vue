<template>
  <div class="container-fluid m-0 p-0 my_bg_lg">
    <my-header></my-header>
    <section class="text-center mt-5 pl-5 pr-5">
 <!--标题-->
 <h1 class="big_title text-white font-weight-bold">如何找到我们</h1>
<!-- 酒店地址、联系方式、联系表-->
 <div class="container bg-light mt-5 pb-5 m-auto" style="border:1px solid #00AD8A;">
  <div class="row">
	<!--左侧栏酒店地址及联系方式-->
	<div class="col-md-4 col-sm-12 text-center mt-5">
	  <h1>地址</h1>
	  <div class="d-block text-justify mt-5">
		  <p class="text-indent"><img src="image/ditu.png"/>海南省三亚市海棠区海棠湾301路9号</p>
		  <p class="text-indent">☎ 免费电话：+1 078 4589 2456</p>
		  <p class="text-indent">☎ 电话：+1 078 4589 2456</p>
		  <p class="text-indent">✉ 传真：+1 078 4589 2456</p>
		  <p class="text-indent">▶ info@example.com</p>
	  </div>
	</div>
	<!--右侧栏联系表-->
	<div class="col-md-8 col-sm-12 text-center mt-4 p-4">
	  <form>
		<h1>联系表</h1>
		<div class="row">
		  <div class="col-lg-4 col-sm-12 mb-sm-2">
			<input class="text-indent2" type="text" name="Name" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="" style="border:1px solid #00AD8A;">
		  </div>
		  <div class="col-lg-4 col-sm-12 mb-sm-2">
			<input class="text-indent2" type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required="" style="border:1px solid #00AD8A;">
		  </div>
		  <div class="col-lg-4 col-sm-12 mb-sm-2">
			<input class="text-indent2" type="text" name="Phone" value="Phone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}" required="" style="border:1px solid #00AD8A;">
		  </div>
		</div>
		<div class="p-3 pb-0">
		  <!-- 留言输入框-->
		  <input class="col-12 text-center" type="text" value="联系我们请留言！" style="height: 150px;width: 100%; border:1px dashed #00AD8A;"/>
		  <!-- 提交按钮-->
		  <div class="col-12 text-right">
			<input class="col-sm-3 text-center mt-3 btn btn-green" type="submit" style="height: 40px;width: 50%; text-align:center"/>
		  </div>
		</div>
	  </form>
	</div>
  </div>
</div>
<!-- 酒店地图-->
<div class="mt-5 mb-5">
  <img class="container w-100 p-0" src="image/place.png" id="my_border" title="酒店所在地的地图"/>
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
/*酒店地图的边框设置*/
#my_border{border: 1px solid grey;}
/*鼠标悬停酒店地图时图片放大*/
#my_border:hover{ transform: scale(1.2);}
.text-indent{text-indent: 3rem;}
.text-indent2{text-indent: 1rem;}
.btn-green {
    color: #fff;
    background-color: #00AD8A;
    border-color: #00AD8A;
}
</style>
