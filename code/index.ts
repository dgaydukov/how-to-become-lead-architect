(()=>{
    class Dog{
        private name: string;

        constructor(_name: string){
            this.setName(_name);
        }

        setName(_name: string){
            this.name = _name;
        }

        getName(){
            return this.name;
        }
    }

    const modify = (primitive: number, complex: Dog) => {
        primitive = 2; // modify local copy of passed param
        
        complex.setName("Ralf"); // modify passed param

        complex = new Dog("Gooi"); // create new local copy, since here all is done with newly created local copy
    }

    const n = 1;
    const dog = new Dog("Max");
    console.log(n, dog.getName());
    modify(n, dog);
    console.log(n, dog.getName());
})();