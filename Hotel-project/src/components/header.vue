<template>
  <header id="header" class="container-fluid p-0">
    <!--顶部轮播图-->
    <div id="mycar" class="carousel" data-ride="carousel">
        <!-- 图片-->
        <div class="carousel-inner">
            <div class="carousel-item active"><img class="w-100" src="image/ban1.jpg"/></div>
            <div class="carousel-item"><img class="w-100" src="image/b4.jpg"/></div>
            <div class="carousel-item"><img class="w-100" src="image/ban3.jpg"/></div>
            <div class="carousel-item"><img class="w-100" src="image/ban4.jpg"/></div>
        </div>
        <!-- 左右箭头-->
        <a href="#mycar" class="carousel-control-prev active" data-slide="prev"><span class="carousel-control-prev-icon"></span></a>
        <a href="#mycar" class="carousel-control-next" data-slide="prev"><span class="carousel-control-next-icon"></span></a>
        <!-- 轮播指示器-->
        <ul class="carousel-indicators">
            <li data-slide-to="0" data-target="#mycar" class="active"></li>
            <li data-slide-to="1" data-target="#mycar"></li>
            <li data-slide-to="2" data-target="#mycar"></li>
            <li data-slide-to="3" data-target="#mycar"></li>
        </ul>
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
/*轮播图左右箭头的修饰*/
.carousel-control-prev,
.carousel-control-next{
    width:2% !important;height:10%;
    background: rgb(0,0,0,0.6);
    border-radius: 10%;
    top:45%;
}
.carousel-control-prev{left:5px !important;}
.carousel-control-next{right: 5px !important;}
/*轮播图的指示器修饰*/
.carousel-indicators li{height: 8px !important;}
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
