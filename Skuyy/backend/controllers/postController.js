const pool = require("../config/db");

// CREATE POST
const createPost = async (req, res) => {

  try {

    const {
      title,
      description,
      category,
      location,
      img_url
    } = req.body;


    const result = await pool.query(
      `
      INSERT INTO posts
      (
        user_id,
        title,
        description,
        category,
        location,
        img_url
      )
      VALUES
      ($1,$2,$3,$4,$5,$6)

      RETURNING *
      `,
      [
        req.user.id,
        title,
        description,
        category,
        location,
        img_url
      ]
    );


    res.status(201).json({
      message: "Post berhasil dibuat",
      post: result.rows[0]
    });


  } catch(error){

    console.log(error);

    res.status(500).json({
      message:error.message
    });

  }

};

const getUserPosts = async(req,res)=>{

  try {

    const result = await pool.query(
      `
      SELECT *
      FROM posts
      WHERE user_id = $1
      ORDER BY created_at DESC
      `,
      [
        req.user.id
      ]
    );


    res.json(result.rows);


  } catch(error){

    console.log(error);

    res.status(500).json({
      message:error.message
    });

  }

};

const getAllPosts = async(req,res)=>{

  try{

    const result = await pool.query(
      `
      SELECT
        posts.id,
        posts.user_id,
        posts.title,
        posts.description,
        posts.category,
        posts.location,
        posts.img_url,
        posts.created_at,

        users.name,
        users.profile_picture

      FROM posts

      JOIN users
      ON posts.user_id = users.id

      ORDER BY posts.created_at DESC

      `
    );


    res.json(result.rows);


  }catch(error){

    console.log(error);

    res.status(500).json({
      message:"Server error"
    });

  }

};

const getPostById = async(req,res)=>{

    try{

        const result = await pool.query(
            `
            SELECT *
            FROM posts
            WHERE id=$1
            `,
            [
                req.params.id
            ]
        );


        if(result.rows.length === 0){

            return res.status(404).json({
                message:"Post tidak ditemukan"
            });

        }


        res.json(result.rows[0]);


    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server error"
        });

    }

};

// UPDATE POST
const updatePost = async(req,res)=>{

    try{

        const {
            title,
            description,
            category,
            location,
            img_url
        } = req.body;


        const result = await pool.query(
            `
            UPDATE posts
            SET
            title=$1,
            description=$2,
            category=$3,
            location=$4,
            img_url=$5
            WHERE id=$6 AND user_id=$7
            RETURNING *
            `,
            [
                title,
                description,
                category,
                location,
                img_url,
                req.params.id,
                req.user.id
            ]
        );


        if(result.rows.length === 0){
            return res.status(404).json({
                message:"Post tidak ditemukan"
            });
        }


        res.json({
            message:"Post berhasil diupdate",
            data:result.rows[0]
        });


    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server error"
        });

    }

};

// DELETE POST
const deletePost = async(req,res)=>{

    try{

        const result = await pool.query(
            `
            DELETE FROM posts
            WHERE id=$1 AND user_id=$2
            RETURNING *
            `,
            [
                req.params.id,
                req.user.id
            ]
        );


        if(result.rows.length===0){

            return res.status(404).json({
                message:"Post tidak ditemukan"
            });

        }


        res.json({
            message:"Post berhasil dihapus"
        });


    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server error"
        });

    }

};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getUserPosts,
  getAllPosts
};