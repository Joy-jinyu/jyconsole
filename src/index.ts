function jyConsole(...args: any[]) {
  console.log(...args, "joy");
  return [...args, "joy"];
}

export default jyConsole;
