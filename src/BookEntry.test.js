/** 
* The unit test file for the BookEntry class - BookEntry.js
*@TestFile
*/
const BookEntryClass = require('./BookEntry.js')
//import {BookEntryClass} from './BookEntry.js';

//test constructor/setters
test('valid constructor', () => {

  //const testBookEntryForConstructor = new BookEntry(new Set(['Sci-fi']), new Date('November 17, 2022 03:24:00'), 9, 340, 'completed', 'I thought it was poignantly pointless.', 'A4238A53I1', 'Robert Heinlein', 'Stranger in a Strange Land')  ;  
  const testBookEntryForConstructor = BookEntryClass.bookentry(new Set(['Sci-fi', 'Fiction']), new Date('November 17, 2022 03:24:00'), 9, 340, 'completed', 'I thought it was poignantly pointless.', 'A4238A53I1', 'Robert Heinlein', 'Stranger in a Strange Land')  ;  

  expect(testBookEntryForConstructor.printBookEntry()).toBe('Stranger in a Strange Land by: Robert Heinlein, rating: 9, progress: 340, status: completed, Date read: Thu Nov 17 2022 03:24:00 GMT-0800 (Pacific Standard Time) \nReview: I thought it was poignantly pointless., ISBN: Stranger in a Strange Land, tags: Sci-fi, Fiction');
}); 


