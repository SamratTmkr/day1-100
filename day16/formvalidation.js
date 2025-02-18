
const displayMsg=(msg,idname,colorname)=>{
    document.getElementById(idname).innerHTML = msg
    document.getElementById(idname).style.color = colorname
}


const fnamevalidate = () => {
    let fname = document.getElementById('fname').value.trim();
    
    if (fname === '') {
        displayMsg('First Name is Mandatory', 'fnameMsg', 'red');
        return false;
    } else if (fname.length <= 3) {
        displayMsg('First name should be more than 3 characters', 'fnameMsg', 'red');
        return false;
    } else if (!/^[a-zA-Z]+$/.test(fname)) {  // Fixed regex validation
        displayMsg('First name should only contain alphabets', 'fnameMsg', 'red');
        return false;
    } else {
        displayMsg('First name is valid', 'fnameMsg', 'green');
        return true;
    }
};

// Last Name Validation
const lnamevalidate = () => {
    let lname = document.getElementById('lname').value.trim();
    
    if (lname === '') {
        displayMsg('Last Name is mandatory', 'lnameMsg', 'red');
        return false;
    } else if (lname.length <= 3) {
        displayMsg('Last name should be more than 3 characters', 'lnameMsg', 'red');
        return false;
    } else if (!/^[a-zA-Z]+$/.test(lname)) {
        displayMsg('Last name should only contain alphabets', 'lnameMsg', 'red');
        return false;
    } else {
        displayMsg('Last name is valid', 'lnameMsg', 'green');
        return true;
    }
};

//email validation 

const emailvalidate = () => {
    let email = document.getElementById('email').value.trim();
    
    if (email === '') {
        displayMsg('Email is mandatory', 'emailMsg', 'red');
        return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        displayMsg('Enter a valid email address', 'emailMsg', 'red');
        return false;
    } else {
        displayMsg('Email is valid', 'emailMsg', 'green');
        return true;
    }
};


const pwdvalidate = () => {
    let pwd = document.getElementById('pwd').value.trim();

    if (pwd === '') {
        displayMsg('Password is mandatory', 'pwdMsg', 'red');
        return false;
    } 
    else if (!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        displayMsg('Password must have at least 8 characters, including an uppercase, a lowercase, a number, and a special character', 'pwdMsg', 'red');
        return false;
    } 
    else {
        displayMsg('Password is valid', 'pwdMsg', 'green');
        return true;
    }
};

const cpwdvalidate = () => {
    let pwd = document.getElementById('pwd').value.trim();
    let cpwd = document.getElementById('cpwd').value.trim(); // Fixed reference

    if (cpwd === '') {
        displayMsg('Confirm Password is mandatory', 'cpwdMsg', 'red');
        return false;
    } 
    else if (cpwd !== pwd) {
        displayMsg('Passwords do not match', 'cpwdMsg', 'red');
        return false;
    } 
    else {
        displayMsg('Passwords match', 'cpwdMsg', 'green');
        return true;
    }
};

const handleSubmit = () => {
    if (fnamevalidate() && lnamevalidate() && pwdvalidate() && cpwdvalidate()) {
        return true;
    } else {
        return false;
    }
}





