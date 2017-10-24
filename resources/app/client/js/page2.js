Room.Page2 = {};
Room.Page2.dom = function(){
    $$("#Page2 .back").click(function(){
        Room.Page2.ppt();
    });

    $$("#Page2 .btn").click(function(){
        var id = $(this).data("id");
        page2_box(id);
    });

};
Room.Page2.ppt = function(){
    cc.ppt(["Page2", "Index"] , function(after){

        cc.m["Page2"].velocity({scale: [0.85, 1] , opacity: [0, 1] } , {delay:300, duration:600, display:"none"});
        cc.m["Index"].velocity({scale: [1, 2] , left:[0, 1000], opacity: [1, 0]} , {duration:800});
        cc.m["Index"].show();

    })
};

Room.Page2.ppt_page = function(i){
    Dom.P2 = i;
    cc.ppt(["Page2", "Page2_"+i, "", "Page2X"] , function(after){
        cc.m["Page2_"+i].show();
    })
};

function page2_box(i){
    page2_go();

    $$("#Page2 .Tit"+i).show().velocity({left: [407, 96], opacity: [1, 0]} , {duration:1000});

    Room.Page2.ppt_page(i);
}

function page2_go(){
    $$("#Page2 .box_tit").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page2 .btn").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page2 .box").velocity({top: [245, 542], height:[568,417]} , {delay:300,duration:800});

    $$("#Page2 .Tit0").velocity({left: [96, 407], opacity: [0, 1]} , {duration:1000});
    $$("#Page2 .back").velocity({left: [1920, 1699], opacity: [0, 1]} , {duration:1000});
}
function page2_back(next){

    $$("#Page2 .box").velocity({top: [542, 245], height:[417, 568]} , {delay:100,duration:800, complete:function(){
        if(next) next();
    }});

    $$("#Page2 .Tit0").velocity({left: [407, 96], opacity: [1, 0]} , {duration:1000});
    $$("#Page2 .back").velocity({left: [1699, 1920], opacity: [1, 0]} , {duration:1000});

    $$("#Page2 .box_tit").velocity({opacity: [1, 0] , top: [582, 542]} , {delay:300,duration:800});
    $$("#Page2 .btn").velocity({opacity: [1, 0], top: [662, 642]} , {delay:500,duration:800});
}

Room.Page2X = {};
Room.Page2X.action = function(){

    $$(".Page2 .back .bb").click(function(){
        var id = $(this).data("id");

        cc.ppt([cc.id, "Page2", "Page2X", "Page2Back"] , function(after){
            cc.m[cc.old].hide();
        })
    });

    $$(".Page2 .menu").click(function(){
        var id = $(this).data("id");
        var mid = $(this).data("mid");
        if(mid==Dom.P2_m) return;
        page2_mid(id, mid);

    });

};

function page2_mid(id, mid){
    $$("#Page2_"+id+" .menu"+Dom.P2_m+" .act").velocity("stop").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page2_"+id+" .menu"+mid+" .act").velocity({opacity: [1, 0]} , {duration:600, loop:true});
    $$("#Page2_"+id+" .main").velocity({left: [-(mid-1)*1920, -(Dom.P2_m-1)*1920]} , {duration:200});

    Dom.P2_m = mid;
}
Room.Page2X.come_before = function(next){

    Dom.P2_m = 1;
    $$("#Page2_"+Dom.P2+" .main").css({"opacity":0, "left":0});
    $$("#Page2_"+Dom.P2+" .menus").css("opacity", 0);
    $$("#Page2_"+Dom.P2+" .menu .act").velocity("stop").css("opacity", 0);
    $$("#Page2_"+Dom.P2+" .menu1 .act").velocity({opacity: [1, 0]} , {duration:600, loop:true});

    $$("#Page2_"+Dom.P2+" .back").velocity({left: [1533, 1920] , opacity: [1, 0]} , {duration:1000});
    $$("#Page2_"+Dom.P2+" .main").velocity({opacity: [1, 0]} , {delay:800, duration:800});
    $$("#Page2_"+Dom.P2+" .menus").velocity({opacity: [1, 0]} , {delay:800, duration:800});


    if(next) next();
};

Room.Page2X.go_before = function(next){

    $$("#Page2 .Tit"+Dom.P2).velocity({left: [96, 407], opacity: [0, 1]} , {duration:1000});
    $$("#Page2_"+Dom.P2+" .back").velocity({left: [1920, 1533] , opacity: [0, 1]} , {duration:1000});
    $$("#Page2_"+Dom.P2+" .main").velocity({opacity: [0, 1]} , {duration:600});
    $$("#Page2_"+Dom.P2+" .menus").velocity({opacity: [0, 1]} , {duration:600});
    if(next) next();
};

Room.Page2Back = {};
Room.Page2Back.come_before = function(next){
    page2_back(next);
};