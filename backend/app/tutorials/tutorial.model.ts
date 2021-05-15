export class Tutorial {
    private id: Number = 0;
    private name: String = '';
    private content: String = '';

    constructor(tutorialId: Number,
                tutorialName: String,
                tutorialContent: String,) {
        this.id = tutorialId;
        this.name = tutorialName;
        this.content = tutorialContent;
    }

}
