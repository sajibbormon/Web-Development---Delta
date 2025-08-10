const figlet = require("figlet"); //just write th package name only inside require.

figlet("PAYEL BORMON!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});