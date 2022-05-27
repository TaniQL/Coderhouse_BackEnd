class Usuario {
    constructor (nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
        return this.mascotas;
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({ "nombre":nombre , "autor": autor});
        return this.libros;
    }

    getBookNames () {
        return this.libros.map( obj => obj.nombre );
    }

}

let nuevoUsuario = new Usuario('Tania','Quispe')

console.log(nuevoUsuario.getFullName())
console.log(nuevoUsuario.addMascota('Nala'))
console.log(nuevoUsuario.addMascota('Oggy'))
console.log(nuevoUsuario.addMascota('Bebita'))
console.log(nuevoUsuario.addMascota('Charlicita'))
console.log(nuevoUsuario.countMascotas())
console.log(nuevoUsuario.addBook('El amante japonés','Isabel Allende'))
console.log(nuevoUsuario.addBook('La sombra del viento','Carlos Ruiz Zafón'))
console.log(nuevoUsuario.getBookNames())