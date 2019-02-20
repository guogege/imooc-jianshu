import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch
} from './style';

class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused': '' }
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                    </SearchWrapper>
                </Nav>
                
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)



