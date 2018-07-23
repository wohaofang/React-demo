import React, {
    Component
} from 'react';

import './index.css'


export default class Show extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let model;
        if(this.props.haha){
            model= ( <div className="show">
                        <div className="sub">
                            <div className="zhanghao">
                                <label>
                                    账号:<input type="text" placeholder="账号"/>
                                </label>
                            </div>
                            <div className="zhanghao">
                                <label>
                                    密码:<input type="text" placeholder="密码"/>
                                </label>
                            </div>
                            <div className="btn">
                                <div onClick={this.props.fn}>登录</div>
                                <div onClick={this.props.fn}>取消</div>
                            </div>
                        </div>
                    </div>)
        }else{
            model= (<h3>隐藏了</h3>)
        }

        return(
           <div>
                {model}
           </div>
        )
    }
} 