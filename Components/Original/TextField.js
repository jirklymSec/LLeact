class TextField extends Component
{
    constructor()
    {
        super();
        this.name = "textfield"
        this.elType = "input";
        this.type = "text"
    }

    create(self) {
        let p = document.createElement(self.elType);
        p.id = self.id;
        p.type = self.type;
        //p.innerText = "LLeact." + self.name;
        self.element = p;
        document.getElementById("_root").appendChild(p);
    }

    create(self,element) {
        let p = document.createElement(self.elType);
        p.id = self.id;
        p.type = self.type;
        //p.innerText = "LLeact." + self.name;
        element.appendChild(p);
    }

    render()
    {
        document.write(
            "<input type='text' id="+this.id+">"
        );
    }
}