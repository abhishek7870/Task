import image1 from '../image/1.jpg';
import image2 from '../image/2.jpg';
import image3 from '../image/3.jpg';
import image4 from '../image/4.jpg';
import image5 from '../image/5.jpg';
import image6 from '../image/6.jpg';
export const cars = [
    {
        image:image1,
        name:"1st Gallery Item",
        transmission:"manual",
        rating:2,
        horsePower:210,
        price:4.5
        
    
    },
    {
        image:image2,
        name:"2nd Gallery Item",
        transmission:"manual",
        rating:3,
        horsePower:110,
        price:3.5
    },
    {
        image:image3,
        name:"3rd Gallery Item",
        transmission:"manual",
        rating:4,
        horsePower:301,
        price:2.5
    },
    {
        image:image4,
        name:"4th Gallery Item",
        transmission:"automatic",
        rating:4,
        horsePower:150,
        price:5.5
    },
    {
        image:image5,
        name:"5th Gallery Item",
        transmission:"automatic",
        rating:3,
        horsePower:301,
        price:8
    },
    {
        image:image6,
        name:"6th Gallery Item",
        transmission:"manual",
        rating:3,
        horsePower:410,
        price:6.3
    }
    
    
]
export const RATING = [{ key: 1, value:1},{key:2 , value:2},{key:3 , value:3},{key:4 , value:4},{key:5 , value:5}]
export const TRANSMISSION = [{key:"manual",value:"manual"},{key:"automatic",value:"automatic"}]
export const HORSEPOWER = [{ key: 200, value:"0-200"},{ key: 300, value:"200-300"},{ key: 400, value:"300-400"},{ key: 500, value:"400-500"}]
export const PRICE = [{ key:5, value:"3.0c-4.5c"},{key:6, value:"4.5c-6c"},{key:7 , value:"6c-6.5c"}]

