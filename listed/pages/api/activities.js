const data = [
    { name: "", user: 100, guest: 200, amt: 2400 },
    { name: "Week 1", user: 400, guest: 400, amt: 2400 },
    { name: "Week 2", user: 150, guest: 200, amt: 2400 },
    { name: "Week 3", user: 450, guest: 300, amt: 2400 },
    { name: "Week 4", user: 180, guest: 220, amt: 2400 },
  ];
  
  export default function handler(req, res) {
    const value = req.query.value;
    if (value === '3') {
      const data = [
        { name: "", user: 100, guest: 200, amt: 2400 },
        { name: "Week 1", user: 400, guest: 400, amt: 2400 },
        { name: "Week 2", user: 150, guest: 200, amt: 2400 },
        { name: "Week 3", user: 450, guest: 300, amt: 2400 },
        { name: "Week 4", user: 180, guest: 220, amt: 2400 },
      ];
  
      res.status(200).json({ data });
    }
    else if(value=='4') 
    {
      const data = [
        { name: "", user: 100, guest: 200, amt: 2400 },
        { name: "Week 1", user: 500, guest: 400, amt: 2400 },
        { name: "Week 2", user: 150, guest: 210, amt: 2400 },
        { name: "Week 3", user: 350, guest: 370, amt: 2400 },
        { name: "Week 4", user: 380, guest: 90, amt: 2400 },
      ];
  
      res.status(200).json({ data });
    }
    
    else if(value=='5') 
    {
      const data = [
        { name: "", user: 100, guest: 200, amt: 2400 },
        { name: "Week 1", user: 500, guest: 400, amt: 2400 },
        { name: "Week 2", user: 150, guest: 100, amt: 2400 },
        { name: "Week 3", user: 250, guest: 300, amt: 2400 },
        { name: "Week 4", user: 380, guest: 220, amt: 2400 },
      ];
  
      res.status(200).json({ data });
    }
    
    
    else {
      res.status(400).json({ error: 'Invalid value' });
    }
  }