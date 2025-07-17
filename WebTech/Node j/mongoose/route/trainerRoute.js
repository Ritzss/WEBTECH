// ! Route Handlers / Controllers
trainersRouter.route("/").get().post((req, res) => {
    res.send("Hii, I am from create new trainer");
  });

trainersRouter.route("/:id").get((req, res) => {
    res.send("Hii, I am from get single trainer");
  }).patch((req, res) => {
    res.send("Hii, I am from update trainer");
  }).delete((req, res) => {
    res.send("Hii, I am from delete trainer");
  });