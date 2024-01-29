module.exports = class User {
    #id = null;
    #claims = [];

    constructor(id, claims) {
        this.#id = id;
        this.#claims = claims;
    }

    addClaim(claim) {
        console.log("adding claim ", claim)
        if (this.#claims.indexOf(claim) == -1) {
            this.#claims.push(claim);
        }

        return this.claims
    }

    get id() {
        return this.#id;
    }

    get claims() {
        return this.#claims;
    }
}