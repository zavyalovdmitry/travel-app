import React, { Component } from "react";


class Currency extends Component{
    
        constructor(props){
            super(props);
            this.state={data: ''};
        }

        componentDidMount()
        {
            const {arrives,out} = this.props;
            const access = arrives+'_'+out;
            const urlQuery=`https://free.currconv.com/api/v7/convert?q=${access}&compact=ultra&apiKey=327a6ca3039328c74676`;
            
            fetch(urlQuery).then(data=>data.json())
            .then(data=> {
                console.log('data');
                console.log(data);
                const currency='1'+arrives+'=' +data[access]+out;
                this.setState({data: currency});

            });
        }
        
    
        render()
        {
            return(
                <div>
                    {this.state.data}
                </div>
            )
        }

}


export default class ExchangeRates extends Component{

    constructor(props){
        super(props);
    }
    render(){
        const {currency}=this.props;

        return(
            <div>
                <Currency arrives={currency} out={'EUR'}/>
                <Currency arrives={currency} out={'USD'}/>
                <Currency arrives={currency} out={'RUB'}/>
            </div>
        );
        
    }

}


