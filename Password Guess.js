function password(input){

    let password = input[0];
    
    if (password === "qwerty"){
        console.log("Wrong password!");
    }
    else if (password === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }
    else if (password === "s3cr3t!p@ss"){
        console.log("Wrong password!");
    }
    
    
    
    
}
password(["s3cr3t!P@ssw0rd"])