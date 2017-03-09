import React from "react"

class Register extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        UserName:
                  <input type="text" ref="username" />
                    </div>
                    <div>
                        Addresss:
                  <input type="text" ref="address" />
                    </div>
                    <div>
                        UserEmail:
                  <input type="text" ref="useremail" />
                    </div>
                    <div>
                  <input type="text" ref="username" />
                    </div>



                   
                </form>
            </div>
                )
    }
}