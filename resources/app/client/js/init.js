function loader(){
    libs.server(init.view, 1);
}

var init = {};

init.main = function(){
    libs.create();
    libs.setTicker(25);

    $(".cc:not('#Loader')").hide();
    libs.iniDom();
    Room.Loader.ppt();
};

init.view = function(){
    $(".cc").show();

    //定义产品
    init.view_page1(1);
    init.view_page1(2);
    init.view_page1(3);
    init.view_page1(4);
    init.view_page1(5);
    init.view_page1(6);
    Room.Page1X.action();
    hammerFlipster();

    //定义解决方案
    init.view_page2(1);
    init.view_page2(2);
    init.view_page2(3);
    init.view_page2(4);
    Room.Page2X.action();

    //中英文
    Room.Index.lang();


    Dom.HammerScroll = new HammerScroll(".HammerScroll");
    Dom.HammerImg = new HammerImg(".picZoom", 580, 26);

    setTimeout(init.main, 500);
};

init.view_page1 = function(id){
    var page = Base.page1["p1_"+id];
    if(!page.length) return;

    var View_page1 = _.template($("#View_page1").html()),
        View_page1_m = _.template($("#View_page1_m").html()),
        View_page1_menu = _.template($("#View_page1_menu").html());

    var html_m = "",
        html_menu = "",
        html_case = "";

    for(var i in page){

        var p1 = page[i];
        p1.id = id;
        p1.i = parseInt(i)+1;
        html_case = "";
        for(var c in p1.case){
            html_case+= '<li><img src="../../uploads/page1/'+p1.case[c]+'"></li>';
        }
        p1.caseLi = html_case;

        html_m += View_page1_m(p1);
        html_menu += View_page1_menu(p1);

    }

    var json = {id:id, menus:html_menu, m:html_m};
    var html = View_page1(json);
    $("#CC").append(html);


    $("#Page1_"+id+" .main").css({"wiidth" : 1920*page.length});
    // $(".Page1 .main")[0].wiidth = 1920*page.length;
    $("#Page1_"+id+" .menu1 .act").css("opacity", 1);
    $("#Page1_"+id+" .menus").css("margin-left" , (1920-(185*parseInt(page.length)))/2+"px");
    // $(".Page1 .menus")[0].style.marginLeft = (1920-(185*page.length))/2+"px";

    $(".flipster").flipster({ style: 'carousel', start: 0 });


};

function hammerFlipster(){

    var hammer = $(".case_hammer");
    var hammerF = [];
    for(var i=0; i<hammer.length; i++){

        hammerF[i] = new Hammer.Manager(hammer[i]);
        hammerF[i].add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 }));
        hammerF[i].on("panend", Hammer.bindFn(hammerFlipster_onPan, $(hammer[i])));
    }

}
function hammerFlipster_onPan(ev){
    var id = this.data("id");

    console.log( id, ev.deltaX);
    if(ev.deltaX>0){
        $(".flipster"+id+" .flip-prev").trigger("click");
    }else{
        $(".flipster"+id+" .flip-next").trigger("click");
    }
}

init.view_page2 = function(id){
    var page = Base.page2["p2_"+id];
    if(!page.length) return;

    var View_page2 = _.template($("#View_page2").html()),
        View_page2_m = _.template($("#View_page2_m").html()),
        View_page2_menu = _.template($("#View_page2_menu").html());

    var html_m = "",
        html_menu = "";

    for(var i in page){
        var p2 = page[i];
        p2.id = id;
        p2.i = parseInt(i)+1;

        html_m += View_page2_m(p2);
        html_menu += View_page2_menu(p2);

    }

    var json = {id:id, menus:html_menu, m:html_m};
    var html = View_page2(json);
    $("#CC").append(html);

    $("#Page2_"+id+" .main").css("width", 1920*page.length);
    $("#Page2_"+id+" .menu1 .act").css("opacity", 1);
    $("#Page2_"+id+" .menus").css("margin-left" , (1920-(185*page.length))/2);

};