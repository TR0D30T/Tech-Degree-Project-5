$(document).ready(function () {

    //Prevent form submission
    $('form').on('submit', function (e) {
        e.preventDefault();
    });
    //Search function
    $('#search_box').on('keyup', function () {
        const userSearch = $(this).val().toLowerCase();
        $('a[data-title]').each(function () {
            const caption = $(this).attr("data-title").toLowerCase();
            if (caption.indexOf(userSearch) === -1) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }
        });

    });


});
