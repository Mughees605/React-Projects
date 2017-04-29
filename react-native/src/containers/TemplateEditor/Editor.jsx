import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

class MyStatefulEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string. This is here
      // to demonstrate using `.toString()` but in a real app it would be better to
      // avoid generating a string on each change.
      this
        .props
        .onChange(value.toString('html'));
    }
  };

  render() {
    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: [
        'INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'
      ],
      INLINE_STYLE_BUTTONS: [
        {
          label: 'Bold',
          style: 'BOLD',
          className: 'custom-css-class'
        }, {
          label: 'Italic',
          style: 'ITALIC'
        }, {
          label: 'Underline',
          style: 'UNDERLINE'
        },
        {
          label:"Strikethrough",
          style:"strike-through"
        }
      ],
      BLOCK_TYPE_BUTTONS: [
        {
          label: 'UL',
          style: 'unordered-list-item'
        }, {
          label: 'OL',
          style: 'ordered-list-item'
        }
      ]
    };
    return (<RichTextEditor toolbarConfig={toolbarConfig} value={this.state.value} onChange={this.onChange}/>);
  }
}
export default MyStatefulEditor;