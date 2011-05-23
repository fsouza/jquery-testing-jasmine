describe('Zebrafy', function () {
    beforeEach(function () {
        jQuery('<table id="zebra-table"></table>').appendTo('body');
        for (var i=0; i < 10; i++) {
            jQuery('<tr></tr>').append('<td></td>').append('<td></td>').append('<td></td>').appendTo('#zebra-table');
        };
    });

    afterEach(function () {
        jQuery("#zebra-table").remove();
    });
    
    
    describe('Zebrafying table', function () {
        it('should apply classes zebrafy-odd and zebrafy-even to each other table lines', function () {
            jQuery("#zebra-table").zebrafy();
            jQuery("#zebra-table tr:even").each(function (index, tr) {
                expect(tr.hasClass('odd')).toBeFalsy();
                expect(tr.hasClass('even')).toBeTruthy();
            });

            jQuery("#zebra-table tr:odd").each(function (index, tr) {
                expect(tr.hasClass('odd')).toBeTruthy();
                expect(tr.hasClass('even')).toBeFalsy();
            });
        });
    });
});

