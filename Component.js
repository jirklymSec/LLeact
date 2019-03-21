class Component
{

    constructor(id)
    {
        //paramaters creation
        this.name = "Component";

        if(id == null) this.id = this.hashCode(now() + id);
        else this.id = this.hashCode(this.now + "_");
    }

    //main render function
    render()
    {
        //default
        document.write(
            {
                "<p ></p>"
            }
        );
        console.log("plz");
    }

    //thanks @deekshith from gitHub for this hash func!
    hashCode(str) {
        return str.split("").reduce((prevHash, currVal) =>
          (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
    }
}