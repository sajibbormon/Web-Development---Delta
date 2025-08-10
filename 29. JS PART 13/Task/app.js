let url = 'http://universities.hipolabs.com/search?name=india&state-province'


let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let province = document.querySelector("input").value;
    // console.log(province);
    let colleges = await getColleges();
    show(colleges, province);
});

function show(colleges, province){
    let provinceCollege = [];
    let list = document.querySelector("#result");
    list.innerText = "";
    // console.log(colleges);
    for(college of colleges){
        // console.log(college['state-province']);
        if(college['state-province'] === province){
            // provinceCollege.push(college.name);

            console.log(college.name);
            let li = document.createElement("li");
            li.innerText  = college.name;
            list.appendChild(li);
        }
    }

}

async function getColleges() {
    try{
        let res = await axios.get(url);
        return res.data;
    }catch(err){
        console.log(err);
        return "error";
    }
}