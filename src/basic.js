import { LightningElement, track } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC,
    EXAMPLES_DATA_BASIC,
} from './sampleData';

export default class TreeGridBasic extends LightningElement {
    // definition of columns for the tree grid
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;

    // data provided to the tree grid
    @track gridData = EXAMPLES_DATA_BASIC;


    handleRowAction(e) {
        this.gridData = JSON.parse(JSON.stringify(this.parseRows(this.gridData, e.detail.row.name)));
    }

    parseRows(data, name) {
        data.forEach(row => {
            if(row.hasOwnProperty('_children')) {
                this.parseRows(row._children, name);
            }
            if(!row.selectable) return;
            if(!row.hasOwnProperty('name')) return;
            
            if(row.name != name || row.selected) {
                this.resetRow(row); 
            } else if (row.name === name) {
                this.selectRow(row);
            }
        });
        return data;
    }


    resetRow(row) {
        row.selected = false;
        row.selection_icon = "utility:routing_offline";
    }


    selectRow(row) {
        row.selected = true;
        row.selection_icon = "utility:choice";
    }
}
