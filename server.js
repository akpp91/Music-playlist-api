const express = require("express")

const cors = require("cors")


const app = express()
app.use(express.json())

app.use(cors("*"))
app.use(express.static('uploads'));

app.get('/songs',(request, response) =>{

response.send([
  {
    title:"Taler Swift",
    song:"Out Of The Woods",
    image: 'img1.png', 
    dpimage: 'dpimg1.png', 
    url:'https://youtu.be/JLf9q36UsBk?si=CrQy0hYUBCmTcQx8'
  },
  {
    title:"Taler Swift",
    song:"I Wish You Would",
    image: 'img2.png', // Remove the full URL
    dpimage: 'dpimg2.png', // Remove the full URL
    url:'https://youtu.be/U3KmJGLSrTM?si=54gQb6HCoDvpIx82'
  },

  {
    title:"Taylor Swift ",
    song:"Look What You Made Me Do",
    image: 'img3.png', 
    dpimage: 'dpimg3.png', 
    url:'https://youtu.be/3tmd-ClpJxA?si=zOSbtJgnGdY3clb2'
  }
])
});


app.listen(3000, "127.0.0.1", () => {
  console.log("Server started at port  3000")
})

