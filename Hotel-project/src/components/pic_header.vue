<template>
  <header id="header" class="container-fluid p-0">
    <!--顶部无缝滚动-->
    <div id="demo">
		  <div id="indemo">
			  <div id="demo1">
			  	<a href="javascript:;"><img src="image/sy/sy_16.jpg" border="0" /></a>
			  	<a href="javascript:;"><img src="image/sy/sy_09.jpg" border="0" /></a>
			  	<a href="javascript:;"><img src="image/sy/sy_02.jpg" border="0" /></a>
			  	<a href="javascript:;"><img src="image/sy/sy_03.jpg" border="0" /></a>
			  </div>
			  <div id="demo2"></div>
			  <div id="demo3"></div>
		  </div>
	  </div>
    <!-- 导航栏-->
    <div class="navbar navbar-expand-md navbar-dark my_bg nav_border_bottom">
        <!-- 1、不隐藏的标题-->
        <a href="#"><img class="w-75" src="image/logo_font.png"/></a>
        <!-- 2、小屏幕显示的-->
        <button class="btn btn-dark navbar-toggler" data-toggle="collapse" data-target="#content">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 3、折叠的导航-->
        <div class="collapse navbar-collapse justify-content-end" id="content">
            <ul class="navbar-nav text-center">
                <li class="nav-item">
                    <a class="nav-link my_font_nav text-dark ml-lg-5" @click="Index">首页</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my_font_nav text-dark ml-lg-5" @click="Hotel">酒店</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my_font_nav text-dark ml-lg-5" @click="Restaurant">餐厅</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my_font_nav text-dark ml-lg-5" @click="Picture">画廊</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my_font_nav text-dark ml-lg-5" @click="AboutUs">关于</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my_font_nav text-dark ml-lg-5" @click="Contact">客服</a>
                </li>
            </ul>
        </div>
    </div>
</header>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
      Index(){
       this.$router.push("/Index")
      },
      Hotel(){
       this.$router.push("/Hotel")
      },
      Restaurant(){
       this.$router.push("/Restaurant")
      },
      Picture(){
       this.$router.push("/Picture")
      },
      AboutUs(){
       this.$router.push("/AboutUs")
      },
      Contact(){
       this.$router.push("/Contact")
      },
      
  }
}
</script>
<style scoped>
/*左无缝滚动*/
#demo {
    text-align: center;
    margin: auto;
    background: #FFF;
    overflow:hidden;
    border: 1px dashed #CCC;
    width:100%;
}
#demo img {
    float: left;
    width: 640px;
    height: 426px;
    border: 3px solid #F2F2F2;
}
#indemo {
    float: left;
    width: 1000%;
}
#demo1{ float: left; }
#demo2{ float: left; }
#demo3{ float: left; }
/*导航栏*/
.my_bg{background:rgb(71,220,201);}
/*导航栏字体样式*/
.my_font_nav{
    color:gray;
    font-size:2rem;
    font-family: "宋体" !important;
}
#content{/*折叠导航栏的宽*/
    width: 25%;
    margin-right: auto;
}
/*导航栏下边框*/
.nav_border_bottom{border-bottom: 2px solid #fff !important;}
/*导航栏里的li宽*/
.navbar-expand ul li{width: 25%;}
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
</style>