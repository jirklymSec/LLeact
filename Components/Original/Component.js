/*
Copyright 2019@Jiri Korenek

Basic LLeact component
*/

class Component {

    constructor(id) {
        //paramaters creation
        this.name = 0;
        if (id != undefined) this.id = this.hashCode(Date.now() + "a") + id;
        else this.id = this.hashCode(Date.now() + "a");
        this.create();
    }

    add(self){
        console.log(self);
        self.name++;
        self.render();
    }



    //main render function
    render = function () {
        let p = document.getElementById(this.id);
        console.log(this);
        p.innerText = this.name;
    }

    create() {
        let p = document.createElement("p");
        p.id = this.id;
        document.getElementById("_").appendChild(p);
    }

    //thanks @deekshith from gitHub for this hash func!
    hashCode(str) {
        return str.split("").reduce((prevHash, currVal) =>
            (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
    }
}