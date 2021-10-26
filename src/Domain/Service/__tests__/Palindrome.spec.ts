import palidromeService from '../palindrome';

describe('[Palidrome] Palidrome Service tests',() => {
    const palidrome = new palidromeService();

    test('[Palidrome] Should return valid palindrome', () => {            
        //'Madam I’m Adam','Top spot !'
        const mock_test: Array<string> = ['Rotator','bob','madam','mAlAyAlam','Able was I, ere I saw Elba','Step on no pets.','02/02/2020'];
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