class MyParagraph extends Component
{
    constructor()
    {
        super();
        this.name = "paragraph";
        this.counter = 0;
    }

    add(self)
    {
        self.counter++;
        self.render(self);
    }

    minus(self)
    {
        self.counter--;
        self.render(self);
    }

    create(self) {
        let p = document.createElement(self.element);
        p.id = self.id;
        p.type = self.type;
        p.innerText = self.counter
        document.getElementById("_").appendChild(p);
    }

    render(self)
    {
        let el = document.getElementById(self.id);
        el.innerText = self.counter; 
    }
}