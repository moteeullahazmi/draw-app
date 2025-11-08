import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config2"; // config name comes from pakckges/common-backend/packages.json inside export files name
import { middleware } from "./middleware";
import { CreateUserSchema, SignSchema, CreateRoomSchema } from "@repo/common/types"

const app = express();

app.post("signup", (req, res) => {

    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }

    res.json({
        userId: 123,
    });
});

app.post("signin", (req, res) => {
     const data = SignSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }
    const userId = 1;
    const token = jwt.sign(
        {
            userId,
        },
        JWT_SECRET
    );

    res.json({
        token,
    });
});

app.post("room", middleware, (req, res) => {
     const data = CreateRoomSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }
    res.json({
        roomId: 123,
    });
});

app.listen(3001);
