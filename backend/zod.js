const z = require("zod");

const zs_signup = z.object({
  username: z
    .string()
    .min(3, { message: "Username should contain morethan 3 characters" })
    .max(30, { message: "Username should contain lessthan 30 characters" })
    .trim()
    .email(),
  firstName: z
    .string()
    .max(50, { message: "Username should contain lessthan 50 characters" })
    .trim(),
  lastName: z
    .string()
    .max(50, { message: "Username should contain lessthan 50 characters" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Username should contain morethan 6 characters" }),
});

const zs_signin = z.object({
  username: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Username should contain morethan 6 characters" }),
});

const zs_update_userinfo = z.object({
  firstName: z
    .string()
    .max(50, { message: "Username should contain lessthan 50 characters" })
    .trim()
    .optional(),
  lastName: z
    .string()
    .max(50, { message: "Username should contain lessthan 50 characters" })
    .trim()
    .optional(),
  password: z
    .string()
    .min(6, { message: "Username should contain morethan 6 characters" })
    .optional(),
});

module.exports = { zs_signup, zs_signin, zs_update_userinfo };
