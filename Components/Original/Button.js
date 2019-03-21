class Button extends Component
{
    constructor()
    {
        super();
        this.name = "textfield"
    }

    render()
    {
        document.write(
            "<input type='submit' id="+this.id+">"
        );
    }
}