import React, { PureComponent } from 'react'

//STYLE
import './Accounts.scss'

export default class Accounts extends PureComponent {
    
    state={
        accountList : []
    }

    render() {
        return (
            <div id='accounts'>
                <h1>Who's watching?</h1>
                <div className="accounts-container">
                    {
                        this.state.accountList.length > 0
                        ? this.state.accountList.lenght < 5
                            ? 
                                <>
                                {this.state.accountList.map( account => {
                                return (
                                    <div className="account" key = {account.id}>
                                        <img src={account.accountPic} alt=""/>
                                        <p>{account.name}</p>
                                    </div>
                                )
                                })}
                                <div className="create-account">
                                    <i className="fas fa-plus-circle"></i>
                                    Add Account
                                </div>
                                </>
                            : this.state.accountList.map( account => {
                                return (
                                    <div className="account" key = {account.id}>
                                        <img src={account.accountPic} alt=""/>
                                        <p>{account.name}</p>
                                    </div>
                                )
                            })
                        : <div className="no-accounts">
                            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
                                <p>No accounts yet.</p>
                                <p>Please make an account.</p>
                            </div>
                            <div className="create-account">
                                <i className="fas fa-plus-circle"></i>
                                Add Account
                            </div>
                        </div>
                    }
                </div>
                <button>Manage Profile</button>
            </div>
        )
    }
}
