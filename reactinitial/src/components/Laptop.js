import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


const Laptop = ({name, brand, weight}) => {
    const [showMore, setShowMore] = useState(false)


  return (
    <div>
        <Paper elevation={3}>Name: {name}</Paper>
        {showMore && <Paper elevation={0}>Brand: {brand}, weight {weight}</Paper>}
        <Button variant="outlined" size="small" onClick={() => setShowMore(!showMore)}>{!showMore ? <span>Show more</span> : <span>Show less</span>}</Button>
    </div>
  )
}

export default Laptop