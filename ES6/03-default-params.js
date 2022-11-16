function newUser(name, age, country) {
    var name = name || 'Andres';
    var age = age || 24;
    var country = country || 'COL';
    console.log(name, age, country);
}

newUser();
newUser('Ricardo', 25, 'MX');

function newAdmin(name = 'Andres2', age = 24, country = 'CL') { 
    console.log(name, age, country);
}

newAdmin();
newAdmin('Martha', 12, 'USA');