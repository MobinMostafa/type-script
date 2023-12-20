// numeric data 

enum RequestType{
    readData = 1,
    saveData,
    deleteData
}

console.log(RequestType)

//  string enum 

enum RequestType2{
     readData = "ReadData",
     saveData = "saveData"
}

console.log(RequestType2)

// hetergenous enum 

enum RequestType3{
    readData = "ReadData",
    saveData = "saveData",
    deleteId = 1
}

console.log(RequestType3)



