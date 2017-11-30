import React from "react";
import classnames from "classnames"
import {Cell} from "fixed-data-table-2";
import TextRenderer from "../renderers/text/text_render"
import ChannelRenderer from "../renderers/channel/channel_render"
import ImageRenderer from "../renderers/image/image_render"

import styles from "./cell.scss";


const columns = {
	TEXT: TextRenderer,
	CHANNEL: ChannelRenderer,
	IMAGE: ImageRenderer,
};

const getRendererByType = (type) => columns[type] || columns["TEXT"];


export default ({data, rowIndex, columnKey, type, onClick, selection, ...props}) => {
	const Renderer = getRendererByType(type);
	const isSelected = selection.includes(rowIndex);
	return (
		<Cell className={classnames(styles.cell, {[styles.selected]: isSelected})}
					onClick={() => onClick(rowIndex)}>
				<Renderer value={data[rowIndex][columnKey]} />
		</Cell>
	);
}