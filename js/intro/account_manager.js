import {fetchJSON} from "../utils.js";
class account {
    username;
    password;
    type;

    constructor(u, p, t) {
        this.username = u;
        this.password = p;
        this.type = t;
    }
}

const accs = await fetchJSON("../test_acc/acc.json");

export class acc_manager {
    acc_list = Array(accs.accounts.length);
    

    constructor() {
        var account_list = accs.accounts;
        for (var i = 0; i<accs.accounts.length;i++) {
            this.acc_list[i] = new account(account_list[i].username, account_list[i].password, account_list[i].type);
        }
    }

    isValidAccount(u, p) {
        for (var stored_acc of this.acc_list) {
            if ((u == stored_acc.username) && (p == stored_acc.password)) {
                return true;
            }
        }
        return false;
    }

    checkDuplicate(u, p) {
        for (var stored_acc of this.acc_list) {
            if ((u == stored_acc.username) && (p == stored_acc.password)) {
                return true;
            }
        }
        return false;
    }

    addNewAccount(u, p) {
        var inp = {username: u, password: p, type: "user"};
    }
}