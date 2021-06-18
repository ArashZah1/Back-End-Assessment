const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
})
  app.get("/api/fortune", (req, res) => {
const fortunes = ["A short pencil is usually better than a long memory any day.",
  "A small donation is call for. It’s the right thing to do.",
  "A smile is your personal welcome mat.",
  "A smooth long journey! Great expectations.",
  "A soft voice may be awfully persuasive." ];
 
  let fortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[fortuneIndex];

  res.status(200).send(randomFortune)
  })

  app.get("/api/lottery", (req, res) => {
    const motive = ["You can totally do this", "Don’t tell people your plans", "No pressure, no diamonds."]
    let motiveIndex = Math.floor(Math.random() * motive.length );
    let randomMotive = motive[motiveIndex]
    
    res.status(200).send(randomMotive);
  })
app.listen(4000, () => console.log("Server running on 4000"));
