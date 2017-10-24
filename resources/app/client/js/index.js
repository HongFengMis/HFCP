Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after){
        cc.m["Loader"].velocity({ opacity: 0 }, 1000, function () {
            cc.m["Loader"].hide()
        });

        cc.m[Start].show();
        cc.m[Start].velocity({ opacity: [1,0] }, 1000);

        $$(".nowTime").html(getNowFormatDate());
        setInterval(function(){
            $$(".nowTime").html(getNowFormatDate());
        },1000);
    })
};

Room.Index = {};
Room.Index.dom = function(){
    $$v("#v1");
    $$v("#v2");

    $$("#Index .btn1").click(function(){
        Room.Index.ppt_page1();
    });

    $$("#Index .btn2").click(function(){
        Room.Index.ppt_page2();
    });

};
Room.Index.lang = function(){
    $$(".cn").click(function(){
        if(!$$(".cn").hasClass("act")){
            $$(".cn").addClass("act");
            $$(".en").removeClass("act");

            $$(".CN").show();
            $$(".EN").hide();

            Dom.HammerScroll.reset();
        }
    });

    $$(".en").click(function(){
        if(!$$(".en").hasClass("act")){
            $$(".en").addClass("act");
            $$(".cn").removeClass("act");

            $$(".EN").show();
            $$(".CN").hide();

            Dom.HammerScroll.reset();
        }
    });
};
Room.Index.ppt = function(id){
    cc.ppt([cc.id, id] , function(after){
        cc.m[cc.old].hide();
        cc.m[id].show();
    })
};
Room.Index.ppt_page1 = function(){
    cc.ppt(["Index", "Page1"] , function(after){
        after.go();
        $$("#Index .logo").velocity({opacity: [0, 1]} , {duration:200});
        cc.m["Index"].velocity({scale: [4, 1] , left:[1500, 0], opacity: [0, 1]} , {duration:1000});
        cc.m["Page1"].velocity({scale: [1, 0.85] ,opacity: [1, 0] } , {duration:500});
        cc.m["Page1"].show();
    })
};
Room.Index.ppt_page2 = function(){
    cc.ppt(["Index", "Page2"] , function(after){
        after.go();
        $$("#Index .logo").velocity({opacity: [0, 1]} , {duration:200});
        cc.m["Index"].velocity({scale: [4, 1] , left:[1500, 0], opacity: [0, 1]} , {duration:1000});
        cc.m["Page2"].velocity({scale: [1, 0.85] ,opacity: [1, 0] } , {duration:500});
        cc.m["Page2"].show();
    })
};
Room.Index.come_before = function(next){

    clearTimeout(Dom.hand1);
    clearTimeout(Dom.hand2);

    $$("#v1").play(0);
    $$("#v1").m.css("opacity" , 1);
    $$("#v1").m.show();
    $$("#v2").m.hide();

    $$("#Index .logo").css("opacity" , 0);
    $$("#Index .box").css("opacity" , 0);
    $$("#Index .btn1").css("opacity" , 0);
    $$("#Index .btn2").css("opacity" , 0);

    Dom.hand1 = setTimeout(function(){
        $$("#v2").play(0);
        $$("#v1").m.velocity({opacity: 0} , {duration:1000});
        $$("#v2").m.show();
    }, 7500);

    Dom.hand2 = setTimeout(function(){
        $$("#Index .logo").velocity({left: [203, -900] , opacity: [1, 0]} , {duration:1500, easing:[200, 20]});
        $$("#Index .box").velocity({left: [1242, 1920] , opacity: [1, 0]} , {delay:300, duration:1500, easing:[200, 20]});

        $$("#Index .btn1").velocity({left: [1266, 1920] , opacity: [1, 0]} , {delay:500, duration:1500, easing:[200, 20]});
        $$("#Index .btn2").velocity({left: [1266, 1920] , opacity: [1, 0]} , {delay:550, duration:1500, easing:[200, 20]});

    }, 4500);

    next();

};

Room.Index.go_after = function(next){
    clearTimeout(Dom.hand1);
    clearTimeout(Dom.hand2);

    if(next) next();
};