class Map {
    constructor(e){
        this.elements = new Array(e);
        for(let i = 0; i < this.elements.length; i++)
            this.elements[i] = new Element();
        
    }


    show(){
        for(let i = 0; i < this.elements.length; i++)
            this.elements[i].show();
    }
}