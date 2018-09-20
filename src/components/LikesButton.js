import React from 'react'

class LikesButton extends React.Component{
    constructor(props){
        super(props)
        this.addLikesNum = this.addLikesNum.bind(this)
        this.state={
            likes : 0
        }
    }

    addLikesNum(){
        this.setState({likes:this.state.likes+1})
    }

    render(){
        return (
            <div>
                <button onClick={this.addLikesNum}>点赞（{this.state.likes}）</button>
            </div>
        )
    }
}

export default LikesButton