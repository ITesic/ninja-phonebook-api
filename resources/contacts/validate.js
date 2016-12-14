if(!this.firstName){
    error('firstName', "Ime kontakta je obavezno");
}

if(this.firstName.length < 2){
    error('firstName', "Ime kontakta ne moze biti krace od 2 karaktera");
}

if(this.firstName.length > 20){
    error('firstName', "Ime kontakta ne moze biti duze od 20 karaktera");
}

if(!this.lastName){
    error('lastName', "Prezime kontakta je obavezno");
}

if(this.lastName.length < 2){
    error('lastName', "Prezime kontakta ne moze biti krace od 2 karaktera");
}

if(this.lastName.length > 20){
    error('lastName', "Prezime kontakta ne moze biti duze od 20 karaktera");
}

if(!emailValid(this.email)) {
    error('email', 'Email nije u ispravnom formatu')
}

function emailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}