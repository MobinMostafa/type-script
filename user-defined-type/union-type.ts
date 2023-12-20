let userId : number | string;

userId = 23;
userId = "23"


function userInfo(name: string | number){
    console.log(name)
}

userInfo("mboin mostafa")
userInfo(23)