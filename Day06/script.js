// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(movie, studio, rating) {
        this.movie = movie;
        this.studio = studio;
         if(rating === ''){
            this.rating = 'PG';
        } else {
            this.rating = rating;
        }
    }
        getPG = () => {
            return `Movie : ${this.movie}, Studio : ${this.studio}, Rating :${this.rating}`;
            //return `Movie : ${mov}, Studio : ${std}, Rating :${rat}`;       
        }
}

var customer = new Movie('Casino Royale' , 'Eon Productions' , 'PG13');  
var customer1 = new Movie('Casino Royale' , 'Eon Productions' , ''); // giving empty string for rating
console.log(customer.getPG());
console.log(customer1.getPG()); // empty string for rating 


/* (a)
constructor(movie, studio, rating) {
        this.movie = movie;
        this.studio = studio;
        this.rating = rating;
} */

/* (b)
constructor(movie, studio) {
        this.movie = movie;
        this.studio = studio;
        this.rating = 'PG';
} */

/* (c)
let film = [['movie1', 'studio1', 'PG'], ['movie2', 'studio2', 'R'], ['movie3', 'studio1', 'PG'], ['movie4', 'studio1', 'R']];
let newMovieArray = [];
getPGG = (arr) => {
    for (let i = 0; i < film.length; i++) {
        let check = film[i];
        if (check[2] === 'PG') {
            newMovieArray.push(check);
        }
    }
    return newMovieArray;
}
console.log(getPGG(film)); */


/* (d)
var customer = new Movie('Casino Royale' , 'Eon Productions' , 'PG13'); 
console.log(customer.getPG());  */






// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

/* class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;

    }
    getRadius = () => `Radius of the circle is ${this.radius}`;
    get getRadiuss() {
      return  `Radius of the circle is ${this.radius}`;
    }
    set setRadius(value){
        this.radius = value;
    } 
    getColor = () => `Color of the circle is ${this.color}`;
    get getcolor(){
       return  `Color of the circle is ${this.color}`;
    }
    set setcolor(value){
        this.color = value;
    }
    tostring = () => `radius = ${this.radius} degree , color = ${this.color} `;
    getArea = () => `Area of a circle is ${(3.14 * this.radius * this.radius).toFixed(2)}`;
    getCircumference = () => `circumference = ${(2* 3.14 * this.radius).toFixed(2)} cm`;
} 

var circle = new Circle(1,"Red");
console.log(circle.getRadius());
circle.setRadius = 5 ;
console.log(`After setting the radius `,circle.getRadiuss);
console.log(circle.getColor());
circle.setcolor = 'Green';
console.log("After changing the color ",circle.getcolor);
console.log(circle.tostring());
console.log(circle.getCircumference());
console.log(circle.getArea()); */

/* output :
Radius of the circle is 1
After setting the radius  Radius of the circle is 5
Color of the circle is Red
After changing the color  Color of the circle is Green
radius = 5 degree , color = Green
circumference = 31.40 cm
Area of a circle is 78.50 */





//3. Write a “person” class to hold all the details.

/* class person {
    constructor(fname, id_no, age, mobile, city) {
        this.name = fname;
        this.id = id_no;
        this.age = age;
        this.number = mobile;
        this.city = city;

    }

} 

var PersonDetail = new person('Alex', '00453', '25', '9876543210', 'chennai');
console.log(PersonDetail); */

/* output : person {
  name: 'Alex',
  id: '00453',
  age: '25',
  number: '9876543210',
  city: 'chennai'
} */




//4. write a class to calculate the uber price.

/* class uber {
    constructor(name, distance) {
        this.name = name;
        this.distance = distance;
    }
        price = () => {
            return `Hello Mr.${this.name} your travel charge is ₹ ${this.distance * 8}.Thanks for choosing us.`;

        };
}

var customer = new uber('Gandhi', '15');
console.log(customer.price()); */

// output => Hello Mr.Gandhi your travel charge is ₹ 120.Thanks for choosing us.

