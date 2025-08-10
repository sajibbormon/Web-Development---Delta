/*

Some Random APIs

https://catfact.ninja/fact (sends random cat facts)

https://www.boredapi.com/api/activity (sends an activity to do when bored)


https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

*/

let url = 'https://dog.ceo/api/breeds/image/random';

async function getImg() {
    let img = await fetch(url);
    console.log(img.parse);
}