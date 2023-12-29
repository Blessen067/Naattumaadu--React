import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';

const menus = [
    {
        id: 5,
        title: '',
        link: '/home2',
        image: ""
    },
    {
        id: 1,
        title: 'NAATTULIFE',
        link: '/home2',
    },
    {
        id: 2,
        title: ' TASTE & TRADITION',
        link: '/about',
    },
    {
        id: 3,
        title: 'HERITAGE & PROVISIONS',
        link: '/shop',
    },
    {
        id: 4,
        title: ' VISUAL ',
        link: '/gallery',
    },
    {
        id: 88,
        title: ' QUILL',
        link: '/contact',
    }
];

export default class MobileMenu extends Component {
    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {
        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        };

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                        <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu" >
                        {menus.map((item, index) => (
                            <React.Fragment key={item.id}>
                             
                                <li key={item.id}>
                                    {item.submenu ? (
                                        <p onClick={this.setIsOpen(item.id)}>
                                            {item.title}
                                            {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                        </p>
                                    ) : (
                                        <Link onClick={ClickHandler} href={item.link}>{item.title}</Link>
                                    )}
                                    {item.submenu ? (
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map(submenu => (
                                                            <li key={submenu.id}>
                                                                <Link onClick={ClickHandler} className="active" href={submenu.link}>
                                                                    {submenu.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    ) : ''}
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                        <span className="icon-bar first-angle"></span>
                        <span className="icon-bar middle-angle"></span>
                        <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        );
    }
}
