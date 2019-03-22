class Button extends Component {
    constructor(name,text) {
        super(name);
        this.text = text;

        this.name = "textfield"
    }

    render = function() {
        let button = document.createElement("button");
        button.addEventListener('click',function(){text.add(text)});
        button.id = this.id;
        document.getElementById("_").appendChild(button);
    }
}