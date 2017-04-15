import firebase from "../../firebase";
export class MissingAction {
    static MissingData = "MissingData";
    static MissingData_Done = "MissingData_Done";
    static MissingData_Failed = "MissingData_Failed";
    static Missing_Image_Done = "Missing_Image_Done";
    static Missing_Image = "Missing_Image";

    static missingData(userObj) {

        return (dispatch) => {
            firebase
                .database()
                .ref()
                .child("/missing")
                .push(userObj)
                .then((user) => {
                    firebase
                        .database()
                        .ref()
                        .child("/user/report/" + user.uid + "")
                        .push(userObj)
                    dispatch(MissingAction.missingDataDone());
                })
                .catch((err) => {
                    dispatch(MissingAction.missingDataFail())
                })

        }

    }

    static missingDataDone() {
        return {type: MissingAction.MissingData_Done}
    }
    static missingDataFail() {
        return {type: MissingAction.MissingData_Failed}
    }
    static missingImageDone(obj) {
        return {type: MissingAction.Missing_Image_Done, payload: obj}
    }
    static missingImage(event) {

        return (dispatch) => {
            var percentage;
            var file = event.target.files[0];
            const storageRef = firebase
                .storage()
                .ref(`pictures/${file.name}`);
            const task = storageRef.put(file);
            task.on("state_changed", (snapshot) => {
                percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                dispatch(MissingAction.missingImageDone({percentage: percentage}))

            }, (err) => {
                console.log(err)
            }, () => {
                //success
                dispatch(MissingAction.missingImageDone({photo: task.snapshot.downloadURL, percentage: percentage}))
                console.log(task.snapshot.downloadURL, "donload")
            })

        }
    }
}
