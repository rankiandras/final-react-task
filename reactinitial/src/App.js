import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataOfLaptops, setDataOfLaptops] = useState([]);
  const [sort, setSort] = useState('desc')
  const [input, setInput] = useState('')


  
  useEffect(() => {
    fetch('https://demoapi.com/api/laptop')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setIsLoaded(true)
        setDataOfLaptops(data)
    })
  },[]);


  const sortBooks = () => {
    setDataOfLaptops([...dataOfLaptops.sort((a, b) => sort === 'desc' ? b.weight - a.weight : a.weight - b.weight)])
    setSort(sort === 'desc' ? 'asc' : 'desc')

  }

  console.log(input);

  return (
    <div>
      <Button onClick={sortBooks}variant="outlined">Sort by weight</Button>
      <TextField id="outlined-basic" label="Search by name" variant="outlined" value={input} onChange={({target}) => {setInput(target.value)}}/>
      {/* <input placeholder='Search...' value={input} onChange={({target}) => {setInput(target.value)}}/> */}
      <Typography variant="h3">Laptops</Typography>
      {!isLoaded && <LoadingMask />}
      {dataOfLaptops.map(({name, brand, weight}) => (name.toLowerCase().includes(input.toLowerCase()) && <Laptop key={weight} name={name} brand={brand} weight={weight}/>))}
      {/* {dataOfLaptops.map(({name, brand, weight}) => <Laptop key={weight} name={name} brand={brand} weight={weight}/>)} */}
    </div>
  )
}

export default App
