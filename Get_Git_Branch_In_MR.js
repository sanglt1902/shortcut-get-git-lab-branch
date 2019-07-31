javascript: (function () {

    $('.btn-secondary.btn-secondary').trigger('click');
    $('body').append('<div class="toast"><div class="inner-box">Copied!<div></div>');

    const toastNode = $('.toast');
    const innerBox = $('.inner-box');
    toastNode.css({
        'width': '100%',
        'box-sizing': 'border-box',
        'position': 'fixed',
        'top': '20%',
        'transform': 'translateY(-50%)',
        'text-align': 'center',
        'z-index': '15',
        'transition': 'visibility 1s, opacity 1s linear, top 1s ease-in-out',
    });
    innerBox.css({
        'display': 'inline-block',
        'width': 'auto',
        'background-color': 'rgba(0, 0, 0, 0.7)',
        'color': '#fff',
        'padding': '15px 20px',
        'border-radius': '6px',
        'font-size': '18px',
    });

    setTimeout(function () {
        toastNode.remove();
    }, 1000);
    
})();