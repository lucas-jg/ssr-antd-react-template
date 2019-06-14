import React, { Component } from "react";
import PropTypes from "prop-types";
import { BlockPicker } from "react-color";
import icon from "../../../assets/color/color.png";

class ColorPic extends Component {
	static propTypes = {
		expanded: PropTypes.bool,
		onExpandEvent: PropTypes.func,
		onChange: PropTypes.func,
		currentState: PropTypes.object
	};

	stopPropagation = event => {
		event.stopPropagation();
	};

	onChange = color => {
		const { onChange } = this.props;
		onChange("color", color.hex);
	};

	renderModal = () => {
		const { color } = this.props.currentState;
		return (
			<div onClick={this.stopPropagation}>
				<BlockPicker color={color} onChangeComplete={this.onChange} />
			</div>
		);
	};

	render() {
		const { expanded, onExpandEvent } = this.props;
		return (
			<div aria-haspopup="true" aria-expanded={expanded} aria-label="rdw-color-picker">
				<div onClick={onExpandEvent}>
					<img src={icon} alt="" style={{ width: "20px", height: "20px" }} />
				</div>
				{expanded ? this.renderModal() : undefined}
			</div>
		);
	}
}

export default ColorPic;
