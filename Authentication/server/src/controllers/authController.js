import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const createToken = (userId) => {
    const secret = process.env.JWT_SECRET || "default_jwt_secret";
    return jwt.sign({ id: userId }, secret, { expiresIn: "7d" });
};

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

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const token = createToken(user._id);

        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function profile(req, res) {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        res.status(200).json({ user: req.user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
