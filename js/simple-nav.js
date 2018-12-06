/*
    simple-nav - v1
    by Shmykov Konstantin
    */

    $(document).ready(function () {
    var menu = $('.simple-nav'), // селектор блока меню
        //menuButton = $('.menu-btn'),
        menuButton_2 = $('.hamburger'), // селектор кнопки меню
        pageContainer = $('#container'), // общий контейнер страницы для эффекта blur
        layout = $('.simple-nav-layout'), // селектор блока подложки
        side = "left"; // сторона выезда ("left","right")

    // переключение положения меню. (true - показать, false - скрыть)
    function toggleMenu(status) {
        if (status) {
            layout.show();

            if (side == "left")
                menu.addClass("simple-nav-left-show");
            else if (side == "right")
                menu.addClass("simple-nav-right-show");
        }
        else {
            menu.removeClass("simple-nav-left-show");
            menu.removeClass("simple-nav-right-show");
            layout.hide();
        }
    }

    // Эффект Blur для страницы (true, false)
    /*function setBlur(status){
        if (status)
            pageContainer.addClass("simple-nav-blur");
        else
            pageContainer.removeClass("simple-nav-blur");
    }*/

    // событие нажатие кнопки "меню"
    menuButton_2.on('click', function(){
        toggleMenu(true)
        setBlur(true);
        /* перебирает класс, делает открытым подменю определенной категории */
        /*if($(this).hasClass('menu-btn_markizy')){                  
            $(".dropdown-menu_2").toggleClass("show");
            
        };
       if($(this).hasClass('menu-btn_pergoly')){
            
        };*/
    });
    // для нижних кнопок
    /*menuButton.on('click', function(){
        toggleMenu(true)
        setBlur(true);
    });*/   

    // событие нажатие на подложку
    layout.on('click',function(){
        toggleMenu(false);
        setBlur(false);
       /* $(".dropdown-menu .show").removeClass("show");
        $(".dropdown a.dropdown-toggle_1").removeClass("on");
        $(".dropdown a.dropdown-toggle_1_2").removeClass("on");   должно обнавлять меню*/ 
    });
});