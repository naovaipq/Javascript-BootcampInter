const funcionarios = new Map();
funcionarios.set('Luiz', 'Admin');
funcionarios.set('Stephany', 'Admin');
funcionarios.set('Jorge', 'User');

function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

console.log(getAdmins(funcionarios));