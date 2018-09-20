import React from 'react'

class DigitalClock extends React.Component{

    constructor(props){
        super(props)
        this.state={
            time : new Date()
        }
    }

    //组件初始化
    componentDidMount(){
       this.timer=setInterval(()=>{
           this.setState({
               time:new Date()
           })
       },1000)
    }

    //组件卸载
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}

export default DigitalClock