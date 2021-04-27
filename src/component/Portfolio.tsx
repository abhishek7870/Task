import React,{useState,useEffect} from 'react'
import './Portfolio.css';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MediaCard from './MediaCard';
import { makeStyles } from '@material-ui/core/styles';
import { cars,RATING,TRANSMISSION,HORSEPOWER,PRICE } from './data';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor:"grey",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
function Portfolio() {
    const classes = useStyles();
    const [horsepower, setHorsepower] = useState(Number);
    const [rating, setRating] = useState(Number);
    const [price, setPrice] = useState(Number);
    const [transmission, settransmission] = useState("");
     const [carss, setcarss] = useState(cars);    
    const handleFilter = () =>{
        const newCars = cars.filter((car) => rating == car.rating || (horsepower <= car.horsePower && horsepower >=car.horsePower) || transmission == car.transmission || (price <= car.price && price >=car.price))
        setcarss(newCars);
    }
    useEffect(() => {
        
    }, [carss])
    
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
semper aliquam quis mattis quam.</p>
           <div className="portfolioItem">
             <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label" style={{color:"white",fontSize:"15px"}}>Rating</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rating}
                    onChange={(e:any) => setRating(e.target.value)}
                    >
                   {RATING.map((rating) =>(
                    <MenuItem value={rating.key}>{rating.value}</MenuItem>   
                   ))}
                 </Select>
             </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label" style={{color:"white",fontSize:"13px"}}>Transmission</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={transmission}
                    onChange={(e:any) => settransmission(e.target.value)}
                    >
                        {TRANSMISSION.map((transmission) => (
                          <MenuItem value={transmission.key}>{transmission.value}</MenuItem>        
                        ))}
                 </Select>
             </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" style={{color:"white",fontSize:"13px"}}>HorsePower</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={horsepower}
                    onChange={(e:any) => setHorsepower(e.target.value)}
                    >
                   {HORSEPOWER.map((horsepower) => (
                    <MenuItem value={horsepower.key}>{horsepower.value}</MenuItem>
                   ))}
                 </Select>
           </FormControl>
           <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" style={{color:"white",fontSize:"13px"}}>Price</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={(e:any) => setPrice(e.target.value)}
                    >
                   {PRICE.map((price) => (
                    <MenuItem value={price.key}>{price.value}</MenuItem>
                   ))}
                 </Select>
           </FormControl>
                    <Button variant="contained" color="secondary" onClick={handleFilter}>Filter</Button>
           </div>
           <div className="portfolioImage">
           {carss.map((car)=>(
               <div style={{paddingRight:"20px",paddingBottom:"15px"}}>
                <MediaCard image={car.image} name={car.name}    />
               </div>
           ))}
         </div> 
           
          
        </div>
    )
}

export default Portfolio
