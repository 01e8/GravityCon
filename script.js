function displaynone() {
    document.getElementById("curtain").style.display = "none";  
};
function downheight() {
    document.getElementById("curtain").style.opacity = "0";
    document.body.style.overflow = "auto";
};
function readytoshow() {
    document.getElementById("boxload").style.opacity = "0";
    document.getElementById("textload").style.opacity = "0";
};

window.onload = function() {
    
        //Кнопки покупки билетов
        $("#buttonbuy").mouseout(function(e){
            $("#subbuttonbuy").css("background-color", "#ffffff");
            $("#subbuttonbuy").css("color", "#000000");
        });
        $("#buttonbuy").mousemove(function(e){
            $("#subbuttonbuy").css("background-color", "#1c1c1c");
            $("#subbuttonbuy").css("color", "#ffffff");
        });
        $("#buttonbuy2").mouseout(function(e){
            $("#subbuttonbuy2").css("background-color", "#ffffff");
            $("#subbuttonbuy2").css("color", "#000000");
        });
        $("#buttonbuy2").mousemove(function(e){
            $("#subbuttonbuy2").css("background-color", "#1c1c1c");
            $("#subbuttonbuy2").css("color", "#ffffff");
        });
    
        //Кнопки меню
        document.getElementById("but1").onclick = function() {
            var top = ($('#description').offset().top) - 48;
            $('body,html').animate({scrollTop: top}, 1000);
        };
        document.getElementById("but2").onclick = function() {
            var top = ($('#subrulebutton').offset().top) - 25;
            $('body,html').animate({scrollTop: top}, 1000);
        };
        document.getElementById("but3").onclick = function() {
            var top = ($('#maps').offset().top) - 48;
            $('body,html').animate({scrollTop: top}, 1000);
        };
        document.getElementById("but5").onclick = function() {
            var top = ($('#registration').offset().top) - 48;
            $('body,html').animate({scrollTop: top}, 1000);
        };
        document.getElementById("but4").onclick = function() {
            var top = ($('#connect').offset().top) - 48;
            $('body,html').animate({scrollTop: top}, 1000);
        };
    
        //Кнопка правил поведения
        document.getElementById("rulebutton").onclick = function() {
            document.getElementById("rule").style.display = "block";
            document.getElementById("rule").style.opacity = "1";
            $("body").css("overflow", "hidden");
            $("body").css("width", "calc(100vw - 16px)");
        };
        document.getElementById("cross").onclick = function() {
            document.getElementById("rule").style.display = "none";
            document.getElementById("rule").style.opacity = "0";
            $("body").css("overflow", "auto");
            $("body").css("width", "100%");
        };
        document.getElementById("ruleshadow").onclick = function() {
            document.getElementById("rule").style.display = "none";
            document.getElementById("rule").style.opacity = "0";
            $("body").css("overflow", "auto");
            $("body").css("width", "100%");
        };
        
        //Прозрачность меню
        if ($(this).scrollTop() > 450){ 
            document.getElementById("menu").style.opacity = "1";
        }
        else{
            document.getElementById("menu").style.opacity = "0.8";
        }
    
        //Изначальное появление картинок в описании
        if ($(window).scrollTop() + $(window).height() >= $("#whattoexpect").offset().top + $("#whattoexpect").height()) {
            $(window).unbind("scroll");
            document.getElementById("gravityfan").style.opacity = "1";
            document.getElementById("ponyfan").style.opacity = "1";
            document.getElementById("gravityfanimg").style.marginLeft = "0px";
            document.getElementById("ponyfanimg").style.marginLeft = "0px";
            document.getElementById("fandomtext").style.opacity = "1";
        };

    
        //Изначальный подсчёт координат элементов шапки
        document.getElementById("backwallimg").style.marginTop = ($(this).scrollTop()/2) + "px";
        document.getElementById("logoimg").style.marginTop = ($(this).scrollTop()/3) + "px";

        //Скрытие шторки загрузки сайта
        setTimeout(readytoshow, 400);
        setTimeout(downheight, 800);
        setTimeout(displaynone, 1200);
    
        //Собитие скроллинга
        $(window).scroll(function() {
            
            //Появление картинок в описании от скролла
            if ($(window).scrollTop() + $(window).height() >= $("#whattoexpect").offset().top + $("#whattoexpect").height()) {
                document.getElementById("gravityfan").style.opacity = "1";
                document.getElementById("ponyfan").style.opacity = "1";
                document.getElementById("gravityfanimg").style.marginLeft = "0px";
                document.getElementById("ponyfanimg").style.marginLeft = "0px";
                document.getElementById("fandomtext").style.opacity = "1";
            };
            
            //Стиль меню от скроллинга
            if ($(this).scrollTop() > 450){  
                document.getElementById("menu").style.opacity = "1";
            }
            else{
                document.getElementById("menu").style.opacity = "0.8";
            }
            
            
            //Подсчёт координат в шапке
            document.getElementById("backwallimg").style.marginTop = ($(this).scrollTop()/2) + "px";
            document.getElementById("logoimg").style.marginTop = ($(this).scrollTop()/3) + "px";
        });
};