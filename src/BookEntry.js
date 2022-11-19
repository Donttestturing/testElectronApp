/**
 * @constant
* The STATUSES constant which holds the 3 possibilities for the status variable: completed, in progress, and planned
* 
*/
 const STATUSES = ['completed', 'in progress', 'planned']

/**
 *  @class
* The BookEntry class, which represents a book entry, which includes a book and the requisite information like title, ISBN, and authorName, as well as ancillary information like the status of being read, 
* the current review for the book, the genres the book is tagged in, the date the book was read (if finished) and the current page progress of the user for that book.
*
*/
 class BookEntry {
    /**
     * @BookEntry
     * @constructor The constructor for the BookEntry Class,
     * @description which takes in 9 pieces of information to represent a BookEntry, 
     * which is more than simply a book, it is also user information related to reading that book. 
     * @param {Set} tags - a Set DS to hold the tags representing genres for the book
     * @param {Date} dateRead - the date the book was read
     * @param {Number} rating - a number rating, representing the rating the user has given the book
     * @param {Number} pageProgress - a number representing the number of pages currently read for the book, should be a positive integer
     * @param {string} status - a string representing the current status of the book being planned, in progress, or completed
     * @param {string} reviewBodyText - a string representing the review for the book
     * @param {string} ISBN - a string representing the ISBN of the book
     * @param {string} authorName - a string representing the book author's name, should be both first and sur name
     * @param {string} title - a string representing the title of the book
     * 
     * when initially creating a BookEntry for a new book, pass pageProgress=0, reviewTextBody='', rating=NaN, dateRead=Date() for defaults
     */
    constructor(tags, dateRead, rating, pageProgress, status, reviewTextBody, ISBN, authorName, title){
        this.tags = tags;
        this.dateRead = dateRead;
        this.rating = rating;
        this.pageProgress = pageProgress;
        this.status = status;
        this.reviewTextBody = reviewTextBody;
        this.ISBN = ISBN;
        this.authorName = authorName;
        this.title = title;
    }

    /**
     * @BookEntry
     * @function printBookEntry
     * @description Function which returns a formatted string representing the BookEntry
     * @return {string} 
     */
     printBookEntry() {
        return `${this.title} by: ${this.authorName}, rating: ${this.rating}, progress: ${this.pageProgress}, status: ${this.status}, Date read: ${this.dateRead} \nReview: ${this.reviewTextBody}, ISBN: ${this.title}, tags: ${new Array(...this.tags).join(', ')}`;
    }

    /**
     * @BookEntry
     * @function Function to set the tags Set which represents genres for the book
     * @param {Set} tagsToAdd
     */
 //   set tags(tagsToAdd){
      //  this.tags = tagsToAdd;
      //  console.log(this.tags)   ;
     //   if(tagsToAdd.size === 0){
       //     console.log(typeof tagsToAdd);
      //      console.error('The tags set was empty, did not set:', tagsToAdd);
        //    return;
     //   }
        
//    } 

    /**
     * @BookEntry
     * @function Function to set the dateRead which represents the date the book was read
     * @param {Date} dateToSet
     */
    set dateRead(dateToSet){
        if(typeof dateToSet != 'object'){
            console.error('The date passed in was not an object, did not set:', dateToSet);
            return;
        }
    } 

    /**
     * @BookEntry
     * @function Function to set the rating for the book, which should be between 0 and 10
     * @param {Number} ratingToSet
     */
     set rating(ratingToSet){
        if(typeof ratingToSet != 'number'){
            console.error('The rating passed in was not of type Number, did not set:', ratingToSet);
            return;
        }
        if(ratingToSet < 0){
            console.error('The rating passed in was not a positive rating, did not set:', ratingToSet);
            return;
        }
        if(ratingToSet < 0 && ratingToSet > 10){
            console.error('The rating passed in was not between 0 and 10, end inclusive, did not set:', ratingToSet);
            return;
        }
    } 

    /**
     * @BookEntry
     * @function set pageProgress 
     * @description Function to set the pageProgress which represents the current page number the user is on for the book
     * @param {Number} pageProgressToSet
     */
     set pageProgress(pageProgressToSet){
        if(typeof pageProgressToSet != 'number'){
            console.error('The page progress passed in was not of type Number, did not set:', pageProgressToSet);
            return;
        }
        if(!Number.isInteger(pageProgressToSet)){
            console.error('The page progress passed in was of type Number, but it was a float, did not set:', pageProgressToSet);
            return;
        }
        if(pageProgressToSet < 0){
            console.error('The page progress passed in was not a positive page progress, did not set:', pageProgressToSet);
            return;
        }
        if(pageProgressToSet < this.pageProgress){
            console.error('The page progress passed in was less than the current page progress, did not set:', pageProgressToSet);
            return;
        }
    } 

    /**
     * @BookEntry
     * @function set status Function to set the status of the book which represents the read status of the book, can be planned, in progress, and completed
     * @param {string} statusToSet
     */
     set status(statusToSet){
        if(typeof statusToSet !== 'string'){
            console.error('The status passed in was not of type string, did not set:', statusToSet);
            return;
        }
        //double check below logic
        if(statusToSet !== STATUSES[0] && statusToSet !== STATUSES[1] && statusToSet !== STATUSES[2]){
            console.error('The status passed in was not one of the 3 possibilities, completed, in progress, and planned, did not set:', statusToSet);
            return;
        }
    } 

    /**
     * @function Function to set the user's review for the book
     * @param {string} reviewTextBodyToSet
     */
/*     set reviewTextBody(reviewTextBodyToSet){
        if(typeof reviewTextBodyToSet !== 'string'){
            console.error('The review passed in was not of type string, did not set:', reviewTextBodyToSet);
            return;
        }
        if(reviewTextBodyToSet === ''){
            console.error('The review passed in was empty, did not set:', reviewTextBodyToSet);
            return;
        }
    } */

    /**
     * @function Function to set the ISBN for the book
     * @param {string} ISBNtoSet
     */
  /*   set ISBN(ISBNtoSet){
        if(typeof ISBNtoSet !== 'string'){
            console.error('The ISBN passed in was not of type string, did not set:', ISBNtoSet);
            return;
        }
        if(ISBNtoSet.length < 10){
            console.error('The ISBN passed in was not valid, it needs to be at least 10 characters:', ISBNtoSet);
            return;
        }

    } */

    /**
     * @function Function to set the book's author's name
     * @param {string} authorNameToSet
     */
  /*   set authorName(authorNameToSet){
        if(typeof authorNameToSet !== 'string'){
            console.error('The author name passed in was not of type string, did not set:', authorNameToSet);
            return;
        }
        if(authorNameToSet.length < 1){
            console.error('The author name passed in was not valid, it was of 0 length', authorNameToSet);
            return;
        }
    } */

    /**
     * @function Function to set the book's title
     * @param {string} titleToSet
     */
 /*    set title(titleToSet){
        if(typeof titleToSet !== 'string'){
            console.error('The title passed in was not of type string, did not set:', titleToSet);
            return;
        }
        if(titleToSet.length < 1){
            console.error('The title passed in was not valid, it was of 0 length', titleToSet);
            return;
        }

    } */

    /**
     * @function Function to get the book's tags, has error checking
     */
   /*  get tags(){
        if(this.tags.size === 0){
            console.error('The tags being got were empty');
            return;
        }

    }    */



}
/**
 * @BookEntry
 * 
 * @function bookentry
 * @description
*/
function bookentry(pTags, pDateRead, pRating, pPageProgress, pStatus, reviewTextBody, ISBN, authorName, title) {
    return new BookEntry(pTags, pDateRead, pRating, pPageProgress, pStatus, reviewTextBody, ISBN, authorName, title);
}
module.exports = {BookEntry, STATUSES, bookentry};      //to use require in the test file, we must label functions as exports

