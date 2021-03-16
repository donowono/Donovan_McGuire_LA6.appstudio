
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



btnSubmit.onclick=function(){
  let name = inptName.value
  if (members.includes(name)){
    lblDisplay.textContent = `${name}, you are a member`
} else {
    lblDisplay.textContent =  `${name}, you are not a member, but we'll add you!`
    members.push(name)
    }
}
