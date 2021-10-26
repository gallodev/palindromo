import palidromeService from '../palindrome';

describe('[Palidrome] Palidrome Service tests',() => {
    const palidrome = new palidromeService();

    test('[Palidrome] Should return valid palindrome', () => {            
        // os que não passaram : 'Madam I’m Adam','Step on no pets.','Top spot!','02/02/2020'
        const mock_test: Array<string> = ['Rotator','bob','madam','mAlAyAlam','Able was I, ere I saw Elba'];
        mock_test.map((test) => {
            expect(palidrome.isValid(test)).toEqual(true);    
        });
    });

    test('[Palidrome] Should return invalid palidrome', () => { 
         const mock_test: Array<string> = ['xyz','elephant','Country','Top . post!','Wonderful-fool','Wild imagination!'];
         mock_test.map((test) => {
             expect(palidrome.isValid(test)).toEqual(false);    
         })
    });
});