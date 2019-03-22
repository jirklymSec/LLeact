class MyGreatButton extends Button
{
    constructor(paragraph,paragrapthCallBack,name)
    {
        super();
        this.pC = paragrapthCallBack;
        this.paragraph = paragraph;
        this.name = name;
    }

    create(self) {
        let el = document.createElement(self.element);
        el.id = self.id;
        el.type = self.type;
        el.innerText = self.counter;
        el.value = self.name;
        p = self.paragraph;
        el.addEventListener('click',function(){self.pC(p)})
        document.getElementById("_").appendChild(el);
    }

    render(self)
    {
        let p = document.createElement(self.element);
        p.innerText = self.counter; 
    }
}