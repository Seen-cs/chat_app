const Blog = require("../models/blogModel");

exports.addBlog = (req,res,next)=>{
  const { mainTitle, contents } = req.body; 
  const newBlog = new Blog({ mainTitle, contents }); 

  newBlog.save()
    .then(savedBlog => {
      console.log('Yeni blog kaydedildi:', savedBlog);
      res.status(201).json(savedBlog); 
    })
    .catch(error => {
      console.error('Blog kaydedilirken hata oluştu:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};
exports.getAllBlogs = async (req,res,next)=>{
  try {
    const blogs = await Blog.find();

    // EJS şablonunu kullanarak index.ejs dosyasını render etme
    res.render('blog', { blogs });
  } catch (err) {
    console.error("Ürünleri listelerken bir hata oluştu:", err);
    res.status(500).send("Bir hata oluştu!");
  }
}