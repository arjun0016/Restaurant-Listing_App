import React from 'react'
import{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Card from 'react-bootstrap/Card';

function Restreview({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return(
   
<>
<Button
  onClick={() => setOpen(!open)}
  aria-controls="example-collapse-text"
  aria-expanded={open}
>
  click
</Button>
<div style={{ minHeight: '150px' }}>
<Fade in={open}>
    <div id="example-collapse-text">
      <Card body style={{ width: '1000px' }}>
        {
            review.map(item=>(
                <div>
                    <h6>{item.name}</h6>
                    <p>{item.rating}</p>
                    <p>{item.comments}</p>

                    
                </div>
            ))
        }
 
      </Card>
    </div>
    </Fade>
</div>
</>
  )
}

export default Restreview




