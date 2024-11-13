$(document).ready(function () {
    $("#pokazBaner").click(function () {
        $("#baner").slideToggle(); 
    });

    $("#grafika").change(function () {
        $(".program").hide();
        const selected = $(this).val();
        if (selected === "wektorowa") {
            $("#wektorowa").slideDown();
        } else if (selected === "rastrowa") {
            $("#rastrowa").slideDown();
        }
    });

    $(document).ready(function () {
        $("#zwij").click(function () {
            $("#article img").slideUp();
        });
    
        $("#rozwin").click(function () {
            $("#article img").slideDown();
        });
    });

    $("#zmienKolor").click(function () {
        $("#article").css("background-color", "white");
        $("#footer").css("background-color", "white");
    });
});
