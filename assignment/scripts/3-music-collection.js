console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

function addToCollection(collection, title, artist, yearPublished){
    let album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
    }
  collection.push(album)
  return album;
}


let myCollection = [];
let album1 = {
  title: "The Life of Pablo",
  artist: 'Kanye',
  yearPublished: 2016
}
console.log(addToCollection(myCollection, album1.title, album1.artist,album1.yearPublished));

let album2 = {
  title: 'I am > i was',
  artist: '21 savage',
  yearPublished: 2018
}

 console.log(addToCollection(myCollection, album2.title, album2.artist, album2.yearPublished));

 let album3 = {
  title: 'Self Titled',
  artist: 'Zach Bryan',
  yearPublished:'2023'
 }

console.log(addToCollection(myCollection, album3.title, album3.artist, album3.yearPublished));

let album4 = {
  title: 'What Could Possibly Go Wrong',
  artist: 'Domonic Fike',
  yearPublished: 2020
}
console.log(addToCollection(myCollection, album4.title, album4.artist, album4.yearPublished));

let album5 = {
  title: 'Dont Forget About Me , Demos',
  artist: 'Domonic Fike',
  yearPublished: 2018
}

console.log(addToCollection(myCollection, album5.title, album5.artist, album5.yearPublished));

let album6 = {
  title: 'Continuum',
  artist: 'John Mayor',
  yearPublished: 2006
}

console.log(addToCollection(myCollection, album6.title, album6.artist, album6.yearPublished));


function showCollection(collection) {
  
}

console.log("My Collection:");
showCollection(myCollection);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
