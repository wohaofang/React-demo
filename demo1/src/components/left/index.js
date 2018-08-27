import React, {
    Component
} from 'react';

import Bottom from './bottom'
import Show from './show'
import './index.css'

let leftStyle = {
    width : '500px',
    minHeight : '250px',
    color : 'rgb(18, 220, 90)',
    'background': 'rgb(243, 137, 137)'
}

let arr = [
    '关于小程序for循环警告没有wx:key',
    'swiper 间距轮播图 滑块',
    'jQuery WEUI 轮播js动态替换追加删除图片',
    '手机端div设置overflow-y:scroll时怎么阻止body页面的滚动？'
]

export default class LeftIndex extends Component{
    constructor(props){
        super(props)
        this.state={
            arr: arr ,
            haha : false
        }
    }

    showModel=(i)=>{
        console.log(111,i)
    }

    showShow=(e)=>{
        let showShow = !this.state.haha
        this.setState({haha:showShow})
        e.stopPropagation()
        e.preventDefault()
        
    }

    render(){
        return(
            <div style={leftStyle}>
                <div className="top">
                    新闻列表
                </div>

                <Bottom arr={arr} fn={this.showModel.bind(this,'哈哈我是父级的方法')}>
                    <div onClick={this.showShow}>登录</div>
                    <div onClick={this.showShow}>注册</div>
                </Bottom>

                <Show haha={this.state.haha} fn={this.showShow}></Show>
            </div>
        )
    }
} 