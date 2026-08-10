import bcrypt from "bcrypt";
import User from "../models/User.js";

export async function register(req, res) {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({

                message: "All fields are required",

            });

        }

        const existingUser = await User.findOne({

            email,

        });

        if (existingUser) {

            return res.status(400).json({

                message: "Email already exists",

            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({

            name,

            email,

            password: hashedPassword,

        });

        res.status(201).json({

            message: "Register Success",

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

            },

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message,

        });

    }

}