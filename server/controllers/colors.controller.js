const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

module.exports.GetColor = async (_, res) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return res.send(color);
};
