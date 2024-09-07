enum statustype {
    PENDING=1,
    COMPLETED,
    FAILED,
}

function getstatus(orderID:number,status:statustype){
    console.log(orderID ,"==",status);
    

}
getstatus(12345,statustype.COMPLETED)