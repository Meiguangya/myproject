import React from 'react'

class Welcome extends React.Component{
    render(){
        const list = ['奶油蛋糕','香草冰激凌']
        const isAngry =false;
        return (
            <div>
                <h1>sss</h1>
                {'sss'}
                <ul>
                    {list.map(item=><li>{item}</li>)} 
                </ul>
                {isAngry?'OVO':'QAQ'}
            </div>
        )
    }
}

export default Welcome