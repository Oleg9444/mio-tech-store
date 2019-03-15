const clockPlaceholder = document.querySelector('.clock');
setInterval(() => clockPlaceholder.innerText = (new Date()).toLocaleTimeString(),
    1000);

let container = $("#mySlider"),
    animated = false;

container.click(function() {
    if (animated) return;
    animated = true;

    let first = $(this).children(':first'),
        width = first.outerWidth();

    $(this).animate({
        marginLeft: "-=" + width
    }, 800, function() {
        $(this).css('margin-left', 0).append(first);
        animated = false;
    });
});