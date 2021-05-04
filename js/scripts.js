$(function() {
    $('[data-expanded-id]').on('click', function() {
        $('[data-collapsed-id]').addClass('d-none');
        $('[data-expanded-id]').removeClass('d-none');
        $(this).addClass('d-none');

        var expandedId = $(this).attr('data-expanded-id');
        $('#' + expandedId).addClass('fade-in-animation').removeClass('d-none');
    });

    $('[data-collapsed-id]').on('click', function() {
        $(this).addClass('d-none');
        var collapsedId = $(this).attr('data-collapsed-id');
        $('#' + collapsedId).removeClass('d-none');
    });
})