const express = require("express");
const app = express();
const user_data = require("./MOCK_DATA.json");

const port =9000;

// routes:>

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${user_data.map(user_data => `<li>${user_data.first_name + user_data.id}</li>`).join('')}
    </ul>
    `;
    return res.send(html);
});

app.get("/api/users",(req,res)=>{
    return res.json(user_data);
});

app.route("/api/users/:id")
.get((req,res)=>{
    const id= Number(req.params.id);
    const user = user_data.find((user)=> user.id ===id);
    return res.json(user);
})
.patch( (req,re)=>{
    return res.json({status:'pending!'});
})
.delete( (req,re)=>{
    return res.json({status:'pending!'});
});

app.post("/api/users" , (req,re)=>{
    return res.json({status:'pending!'});
});







app.listen(port ,()=>{
    console.log("server started :)");
} )