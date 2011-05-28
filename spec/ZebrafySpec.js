describe('Zebrafy', function () {

    var isTableZebrafyied = function(table) {
        var isZebrafyied = true;

        table.find("tr:even").each(function (index, tr) {
            isZebrafyied = $(tr).hasClass('zebrafy-odd') === false && $(tr).hasClass('zebrafy-even');
            if (!isZebrafyied) {
                return;
            };
        });

        table.find("tr:odd").each(function (index, tr) {
            isZebrafyied = $(tr).hasClass('zebrafy-odd') && $(tr).hasClass('zebrafy-even') === false;
            if (!isZebrafyied) {
                return;
            };
        });

        return isZebrafyied;
    };

    beforeEach(function () {
        this.addMatchers({
            toBeZebrafyied: function() {
                return isTableZebrafyied(this.actual);
            },
            toBeNotZebrafyied: function() {
                return !isTableZebrafyied(this.actual);
            }
        });
    });

    beforeEach(function () {
        $('<table id="zebra-table" class="zebra"></table>').appendTo('body');
        for (var i=0; i < 10; i++) {
            $('<tr></tr>').append('<td></td>').append('<td></td>').append('<td></td>').appendTo('#zebra-table');
        };

        $('<table id="zebra-table-2" class="zebra"></table>').appendTo('body');
        for (var i=0; i < 10; i++) {
            $('<tr></tr>').append('<td></td>').append('<td></td>').append('<td></td>').appendTo('#zebra-table-2');
        };
    });

    afterEach(function () {
        $(".zebra").remove();
    });

    it('should apply classes zebrafy-odd and zebrafy-even to each other table lines', function () {
        var table = $("#zebra-table");
        table.zebrafy();
        expect(table).toBeZebrafyied();
    });

    it('should zebrafy more than one table', function() {
        $('.zebra').zebrafy();
        expect($("#zebra-table")).toBeZebrafyied();
        expect($("#zebra-table-2")).toBeZebrafyied();
    });

    it('should zebrafy table and keep another "unzebrafyied"', function() {
        $("#zebra-table").zebrafy();
        expect($("#zebra-table")).toBeZebrafyied();
        expect($("#zebra-table-2")).toBeNotZebrafyied();
    });

    it('zebrafy should be chainable', function() {
        var table = $("#zebra-table");
        table.zebrafy().addClass('black-bg');
        expect(table.hasClass('black-bg')).toBeTruthy();
    });

});
