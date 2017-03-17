import axios from "axios";
export var searchRepo = (searchData) => {
    return {
        type: "SEARCH_REPO",
        searchData
    }
}

export var getRepo = (username) => {

    return (dispatch,getState) => {
        var requestURL = "https://api.github.com/users/" + username + "/repos";
        axios.get(requestURL).then((res) => {
            dispatch(searchRepo(res.data))
        }).catch((err) => {
            alert(err.code)
        })
    }
}