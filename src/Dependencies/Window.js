import React from 'react';
import {marked} from "marked";
class WindowTitle extends React.Component{
    render()
    {
        return(<div className='headStyle'>
            {this.props.title}
        </div>)
    }
};

class TextBox extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            value:"#Enter Markdown here"
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event)
    {
        this.setState({value:event.target.value});
        this.props.onChange(event.target.value);
    }
    render()
    {
        return(    
        <textarea className='textStyle' id="editor" value={this.state.value} onChange={this.handleChange}></textarea> 
        )
    }
}

class ChooseElement extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        const iseditor=this.props.title==="Editor";




        let valtemp=(this.props.text)
        
        
        
        
        if (iseditor)
        {
        valtemp=<TextBox onChange={this.props.handler}/>
        }
        return valtemp;
    }
}
class Window extends React.Component{
    constructor(props)
    {
        super(props);   
    }
    
    render()
    {
        return(
            <div className='Box'>
                <WindowTitle title={this.props.title} />
                <ChooseElement title={this.props.title} handler={this.props.onChange} text={this.props.text}/>
            </div>
        );
    }
}
export default class Windows extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            value:"#Enter Markdown Here"
        }
        this.handler=this.handler.bind(this);
    }
    handler(val){
        this.setState({
            value:val
        })
    }
    render()
    {
        return (
        <div>
            <Window title="Editor" onChange={this.handler} text={this.state.value}/>
            <Window title="Previewer" onChange={this.handler} text={this.state.value}/>
        </div>
    )
    }
    
}
