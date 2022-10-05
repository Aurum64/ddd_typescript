import express from "express";
const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  }
);

app.listen(3000, () => {
  console.log("Start on port 3000.");
});

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  { id: 3, name: "User3", email: "user3@test.local" },
];

//一覧取得
app.get("/users", (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(users));
});

type UserRegisterParams = {
  name: string;
  email: string;
};

app.post(
  "/users",
  (
    req: express.Request<any, any, UserRegisterParams>,
    res: express.Response<User>
  ) => {
    const body = req.body;
    users.push({
      id: users.length + 1,
      name: body.name,
      email: body.email,
    });

    res.send(users[users.length - 1]);
    // res.send({ key: "value" });
  }
);
