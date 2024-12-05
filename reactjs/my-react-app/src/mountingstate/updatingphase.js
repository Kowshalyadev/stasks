import React,{ Component } from "react";
class UpdatingPhase extends Component{
    constructor(props){
        super(props)
        this.state={count:1,color:"green"}
    }
    componentDidUpdate(pvsProps,prvsState){
        console.log(prvsState.count)
        console.log(this.state.count)
        if(prvsState.count!==this.state.count){
            console.log(`count value updateted ${this.state.count}`)
        }

    }
   
    shouldComponentUpdate(pvsProps,prvsState){
        if(this.state.count===10){
            return true;

        }
        else{
            return true
        }
           
    }
    static getDerivedStateFromProps(props,state){
        // console.log(props)
        // console.log(state)
        return ({color:this.props})

    }
    increment=()=>{
        this.setState({count:this.state.count+1})

    }
    decrement=()=>{
        this.setState({count:this.state.count-1})

    }
    render(){
        const {count}=this.state
        return(<>
        <h1 style={{color:this.state.color}}>{count}</h1>
        <button onClick={this.increment}>increments</button>
        <button onClick={this.decrement} disabled={count<=1}>decrement</button>
        </>)
    }
}
export default UpdatingPhase;