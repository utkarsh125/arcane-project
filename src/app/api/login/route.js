import {connect} from "../../../lib/db";
import User from "../../../models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request){
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            console.log("user not exists");
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        //check if password is correct
        const validPassword = await bcrypt.compare(
          password,
          user.password
        );

        if(!validPassword){
            console.log("Invalid password");
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
        
        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        
        response.cookies.set("token", token, {
            httpOnly: true,   
        })
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}