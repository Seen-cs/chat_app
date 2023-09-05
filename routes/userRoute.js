const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController")
const pageController = require("../controllers/pageController")


router.route('/addBlog').post(blogController.addBlog);
//router.route('/blog').get(pageController.getBlogPage);
router.route('/blog').get(blogController.getAllBlogs);

router.route('/').get(pageController.getHomePage);


module.exports = router; 