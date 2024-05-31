import connectDB from "@/db";

export default function handler(req, res) {
  res.status(200).json({ name: "User is registered " });
}
