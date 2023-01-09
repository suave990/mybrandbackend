import Blog from "../model/Blog";
import BlogServices from "../services/blogService";
export default class PostController {

  static async createPost(req, res) {
    try {
      const { title, content, image } = req.body;
      const data = new Blog({
        title: title,
        content: content,
        image: image,
        likes: 0,
      });
      const response = await BlogServices.createPost(data);
      if (response !== true) {
        return res.status(400).json({ response });
      } else {
        return res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }

  static async viewPosts(req, res) {
    try {
     // console.log(BlogServices)
   const blogs = await BlogServices.viewPosts();
     return res.status(200).json({ blogs });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }

  static async viewSinglePost(req, res) {
    try {
      const blog = await BlogServices.viewSinglePost(req.params.id);
      return res.status(200).json({ blog });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }

  static async deletePost(req, res) {
    try {
      await BlogServices.deletePost(req.params.id);
      return res.status(200).json({ message: "Blog Deleted" });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: error });
    }
  }
  static async updatePost(req, res) {
    try {
      let data = new Blog({});
      if (req.body.title) {
        data.title = req.body.title;
      }
      if (req.body.content) {
        data.content = req.body.content;
      }
      if (req.body.image) {
        data.image = req.body.image;
      }
      const response = await BlogServices.updatePost(req.params.id, data);
      if (response == true) {
        return res.status(200).json({ data });
      } else {
        return res.status(400).json({ response });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }
}
