import firebase from "../../firebase"
export class ReportsAction {
    static ALL_MISSING_REPORTS = "ALL_MISSING_REPORTS";
    static ALL_MISSING_REPORTS_DONE = "ALL_MISSING_REPORTS_DONE";

    static allMissingReports() {
        let arr = [];
        return (dispatch) => {
            firebase
                .database()
                .ref()
                .child("/missing")
                .on("value", (snapshot) => {
                    var obj = snapshot.val();

                    for (var key in obj) {
                        arr.push(obj[key]);
                    }
                })
            dispatch(ReportsAction.allMissingReportsDone(arr))
        }
    }

    static allMissingReportsDone(data) {
        return {type: ReportsAction.ALL_MISSING_REPORTS_DONE, payload: data}
    }
}