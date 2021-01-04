import React, { PureComponent } from 'react'
import {Link, withRouter} from 'react-router-dom'

//STYLE
import './Navbar.scss'

class Navbar extends PureComponent {
    
    state={
        accountList : [],
        currentAccount : {
            id: 'none',
            accountPic : 'none',
            name : 'none'
        },
        showAccounts : false
    }
    
    showAccounts(){
        this.setState({showAccounts : !this.state.showAccounts})
    }

    render() {
        return (
            <nav>
                <div className="left-part">
                    <div className="logo">
                        <img src="" alt=""/>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>TV Shows</Link></li>
                            <li><Link>Recently Added</Link></li>
                            <li><Link>Favourite</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="right-part">
                    <div className="search-container">
                        <input type="text"/>
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="accountList">
                        <div className="current-account">
                            <Link>
                                <img src={this.state.currentAccount.accountPic} alt=""/>
                                {this.state.currentAccount.name}
                            </Link>
                            <i className="fas fa-sort-down" onClick={()=>this.showAccounts()}></i>
                        </div>

                        <ul style={{height: this.state.showAccounts ? '' : '0px'}}>
                            {
                            this.state.accountList.length > 1
                            ? this.state.accountList.map(account => {
                                return(
                                    <li key={account.id}>
                                        <Link>
                                            <img src={account.accountPic} alt=""/>
                                            {account.name}
                                        </Link>
                                    </li>
                                )
                            })
                            : <li>No other accounts</li>
                            }
                        </ul>
                    </div>
                </div>

            </nav>
        )
    }
}

export default withRouter(Navbar);