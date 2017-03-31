export class ajaxAction {

    static HTTPCALL = "HTTPCALL";
    static HTTPCALL_SUCCESS = "HTTPCALL_SUCCESS";
    static HTTPCALL_FAILED = "HTTPCALL_FAILED";

    static getAllUsers() {
        return { type: ajaxAction.HTTPCALL }
    }
}