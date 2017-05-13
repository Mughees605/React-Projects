import React, {Component, PropTypes} from 'react'
import RichTextEditor from 'react-rte'
import './editor.scss'

class MyStatefulEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  state = {
    value: RichTextEditor.createEmptyValue(),
  }

  onChange = (value) => {
    this.setState({value})
    if (this.props.onChange) {
      this
        .props
        .onChange(value.toString('html'))
    }
  };

  render() {
    const toolbarConfig = {
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'same'},
        {label: 'Italic', style: 'ITALIC', className: 'same'},
        {label: 'Underline', style: 'UNDERLINE', className: 'same'},
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled', className: 'same'},
        {label: 'Heading Large', style: 'header-one', className: 'same'},
        {label: 'Heading Medium', style: 'header-two', className: 'same'},
        {label: 'Heading Small', style: 'header-three', className: 'same'},
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item', className: 'same'},
        {label: 'OL', style: 'ordered-list-item', className: 'same'},
      ],
    }
    return (<RichTextEditor
      toolbarConfig={toolbarConfig}
      value={this.state.value}
      onChange={this.onChange}/>)
  }
}
export default MyStatefulEditor
