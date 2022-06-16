import accs from  "acc.json";

class account {
    #username;
    #password;
    #type;

    constructor(u, p, t) {
        this.#username = u;
        this.#password = p;
        this.#type = t;
    }

    get #username() {
        return this.#username;
    }
    get #password() {
        return this.#password;
    }
    get #type() {
        return this.#type;
    }
}

export class acc_manager {
    #acc_list = new Array<account>(accs.length);

    constructor() {
        var account_list = JSON.parse(accs.accounts);
        for (var i = 0; i<accs.length;i++) {
            this.#acc_list = account(account_list[i].username, account_list[i].password, account_list[i].type);
        }
    }

    isValidAccount(u, p) {
        for (var stored_acc in this.#acc_list) {
            if ((u == stored_acc.#username) && (p == stored_acc.#password)) {
                return true;
            }
        }
        return false;
    }

    checkDuplicate(u, p) {
        for (var stored_acc in this.#acc_list) {
            if ((u == stored_acc.#username) && (p == stored_acc.#password)) {
                return true;
            }
        }
        return false;
    }

    addNewAccount(u, p) {

    }
}