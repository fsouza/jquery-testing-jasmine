(function ($) {
    $.fn.zebrafy = function () {
        return this.each(function (index, table) {
            $(table).find("tr:even").addClass("zebrafy-even");
            $(table).find("tr:odd").addClass("zebrafy-odd");
        });
    };
})(jQuery);
