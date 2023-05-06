function swapProps(obj, a, b) {
  const temp = obj.a;
  obj.a = obj.b;
  obj.b = temp;
}

export default swapProps;
