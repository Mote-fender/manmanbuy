$(function(){
    var mmb = new MMB();
    mui('.mui-scroll-wrapper').scroll({
        bounce: false,
        deceleration: 0.001
    });
    mmb.gethight();
    mmb.mall();
    mmb.getcomment();
    
});
function MMB(){

};
MMB.prototype = {
    gethight: function(){
        var windowHeight = document.body.offsetHeight|| document.documentElement.offsetHeight;
        var height = windowHeight - 60;
        $("#main").height(height);
    },
    mall: function(){
        $(".more").on("click",function(){
            $("#nav .mui-row").height(300);
        })
    },
    getcomment: function(){
        $.ajax({
            url: "http://localhost:9090/api/getmoneyctrl",
            success: function(data){
               var html = template("commenttmp",data);
               $("#comment .mui-table-view").html(html);
               $("#comment .mui-table-view img").addClass("mui-media-object mui-pull-left")
            }
        })
    }
}