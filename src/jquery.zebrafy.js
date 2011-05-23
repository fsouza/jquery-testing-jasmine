(function ($) {
    $.fn.zebrafy = function () {
        this.find("tr:even").addClass("zebrafy-even");
        this.find("tr:odd").addClass("zebrafy-odd");
    };
})(jQuery);
