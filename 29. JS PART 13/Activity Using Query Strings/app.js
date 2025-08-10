let url = 'http://universities.hipolabs.com/search?name=';


let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let country = document.querySelector("input").value;
    let collegeArray = await getColleges(country);
    // console.log(collegeArray);
    show(collegeArray);
});

function show(collegeArray){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(college of collegeArray){
        console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}


async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch (err){
        console.log(err);
        return "error";
    }
}

getColleges();