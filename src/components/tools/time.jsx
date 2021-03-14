import React, { Component } from "react";

//props UTC = [-12,12] 
export default class Time extends Component{

    constructor(props){
        super(props);
        this.state= {
            ThisCountryDate: new Date(),
            diff: 0
        };
    }

    componentDidMount(){

        const ThisUTC=new Date().getTimezoneOffset(), NeedUTC= ((this.props.UTC)%13)? -(this.props.UTC)%13: 0;
        const diff= (ThisUTC-(NeedUTC*60))*60*1000;
        this.setState({ThisCountryDate: new Date((Date.now()+diff)), diff: diff});
        
        this.timerID=setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick=()=>{
        this.setState((state)=>({
            ThisCountryDate: new Date(Date.now()+state.diff)
        }))
    }

    render(){
        
        return (
            <div className='time'>
                <p>{this.state.ThisCountryDate.toLocaleDateString()}</p>
                <p>{this.state.ThisCountryDate.toLocaleTimeString()}</p>
            </div>
        )
    }
}
