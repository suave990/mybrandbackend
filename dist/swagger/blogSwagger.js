/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *      type: object
 *      properties:
 *       _id:
 *         type: string
 *         format: objectId
 *         example: 63c0674c452515f26fab04f7
 *       title:
 *         type: string
 *         example: Premier Blog1
 *       content:
 *         type: string
 *         example: qazasdfghjklqwertyuiopasdfghjkxcvbnm
 *       type: object
 *       properties:
 *          public_id:
 *            type: string
 *            example: my_brand_andela/gaueqstlrpbhqju3aakl
 *          url:
 *            type: string
 *            example: https://res.cloudinary.com/dx7sba7u0/image/upload/v1672673554/my_brand…
 *       comments:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            _id:
 *              type: string
 *              format: objectId
 *              example: 63c0674c452515f26fab04f7
 *            name:
 *              type: string
 *              example: suave
 *            email:
 *              type: string
 *              format: email
 *              example: suave990@gmail.com
 *            message:
 *              type: string
 *              example: commenting!
 *       likes:
 *        type: object
 *        properties:
 *          Count:
 *            type: integer
 *            example: 1
 *          People:
 *            type: array
 *            items:
 *              type: string
 *              format: email
 *              example: suave990@gmail.com
 *       __v:
 *        type: integer
 *        example: 1
 */

// 

/**
 * @swagger
 * /blogs:
 *   get:
 *     tags:
 *       - Blogs
 *     summary: Getting a list of all blogs
 *     description: Getting all blogs
 *     operationId: viewBlogs
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal server error
 */

// 

/**
 * @swagger
 * /blogs/{Id}:
 *   get:
 *     tags:
 *       - Blogs
 *     summary: Find blog by ID
 *     description: Returns a single blog
 *     operationId: getBlogById
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID of blog to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63c0674c452515f26fab04f7
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       '500':
 *         description: Internal server error
 */

// 
/**
 * @swagger
 * /blogs/{Id}/comments:
 *  get:
 *     tags:
 *       - Blogs
 *     summary: Get all comments on a blog
 *     description: Get all comments on a blog
 *     operationId: getComments
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID of blog to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63c0674c452515f26fab04f7
 *     responses:
 *       '200':
 *         description: successful operation
 *       '500':
 *         description: Internal server error
 */

// 
/**
 * @swagger
 * /blogs/{Id}/likes:
 *  get:
 *     tags:
 *       - Blogs
 *     summary: Get all likes on a blog
 *     description: Get all likes on a blog
 *     operationId: getLikes
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID of blog to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63c0674c452515f26fab04f7
 *     responses:
 *       '200':
 *         description: successful operation
 *       '500':
 *         description: Internal server error
 */

// post Blog 

/**
 * @swagger
 * /blogs:
 *   post:
 *     tags:
 *       - Blogs
 *     summary: Add a new blog
 *     description: Add a new blog
 *     operationId: addBlog
 *     requestBody:
 *       description: Create a new blog
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Premier Blog1
 *                content:
 *                  type: string
 *                  example: add string text please!
 *                image:
 *                  type: string
 *                  format: dataurl
 *                  example: imageurl.tiff
 *       required: true
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '409':
 *         description: Invalid input
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: []    
 */

//  update Blog 

/**
 * @swagger
 * /blogs/{Id}:
 *   put:
 *     tags:
 *       - Blogs
 *     summary: Update blog
 *     description: Update blog
 *     operationId: UpdateBlog
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: Blog Id to update the blog
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63c0674c452515f26fab04f7
 *     requestBody:
 *       description: Update blog
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Premier Blog1
 *                content:
 *                  type: string
 *                  example: PLEASE! Add string text to this place
 *                image:
 *                  type: string
 *                  format: dataurl
 *                  example: imageurl.tiffs
 *
 *       required: true
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '409':
 *         description: Invalid input
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */

//  delete Blog 

/**
 * @swagger
 * /blogs/{Id}:
 *  delete:
 *     tags:
 *       - Blogs
 *     summary: Deletes a blog by ID
 *     description: delete a blog
 *     operationId: deleteBlog
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: Id to delete the blog
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63c0674c452515f26fab04f7
 *     responses:
 *       '200':
 *         description: Successfull operation
 *       '404':
 *         description: Blog with that Id not found
 *       '401':
 *         description: Not Authorized
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */

// post comment 

/**
 * @swagger
 * /blogs/{Id}/comments:
 *   post:
 *     tags:
 *       - Blogs
 *     summary: Comment on a blog
 *     description: Commenting on a blog
 *     operationId: postComment
 *     requestBody:
 *       description: Post a comment on a blog
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: premier comment
 *       required: true
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID of blog to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63c0674c452515f26fab04f7
 *     responses:
 *       '200':
 *         description: successful operation
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */

// post Likes

/**
 * @swagger
 * /blogs/{Id}/likes:
 *   post:
 *     tags:
 *       - Blogs
 *     summary: Adding or removing a like on a blog
 *     description: Adding or removing a like on a blog
 *     operationId: postLike
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID of blog to like
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63c0674c452515f26fab04f7
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */
"use strict";