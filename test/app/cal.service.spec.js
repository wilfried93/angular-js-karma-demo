
describe('Sum to number :', function() {
    
    beforeEach(module('calc'));

    var CalService;

    beforeEach(inject(function(_CalService_) {
        CalService = _CalService_;
    }));

    it('CalService should be defined', function() {
        expect(CalService).toBeDefined();
    });

    it('It sum 10 plus 14', function() {
        var a = 10;
        var b = 14;
        var result = CalService.calculer(a,b);
        expect(result).toBe(24);
    });

    it('It sum 10 plus -14', function() {
        var a = 10;
        var b = -14;
        var result = CalService.calculer(a,b);
        expect(result).toBe(-4);
    });
});
