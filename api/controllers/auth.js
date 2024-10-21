import { db } from "../connect";

export const register = async (req, res) => {

    q = "SELECT FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status.json(err);
        if (data.length) return res.status(409).json("User already exists!")
    } )
}

export const login = async (req, res) => {
    
}

export const logout = async (req, res) => {
    
}