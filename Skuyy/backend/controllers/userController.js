const pool = require("../config/db");

const profile = async(req,res)=>{
    try{
            const result = await pool.query(
            `
            SELECT id,name,email,bio,profile_picture
            FROM users
            WHERE id=$1
            `,
            [
                req.user.id
            ]
        );
        res.json(result.rows[0]);
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

const updateProfile = async(req,res)=>{
    try{
        const {
            name,
            bio,
            profile_picture
        }=req.body;

        const result = await pool.query(
            `
            UPDATE users
            SET name=$1,
            bio=$2,
            profile_picture=$3
            WHERE id=$4

            RETURNING *
            `,
            [
                name,
                bio,
                profile_picture,
                req.user.id
            ]
        );
        res.json(result.rows[0]);
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

module.exports={
profile,
updateProfile
};