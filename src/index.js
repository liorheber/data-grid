import React, {PureComponent} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

import {Table, Column} from "fixed-data-table-2";
import Header from "./header/header";
import Cell from "./cell/cell";

import reducers from "./reducers/reducers";

import styles from "./table.scss";

import initRows from "./rows";
import initColumns from "./columns";

class App extends PureComponent {
	constructor() {
		super();
		this.selectRow = this.selectRow.bind(this);
		this.onColumnResizeEndCallback = this.onColumnResizeEndCallback.bind(this);
		this.onColumnReorderEndCallback = this.onColumnReorderEndCallback.bind(this);
		this.store = createStore(reducers, applyMiddleware());
		this.state = {
			columns: initColumns,
			rows: initRows,
			selection: []
		}
	}

	selectRow(index) {
		const {selection} = this.state;
		if (selection.includes(index)) {
			this.setState({selection: selection.filter(id => id !== index)});
		} else {
			this.setState({selection: [index].concat(selection)});
		}

	}

	onColumnReorderEndCallback(event) {
		//Todo
		console.log(event);
	}

	onColumnResizeEndCallback(newColumnWidth, columnKey) {
		const columns = Object.assign([], this.state.columns);
		const column = columns.find(column => columnKey === column.columnId);
		column.width = newColumnWidth;
		this.setState({columns});
	}

	render() {
		const {columns, rows, selection} = this.state;
		const rowHeight = 72;
		const width = document.body.clientWidth;
		const height = 800;
		return (
				<Provider store={this.store}>
					<div className={styles.table}>
						<Table
							rowHeight={rowHeight}
							rowsCount={rows.length}
							width={width}
							height={height}
							isColumnResizing={false}
							onColumnResizeEndCallback={this.onColumnResizeEndCallback}
							onColumnReorderEndCallback={this.onColumnReorderEndCallback}
							isColumnReordering={false}
							headerHeight={52}>
							{columns.map((column, index) => (
								<Column key={index}
												header={<Header {...column}/>}
												columnKey={column.columnId}
												cell={
													<Cell data={rows}
																type={column.type}
																onClick={this.selectRow}
																selection={selection}/>
												}
												width={column.width}
												isResizable={true}
												isReorderable={true}
												fixed={column.sticky}/>
							))}
						</Table>
					</div>
				</Provider>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector(".app-container"));
