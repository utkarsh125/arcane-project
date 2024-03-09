import {connect} from "../../../lib/db";
import User from "../../../models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// import { sendEmail } from "@/helpers/mailer";

export const POST = async (request) => {
  const reqBody = await request.json();
  const { username, email, password } = reqBody;
  console.log("---> from body", reqBody);

  // connect to db
  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    console.log("User Already Exist");
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  console.log("hashedPassword --> ", hashedPassword);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    console.log("<--- Success sign up ---> ");

    return new NextResponse("user is registered", { status: 200 });
  } catch (err) {
    console.log("Some error in sign up --> ", err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};
