
  export default function handler(req, res) {
    const value = req.query.value;
    if (value === '3') {
        const data = [
            {
              name: "Basic Tees",
              value: 55,
            },
            {
              name: "Custom Short Pants",
              value: 31,
            },
            {
              name: "Super Hoodies",
              value: 14,
            },
          ];
          
  
      res.status(200).json({ data });
    }
    else if(value=='4') 
    {
        const data = [
            {
              name: "Caps",
              value: 75,
            },
            {
              name: "Custom Short Pants",
              value: 20,
            },
            {
              name: "Super Hoodies",
              value: 5,
            },
          ];
          
  
      res.status(200).json({ data });
    }
    
    else if(value=='5') 
    {
        const data = [
            {
              name: "Super Hoodies",
              value: 46,
            },
            {
              name: "Pants",
              value: 10,
            },
            {
              name: "Shirt",
              value: 44,
            },
          ];
          
      res.status(200).json({ data });
    }
    
    
    else {
      res.status(400).json({ error: 'Invalid value' });
    }
  }