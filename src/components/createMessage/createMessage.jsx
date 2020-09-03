import React from 'react';
import { stateToHTML } from 'draft-js-export-html';

import './createMessage.scss';

import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';

function keyBindingFunction(event) {
    if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey){
        
        switch(event.key){
            case 'x': return 'strikethrough';
            case '7': return 'ordered-list'; 
            case '8': return 'unordered-list';
            case '9': return 'blockquote';
        }
    }
    return getDefaultKeyBinding(event);
}

class CreateMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };

        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
        this.toggleBlockType = this.toggleBlockType.bind(this);
    }

    onChange(editorState) {
        this.setState({ editorState });
    }

    handleKeyCommand(command) {
        // inline formatting key commands handles bold, italic, code, underline
        var editorState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if(!editorState){
            switch(command){
                case 'strikethrough':{
                    editorState = RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH');
                    break;
                }
                case'blockquote' :{
                    editorState = RichUtils.toggleBlockType(this.state.editorState, 'blockquote');
                    break;
                }
                case 'ordered-list':{
                    editorState = RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item');
                    break;
                }
                case 'unordered-list':{
                    editorState = RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item');
                    break;
                }
            }
        }

        if (editorState) {
            this.setState({ editorState });
            return 'handled';
        }
        return 'not-handled';
    }

    toggleInlineStyle(event) {
        event.preventDefault();

        let style = event.currentTarget.getAttribute('data-style');
        this.setState({ editorState: RichUtils.toggleInlineStyle(this.state.editorState, style) });
    }

    toggleBlockType(event) {
        event.preventDefault();

        let block = event.currentTarget.getAttribute('data-block');
        this.setState({ editorState: RichUtils.toggleBlockType(this.state.editorState, block) });
    }

    renderBlockButton(value, block) {
        return (
            <input
                type="button"
                key={block}
                value={value}
                data-block={block}
                onMouseDown={this.toggleBlockType}
            />
        );
    }

    renderInlineStyleButton(value, style) {
        return (
            <input
                type="button"
                key={style}
                value={value}
                data-style={style}
                onMouseDown={this.toggleInlineStyle}
            />
        );
    }

    render() {
        const inlineStyleButtons = [
            { value: 'Bold', style: 'BOLD' }, { value: 'Italic', style: 'ITALIC' }, 
            { value: 'Underline', style: 'UNDERLINE' }, { value: 'Strikethrough', style: 'STRIKETHROUGH' },
            { value: 'Code', style: 'CODE' }
        ];

        const blockTypeButtons = [
            { value: '<h1>', block: 'header-one' }, { value: '<h2>', block: 'header-two' },
            { value: '<h3>', block: 'header-three' }, { value: 'Blockquote', block: 'blockquote' },
            { value: '<ul>', block: 'unordered-list-item' }, { value: '<ol>', block: 'ordered-list-item' }
        ];

        return (
            <div className="textBlock">
                <div className="inline-style-options">
                    Inline Styles:
          {inlineStyleButtons.map((button) => { return this.renderInlineStyleButton(button.value, button.style); })}
                </div>

                <div className="block-style-options">
                    Block Types:
          {blockTypeButtons.map((button) => { return this.renderBlockButton(button.value, button.block); })}
                </div>
                <div className="draft-editor-wrapper">
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={keyBindingFunction}
                    />
                </div>
                <button
                    onClick={e => this.props.setText(stateToHTML(this.state.editorState.getCurrentContent()))}
                >Add my message</button><br />

                <br /><br /><br />
            </div>
        );
    }
}

export default CreateMessage;

