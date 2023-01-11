import app from "../srccd/app";
import request from "supertest"
import Blog from "../srccd/model/Blog";
const num = Math.floor(Math.random() * 10000)
test("get blog status 200 ", async () => {
    const response = await request(app).get("/api/blogs").send();
    expect(response.statusCode).toBe(200);
})
test("get messages status 200 ", async () => {
    const response = await request(app).get("/api/messages").send();
    expect(response.statusCode).toBe(200);
})
test("NOT FOUND status 404", async () => {
    const response = await request(app).get("/api/blo").send();
    expect(response.statusCode).toBe(404);
})
test("post blog status 200 ", async () => {
    const response = await request(app).post("/api/blogs").send({
        title: "THEME",
        content: "nature as environment",
        image: "image.hec"
    });
    expect(response.statusCode).toBe(200);
})
test("post signup status 200 ", async () => {
    const response = await request(app).post("/api/users/signup").send({
        username: "abc",
        email: "abc" + num + "@gmail.com",
        password: "abc123"
    }
    );
    expect(response.statusCode).toBe(200);
})
test("post status 200 ", async () => {
    const response = await request(app).post("/api/users/login").send(
        {
            email: "example@yahoo.com",
            password: "example123"
        }
    );
    expect(response.statusCode).toBe(200);
})
test("post comment status 400 ", async () => {
    const blog = await Blog.findOne({ title:"Salut!"})
    const id = blog._id
    const response = await request(app).post("/api/blogs/"+id+"/comments").send(
        {
            name: "Bienvenue sur ce site....", email: "abc@gmail.com", message: "wertyghj hjk vbnm aquí tenemos un campo"
        }
    );
    expect(response.statusCode).toBe(400);
})

test("post comment status 200 ", async () => {
    const blog = await Blog.findOne({ title:"Salut!"})
    const id = blog._id
    const response = await request(app).post("/api/blogs/"+id+"/comments").send(
        {
            name: "Bienvenue", email: "abc@gmail.com", message: "wertyghj hjk vbnm aquí tenemos un campo"
        }
    );
    expect(response.statusCode).toBe(200);
})
test("post like status 200 ", async () => {
    const blog = await Blog.findOne({ title:"Salut!"})
    const id = blog._id
    const response = await request(app).post("/api/blogs/"+id+"/liketrue").send();
    expect(response.statusCode).toBe(200);
})
