if(!this.name){
    error('name', "Ime grupe je obavezno");
}

if(this.name.length > 10){
    error('name', "Ime grupe ne moze biti duze od 10 karaktera");
}