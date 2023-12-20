// numeric data 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//  string enum 
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "ReadData";
    RequestType2["saveData"] = "saveData";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
// hetergenous enum 
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "ReadData";
    RequestType3["saveData"] = "saveData";
    RequestType3[RequestType3["deleteId"] = 1] = "deleteId";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
