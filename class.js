class Human{
    age=15;//it is public :means can be acces outside the block

    #ht=8;//private: means can be acces only inside the block to acces private use (this.#name)

    wt=80;

    //behaviour

    walking(){
        console.log("i am walking" ,this.#ht);
    }
    running(){
        console.log("i am running");
    }

    get fetchheight(){
        this.#ht;
    }
}
//object
//let obj=new Human();
    //console.log(obj.age);
let obj=new Human();
    console.log(obj.fetchheight);

 obj.walking();   

