const cors = require("cors");
const fs = require("fs");
const admin = require("firebase-admin");
const serviceAccount = require("../secrets/recyclerush-10293847-firebase-adminsdk-7kw16-ed61d47d1e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const express = require("express");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

const readData = async () => {
  const usersRef = db.collection("users");
  const snapshot = await usersRef.get();
  const users = [];
  snapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return { users };
};

const writeData = async (data) => {
  const usersRef = db.collection("users");
  for (const user of data.users) {
    await usersRef.doc(user.id).set(user);
  }
};

app.get("/points/:userId", async (req, res) => {
  const { userId } = req.params;
  const data = await readData();
  const user = data.users.find((u) => u.id === userId);
  if (user) {
    res.json({ points: user.points });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.post("/recycle/:userId/:item", async (req, res) => {
  const { userId, item } = req.params;
  const data = await readData();
  let user = data.users.find((u) => u.id === userId);
  if (!user) {
    user = { id: userId, points: 0, badges: {} };
    data.users.push(user);
  }
  switch (item) {
    case "plasticBottle":
      user.points += 5;
      user.plasticItems = (user.plasticItems || 0) + 1;
      break;
    case "plasticBag":
      user.points += 3;
      user.plasticItems = (user.plasticItems || 0) + 1;
      break;
    case "plasticStraw":
      user.points += 2;
      user.plasticItems = (user.plasticItems || 0) + 1;
      break;
    case "plasticCup":
      user.points += 4;
      user.plasticItems = (user.plasticItems || 0) + 1;
      break;
    case "plasticCutlery":
      user.points += 3;
      user.plasticItems = (user.plasticItems || 0) + 1;
      break;
    case "glassBottle":
      user.points += 6;
      user.glassItems = (user.glassItems || 0) + 1;
      break;
    case "otherGlassware":
      user.points += 5;
      user.glassItems = (user.glassItems || 0) + 1;
      break;
    case "aluminumCan":
      user.points += 7;
      user.metalItems = (user.metalItems || 0) + 1;
      break;
    case "paperCup":
      user.points += 2;
      user.paperItems = (user.paperItems || 0) + 1;
      break;
    case "paperBag":
      user.points += 2;
      user.paperItems = (user.paperItems || 0) + 1;
      break;
    case "paper":
      user.points += 1;
      user.paperItems = (user.paperItems || 0) + 1;
      break;
  }
  updateBadges(user);
  await writeData(data);
  res.json(user);
});

const updateBadges = (user) => {
  const totalItems =
    (user.plasticItems || 0) +
    (user.paperItems || 0) +
    (user.metalItems || 0) +
    (user.glassItems || 0);
  const plasticItems = user.plasticItems || 0;
  const paperItems = user.paperItems || 0;
  const metalItems = user.metalItems || 0;
  const glassItems = user.glassItems || 0;

  if (totalItems >= 25) user.badges["Recycle Rookie"] = true;
  if (totalItems >= 75) user.badges["Eco Explorer"] = true;
  if (totalItems >= 120) user.badges["Sustainable Star"] = true;
  if (plasticItems >= 100) user.badges["Plastic Champion"] = true;
  if (paperItems >= 120) user.badges["Paper Wizard"] = true;
  if (metalItems >= 75) user.badges["Metal Maestro"] = true;
  if (glassItems >= 75) user.badges["Glass Guardian"] = true;
  if (totalItems >= 400) user.badges["Planet Saver"] = true;
};

app.get("/leaderboard/:userId", async (req, res) => {
  const { userId } = req.params;
  const data = await readData();

  const sortedUsers = [...data.users].sort((a, b) => b.points - a.points);

  const rank = sortedUsers.findIndex((user) => user.id === userId) + 1;

  if (rank) {
    res.json({ rank });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/participants", async (req, res) => {
  const data = await readData();

  const totalParticipants = data.users.length;

  res.json({ totalParticipants });
});

app.get("/highest-points", async (req, res) => {
  const data = await readData();

  const highestPointsUser = data.users.reduce(
    (max, user) => (user.points > max.points ? user : max),
    { points: 0 }
  );

  res.json({ highestPoints: highestPointsUser.points });
});

app.get('/leaderboard', async (req, res) => {
    const data = await readData();
    
    const usersWithEmail = await Promise.all(data.users.map(async user => {
      const userRecord = await admin.auth().getUser(user.id);
      const updatedUser = Object.assign({}, user, { email: userRecord.email });
      return updatedUser;
    }));
    
    const sortedUsers = usersWithEmail.sort((a, b) => b.points - a.points);
    
    res.json(sortedUsers);
  });

app.get("/badges/:userId", async (req, res) => {
  const { userId } = req.params;
  const data = await readData();
  const user = data.users.find((u) => u.id === userId);
  if (user) {
    res.json({ badges: user.badges });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
