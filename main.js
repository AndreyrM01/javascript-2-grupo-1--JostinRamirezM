class Bookstore {
  #bookstoreName;
  #address;
  #books;
  #comics;
  constructor(bookstoreName, address) {
    this.#bookstoreName = bookstoreName;
    this.#address = address;
    this.#books = [];
    this.#comics = [];
  }


  // getters
  get getBooks() {
    return this.#books;
  }

  get getComics() {
    return this.#comics;
  }

  get getName() {
    return this.#bookstoreName
  }

  // setters
  set setBookstoreName(name) {
    this.#bookstoreName = name;
  }

  set setAddress(address) {
    this.#address = address;
  }

  set setBooks(book) {
    this.#books.push(book);
  }

  set setComics(comic) {
    this.#comics.push(comic);
  }
}

class Book {
  #title;
  #author;
  #price;
  #stock;
  #year;
  
  constructor(title, author, price, stock, year) {
    this.#title = title;
    this.#author = author;
    this.#price = price;
    this.#stock = stock;
    this.#year = year;
  }

  getInfo() {
    return {
      title: this.#title,
      auhor: this.#author,
      price: this.#price,
      year: this.#year,
      stock: !this.#stock ? 'No hay ejemplares disponibles' : this.#stock
    }
  }

  // setters
  set setStock(stock) {
    this.#stock = stock;
  }

  set setYear(year) {
    this.#year = year;
  }
}

class Comic extends Book {
  #illustrator;
  #publisher;
  #volume;
  constructor(title, author, price, stock, year, illustrator, publisher, volume) {
    super(title, author, price, stock, year);
    this.#illustrator = illustrator;
    this.#publisher = publisher;
    this.#volume = volume;
  }

  getInfo () {
    const info = super.getInfo(); 
    return {
      ...info,
      illustrator: this.#illustrator,
      publisher: this.#publisher,
      volume: this.#volume
    }
  }
}

const bookstore1 = new Bookstore('Lexus Editor', 'Calle 1');

// const addBook = () => {
//   const book = new Book('El principito', 'Antoine de Saint', 100, 10, 1943);
//   bookstore1.setBooks = book.getInfo();
//   console.log('Add book')
// } 

// const addComic = () => {
//   const comic = new Comic('Batman', 'bob kane', 200, 5, '1939', 'Bob kane', 'DC Comics', 1);
//   bookstore1.setComics = comic.getInfo();
//   console.log('Add Comic')
// }

// const showProducts = () => {
//   console.log('Books')
//   console.log(bookstore1.getBooks);

//   console.log('Comics')
//   console.log(bookstore1.getComics);
// }

const sidebar = document.getElementById('sidebar');
const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];

const printBookstoreName = () => {
  sidebar.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="title">
      ${bookstore1.getName}
    </h2>`
  )
}

printBookstoreName();

// ** TAREA **
// Crear una función que se encargué de crear el menu, iterando sobre la lista menu (línea 125)
// Debe generarse un element html tipo ul, y dentro de ese ul un li para cada elemento lista; Puede ver el ejemplo de lo que debe crear en el html 

// Start icons section
const iShow = () => {
  list.insertAdjacentHTML(
    'afterbegin',
    `<img class="icon i-show" src="img/i-show.png" alt="">
    <img class="icon i-show__comic" src="img/i-show.png" alt="">`
  )
}

iShow();

const iAdd = () => {
  list.insertAdjacentHTML(
    'afterbegin',
    `<img class="icon i-add" src="img/i-add.png" alt="">
    <img class="icon i-add__comic" src="img/i-add.png" alt="">`
  )
}

iAdd();

//End icons section

// Start list section

const insertBook = () => {
  list.insertAdjacentHTML(
    'beforeend',
    `<li onclick="showBooks()" class="sidebar-list" >
      ${menu[0]}
    </li>`
  )
}

insertBook();

const insertComics = () => {
  list.insertAdjacentHTML(
    'beforeend',
    `<li onclick="showComics()" class="sidebar-list" >
      ${menu[1]}
    </li>`
  )
}

insertComics();

//End list section

//Start add section

const addBooks = () => {
  list.insertAdjacentHTML(
    'beforeend',
    `<li onclick="addBook()" class="sidebar-list">
      ${menu[2]}
    </li>`
  )
}

addBooks();

const addComics = () => {
  list.insertAdjacentHTML(
    'beforeend',
    `<li onclick="addComic()" class="sidebar-list">
      ${menu[3]}
    </li>`
  )
}

addComics();


const addBook = () => {
  const book = new Book(prompt("Book Title"),prompt("Book Author"),prompt("Book Price"),prompt("Book Stock"),prompt("Book Year"));
  bookstore1.setBooks = book.getInfo();
  alert('Book Added');
} 

const addComic = () => {
  const comic = new Comic(prompt("Comic Title"),prompt("Comic Author"),prompt("Comic Price"),prompt("Comic Stock"),prompt("Comic Year"),prompt("Comic Volume"),prompt("Comic Publisher"),prompt("Comic Illustrator"));
  bookstore1.setComics = comic.getInfo();
  alert('Comic Added')
}

// End add section
// Show section

const showBooks = () => {
  console.log('Books');
  console.log(bookstore1.getBooks);
}

const showComics = () => {
  console.log('Comics');
  console.log(bookstore1.getComics);
}