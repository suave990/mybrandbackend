import app from "../srccd/app";
import request from "supertest"
import Blog from "../srccd/model/Blog";
import Message from "../srccd/model/Message";
const TOKEN ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2MwNDg3MTAwMDEwNTU4NzA0ZDExZDAiLCJlbWFpbCI6InN1YXZlOTkwQGdtYWlsLmNvbSIsImlhdCI6MTY3MzU0OTUxMH0.fVK0EHLQJZjWltPUXCN6CjpL7txUPrxvBXRhYk6zZmw"
const num = Math.floor(Math.random() * 10000)
test("get blog status 200 ", async () => {
    const response = await request(app).get("/blogs").send();
    expect(response.statusCode).toBe(200);
})
test("get messages status 200 ", async () => {
    const response = await request(app).get("/messages").send().set("Authorization",TOKEN);
    expect(response.statusCode).toBe(200);
})
test("get single messages status 200 ", async () => {
    const messages = await Message.findOne()
    
    const id = messages._id
    const response = await request(app).get("/messages/"+id).set("Authorization",TOKEN)
    expect(response.statusCode).toBe(200);
})
test("NOT FOUND status 404", async () => {
    const response = await request(app).get("/blo").send();
    expect(response.statusCode).toBe(404);
})
test("post blog status 200 ", async () => {
    const response =  await request(app).post("/blogs").set("Authorization",TOKEN).send({
        title: "THEME",
        content: "nature as environment",
        image: "image.hec"
    });
    expect(response.statusCode).toBe(200);
})
test("get all blogs status 200 ", async () => {
    const response =  await request(app).get("/blogs")
    expect(response.statusCode).toBe(200);
})
test("get single blog status 200 ", async () => {
    const blog = await Blog.findOne()
    const id = blog._id
    const response =  await request(app).get("/blogs/"+id)
    expect(response.statusCode).toBe(200);
})
test("post signup status 200 ", async () => {
    const response = await request(app).post("/users/signup").send({
        username: "abc",
        email: "abc" + num + "@gmail.com",
        password: "abc123"
    }
    );
    expect(response.statusCode).toBe(200);
})
test("post login status 200 ", async () => {
    const response = await request(app).post("/users/login").send(
        {
            email: "example@yahoo.com",
            password: "example123"
        }
    );
    expect(response.statusCode).toBe(200);
})
test("post comment status 200 ", async () => {
    const blog = await Blog.findOne()
    const id = blog._id
    const response = await request(app).post("/blogs/"+id+"/comments").set("Authorization",TOKEN).send(
        {
         message: "wertyghj hjk vbnm aquí tenemos un campo"
        }
    );
    expect(response.statusCode).toBe(200);
})
test("get single comment status 200 ", async () => {
    const blog = await Blog.findOne({title:"THEME"})
    const id2= blog.comments._id
    const id = blog._id
    const response = await request(app).get("/blogs/"+id+"/comments/"+id2)
    expect(response.statusCode).toBe(200);
})
test("get comment status 200 ", async () => {
    const blog = await Blog.findOne()
    const id = blog._id
    const response = await request(app).get("/blogs/"+id+"/comments")
    expect(response.statusCode).toBe(200);
})
test("post like status 200 ", async () => {
    const blog = await Blog.findOne()
    const id = blog._id
    const response = await request(app).post("/blogs/"+id+"/like").set("Authorization",TOKEN).send();
    expect(response.statusCode).toBe(200);
})
    
test("post messages status 200 ", async () => {
    const response = await request(app).post("/messages").send(
        {
            name:"TIARA",
            email:"tiara123@gmail.com",
            message:"TIARA refefs to the princess gorgeous jewels within the crown"
        }
    );
    expect(response.statusCode).toBe(200);
})
test("update blog status 400 ", async () => {
    const blog = await Blog.findOne({ title:"THEME"})
    const id = blog._id
    const response = await request(app).put("/blogs/"+id).set("Authorization",TOKEN).send(
        {
            name: "Bienvenue sur ...", email: "abc@gmail.com", message: "wertyghj hjk vbnm aquí tenemos un campo"
        }
    );
    expect(response.statusCode).toBe(400);
})
test("update blog status 200", async () => {
    const blog = await Blog.findOne({ title:"THEME"})
    const id = blog._id
    const response = await request(app).put("/blogs/"+id).set("Authorization",TOKEN).send(
        {
            name: "Bienvenue", email: "abc@gmail.com", message: "wertyghj hjk vbnm aquí tenemos un campo"
        }
    );
    expect(response.statusCode).toBe(400);
})
test("delete messages status 200 ", async () => {
     const messages = await Message.findOne()
    
     const id = messages._id
     const response = await request(app).delete("/messages/"+id).set("Authorization",TOKEN)
     expect(response.statusCode).toBe(200);
 })
test("delete comment status 200 ", async () => {
         const blog = await Blog.findOne({title:"THEME"})
     const id2= blog.comments._id
     const id = blog._id
     const response = await request(app).delete("/blogs/"+id+"/comments/"+id2)
     expect(response.statusCode).toBe(200);
 })
test("delete blog status 204 ", async () => {
    const blog = await Blog.findOne({ title:"THEME"})
    const id = blog._id
    const response = await request(app).delete("/blogs/"+id).set("Authorization",TOKEN)
    expect(response.statusCode).toBe(204);
})
