class Token {
    constructor (owner, index, dropped) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    };

};