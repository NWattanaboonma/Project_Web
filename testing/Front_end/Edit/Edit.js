// got to that process showing list
function Change(id){
    if(id==="Ad"){
        window.location.href = "/List_Admin";
    }
    else if(id=="User"){
        window.location.href = "/List_User";
    }
    else{
        window.location.href = "/List_product";
    }
    
}