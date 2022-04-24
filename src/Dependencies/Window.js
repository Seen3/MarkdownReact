import React from 'react';
import {marked} from "marked";
let parser=new DOMParser();
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
            value:`# This is heading
## This is subheading
\`<html>Code comes here</html>\`
\`\`\`int a=0;
a+=10;
\`\`\`
**BOLD** _ITALIC_ **_Both_**

- and lists
    - morelists
    
![Pikachu](https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png)
`
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

        let valtemp=this.props.text;
        
        if (iseditor)
        {
        return <TextBox onChange={this.props.handler}/>
        }
        let obj=(marked.parse(valtemp));

        return <div className='PreviewBox' dangerouslySetInnerHTML={{__html:obj}}></div> ;
    }
}
class Window extends React.Component{
    constructor(props)
    {
        super(props);   
    }
    
    render()
    {
        if (this.props.title==="Editor"){
        return(
            <div className='Box'>
                <WindowTitle title={this.props.title} />

                <ChooseElement title={this.props.title} handler={this.props.onChange} text={this.props.text}/>
            
            </div>
        );}
        else
        {
            //{homes.map(home => <div>{home.name}</div>)}
            return(<div className='Box'>
                <WindowTitle title={this.props.title} />
                <ChooseElement title={this.props.title} handler={this.props.onChange} text={this.props.text}/>
            </div>)
        }
    }
}
export default class Windows extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            value:`# This is heading
## This is subheading
\`<html>Code comes here</html>\`
\`\`\`int a=0;
a+=10;
\`\`\`
**BOLD** _ITALIC_ **_Both_**
- and lists
    - morelists

![Pikachu](https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png)
`
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
