// // เริ่มเขียนโค้ดตรงนี้;
let getUsers = async () => {
  try {
    let result = [];
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    data.map((users) => {
      if (users.name.length > 17) {
        result.push(users.name);
      }
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

getUsers();
