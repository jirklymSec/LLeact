/*
Copyright 2019@Jiri Korenek

Basic LLeact component
*/

class Component
{

    constructor(id)
    {
        //paramaters creation
        this.name = "Component";

        if(id != undefined) this.id = this.hashCode(Date.now()+"a")+ id;
        else this.id = this.hashCode(Date.now()+"a");
    }

    //main render function
    render()
    {
        //default
        document.write(
                "<p id="+this.id+">LLeact."+this.name+"</p>"
        );
        console.log("plz");
    }

    //thanks @deekshith from gitHub for this hash func!
    hashCode(str) {
        return str.split("").reduce((prevHash, currVal) =>
          (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
    }
}