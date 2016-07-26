import * as React from "react"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import { Map } from "immutable"

import { getUser } from "../.././actions/user-actions"

interface IUser {
    user?: Map<string, string>,
    dispatch?: Dispatch<any>
}

@connect(store => {
    let props: IUser = {
        user: store.user
    }
    return props
})
export class User extends React.Component<IUser, {}>{
    shouldComponentUpdate(nextProps: IUser, nextState) {
        return this.props.user != nextProps.user
    }
    async componentWillMount() {
        this.props.dispatch(await getUser())
    }
    render() {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ color: "darkgray", marginRight: 10 }}>{this.props.user.get("name")}</div>
                <a style={{ cursor: "pointer", textDecoration: "underline", color: "lightgrey" }} onClick={() => { } }>Çıkış</a>
            </div>
        )
    }
}