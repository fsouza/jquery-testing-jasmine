describe('Zebrafy', function () {

    beforeEach(function () {
        this.addMatchers({
            toBeZebrafyied: function() {
                var isZebrafyied = true;

                this.actual.find("tr:even").each(function (index, tr) {
                    isZebrafyied = $(tr).hasClass('zebrafy-odd') === false;
                    isZebrafyied = $(tr).hasClass('zebrafy-even');
                });

                this.actual.find("tr:odd").each(function (index, tr) {
                    isZebrafyied = $(tr).hasClass('zebrafy-odd');
                    isZebrafyied = $(tr).hasClass('zebrafy-even') === false;
                });

                return isZebrafyied;
            }
        });
    });


    beforeEach(function () {
        $('<table id="zebra-table" class="zebra"></table>').appendTo('body');
        for (var i=0; i < 10; i++) {
            $('<tr></tr>').append('<td></td>').append('<td></td>').append('<td></td>').appendTo('#zebra-table');
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

    it('should zebrify more than one table', function() {
        $('<table id="zebra-table-2" class="zebra"></table>').appendTo('body');
        for (var i=0; i < 10; i++) {
            $('<tr></tr>').append('<td></td>').append('<td></td>').append('<td></td>').appendTo('#zebra-table-2');
        };

        $('.table').zebrafy();
        expect($("#zebra-table")).toBeZebrafyied();
        expect($("#zebra-table-2")).toBeZebrafyied();
    });

});

