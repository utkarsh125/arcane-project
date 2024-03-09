import { getDataFromToken } from "../../../helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/User";
import { connect } from "../../../lib/db";

connect();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}

export async function PATCH(request){

    try {
        const userId = await getDataFromToken(request);
        const userDataToUpdate = await request.json(); 


        const updatedUser = await User.findOneAndUpdate({_id: userId}, userDataToUpdate, { new: true });

        if (!updatedUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        console.log("updatedUser to update:", updatedUser)

        return NextResponse.json({
            message: "User details updated",
            data: updatedUser
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}