(function() {
    function setUpGrid() {
        var width = $(document).width(),
            height = $(document).height(),
            cellWidth = Math.floor(width / 100),
            amountOfRows = Math.floor(height / cellWidth),
            i,
            j;
        $('#grid').width(width);
        for (i = 0; i < amountOfRows; i++) {
            $('#grid').append('<tr style="height: ' + cellWidth + 'px"></tr>');
            for (j = 0; j < 100; j++) {
                $('#grid tr:last').append('<td style=" width: ' + cellWidth + 'px"></td>');
            }
        }
    }

    $(document).ready(function() {
        var currentColor = 'red';

        setUpGrid();

        function fillColor(element, event) {
            if (event.which === 1) {
                $('#colorpicker').fadeOut();
                element.removeClass();
                element.addClass(currentColor);
            }
        }

        $('#grid td').mouseover(function (event) {
            fillColor($(this), event);
        });

        $('#grid td').mousedown(function (event) {
            fillColor($(this), event);
        });

        $(document).on("contextmenu",function(e){
            e.preventDefault();
        });

        $('.color').mousedown(function () {
            currentColor = $(this).attr('id');
            $("#colorpicker").fadeOut();
        });

        $(document).mousedown(function(event){
            if (event.which === 3) {
                $("#colorpicker").css({'top':event.pageY,'left':event.pageX}).fadeIn();
            }
        });
    });
})();

