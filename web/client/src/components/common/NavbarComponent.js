/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/3/8 17:24
 * @Description: 导航
 * @Copyright(©) 2015 by xiaomo.
 **/

import React, {Component} from "react";
import {Link, IndexLink} from "react-router";
export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <IndexLink className="navbar-brand" to={`/`}>{'小莫'}</IndexLink>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="list-unstyled"><IndexLink to={`/`}>{'首页'}</IndexLink></li>
                            <li className="menu-font active"><Link to='/blog'>博客</Link></li>
                            <li><Link to='/changeLog'>更新日志</Link></li>
                            <li><Link to='/about'>关于我</Link></li>
                            <li><Link to='/login'>登录</Link></li>
                            <li><Link to='/register'>注册</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

