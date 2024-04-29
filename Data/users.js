import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "priya07@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "deeksha16@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sai",
    email: "sai23@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Prasanth",
    email: "prasanth31@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
