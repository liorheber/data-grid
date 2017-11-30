import React from "react";
import {Cell} from "fixed-data-table-2";

import Sort from "../buttons/sort";

import styles from "./header.scss";

export default ({headerName}) => (
	<Cell>
		<div className={styles.header}>
			{headerName}
			<Sort
				direction={"asc"}
				isSorted={false}
				className={styles.button}
			/>
		</div>
	</Cell>
);