const shapes = ["line", "triangle", "rectangle", "circle"];

module.exports.GetShape = async (_, res) => {
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  return res.send(shape);
};
