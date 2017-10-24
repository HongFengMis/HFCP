Room.Page1 = {};
Room.Page1.dom = function(){
    $$("#Page1 .back").click(function(){
        Room.Page1.ppt();
    });

    $$("#Page1 .btn").click(function(){
        var id = $(this).data("id");
        page1_box(id);
    });

};
Room.Page1.ppt = function(){
    cc.ppt(["Page1", "Index"] , function(after){

        cc.m["Page1"].velocity({scale: [0.85, 1] , opacity: [0, 1] } , {delay:300, duration:600, display:"none"});
        cc.m["Index"].velocity({scale: [1, 2] , left:[0, 1000], opacity: [1, 0]} , {duration:800});
        cc.m["Index"].show();

    })
};

Room.Page1.ppt_page = function(i){
    Dom.P1 = i;
    cc.ppt(["Page1", "Page1_"+i, "", "Page1X"] , function(after){
        cc.m["Page1_"+i].show();
    })
};

function page1_box(i){
    page1_go();

    $$("#Page1 .Tit"+i).show().velocity({left: [407, 96], opacity: [1, 0]} , {duration:1000});

    Room.Page1.ppt_page(i);
}

function page1_go(){
    $$("#Page1 .box_tit").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page1 .btn").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page1 .box").velocity({top: [245, 542], height:[568,417]} , {delay:300,duration:800});

    $$("#Page1 .Tit0").velocity({left: [96, 407], opacity: [0, 1]} , {duration:1000});
    $$("#Page1 .back").velocity({left: [1920, 1699], opacity: [0, 1]} , {duration:1000});
}
function page1_back(next){

    $$("#Page1 .box").velocity({top: [542, 245], height:[417, 568]} , {delay:100,duration:800, complete:function(){
        if(next) next();
    }});

    $$("#Page1 .Tit0").velocity({left: [407, 96], opacity: [1, 0]} , {duration:1000});
    $$("#Page1 .back").velocity({left: [1699, 1920], opacity: [1, 0]} , {duration:1000});

    $$("#Page1 .box_tit").velocity({opacity: [1, 0] , top: [582, 542]} , {delay:300,duration:800});
    $$("#Page1 .btn").velocity({opacity: [1, 0], top: [662, 642]} , {delay:500,duration:800});
}

Room.Page1X = {};
Room.Page1X.action = function(){

    $$(".Page1 .back .bb").click(function(){
        var id = $(this).data("id");

        cc.ppt([cc.id, "Page1", "Page1X", "Page1Back"] , function(after){
            cc.m[cc.old].hide();
        })
    });

    $$(".Page1 .menu").click(function(){
        var id = $(this).data("id");
        var mid = $(this).data("mid");
        if(mid==Dom.P1_m) return;
        page1_mid(id, mid);

    });

    $$(".Page1 .intro .cls").click(function(){
        $$(".Page1 .intro .cls").parent().fadeOut();
    });

    $$(".Page1 .m .btn_intro").click(function(){
        var id = $(this).data("id");
        $$(".Page1 .intro"+id+" .HammerImg_Box").css({width: 760,height: 1000, "margin-left":0, "margin-top":0});
        Dom.HammerImg.reset();
        $$(".Page1 .intro"+id).fadeIn();
    });
};

function page1_mid(id, mid){
    $$("#Page1_"+id+" .menu"+Dom.P1_m+" .act").velocity("stop").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page1_"+id+" .menu"+mid+" .act").velocity({opacity: [1, 0]} , {duration:600, loop:true});
    $$("#Page1_"+id+" .main").velocity({left: [-(mid-1)*1920, -(Dom.P1_m-1)*1920]} , {duration:200});

    Dom.P1_m = mid;
}
Room.Page1X.come_before = function(next){

    Dom.P1_m = 1;
    $$("#Page1_"+Dom.P1+" .main").css({"opacity":0, "left":0});
    $$("#Page1_"+Dom.P1+" .menus").css("opacity", 0);
    $$("#Page1_"+Dom.P1+" .menu .act").velocity("stop").css("opacity", 0);
    $$("#Page1_"+Dom.P1+" .menu1 .act").velocity({opacity: [1, 0]} , {duration:600, loop:true});

    $$("#Page1_"+Dom.P1+" .back").velocity({left: [1533, 1920] , opacity: [1, 0]} , {duration:1000});
    $$("#Page1_"+Dom.P1+" .main").velocity({opacity: [1, 0]} , {delay:800, duration:800});
    $$("#Page1_"+Dom.P1+" .menus").velocity({opacity: [1, 0]} , {delay:800, duration:800});


    if(next) next();
};

Room.Page1X.go_before = function(next){

    $$("#Page1 .Tit"+Dom.P1).velocity({left: [96, 407], opacity: [0, 1]} , {duration:1000});
    $$("#Page1_"+Dom.P1+" .back").velocity({left: [1920, 1533] , opacity: [0, 1]} , {duration:1000});
    $$("#Page1_"+Dom.P1+" .main").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page1_"+Dom.P1+" .menus").velocity({opacity: [0, 1]} , {duration:600});
    if(next) next();
};

Room.Page1Back = {};
Room.Page1Back.come_before = function(next){
    page1_back(next);
};