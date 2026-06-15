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

module.exports = {
  createPost,
  getUserPosts
};