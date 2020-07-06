import React from "react";
import AddCart from './calculator-add-cart'

import "@rmwc/data-table/styles";
import {
  SimpleDataTable,
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from "@rmwc/data-table";
import "@rmwc/checkbox/styles";
import { Checkbox } from "@rmwc/checkbox";
import { SimpleDialog } from "@rmwc/dialog";
import "@rmwc/dialog/styles";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from "@rmwc/dialog";
import "@rmwc/dialog/styles";
// import stcp from "styled-components"

const Cart = ({ searchResult, startDate, resultSave, setResultSave }) => {

  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [checked, setChecked] = React.useState({0:false});

  const checkedHandle = () => {
    setChecked({ ...checked })
  }

  const deleteButtonHandle = () => {
    for (let key in checked) {
      if (checked[key] === true) {
        setChecked({[key]:false})
        setResultSave(resultSave.filter((ele, idx) => ele.key !== key))
      }
    }
  }

  const confirmButtonHandle = () => {
    
  }

  // const DataTable = stcp(DataTableHead)`border: 1px solid black`;

  return (
    <div>
      <div>
        <DataTable className="cart-table" style={{ width: "800px" }}>
          <DataTableContent>
            <DataTableHead >
              <DataTableRow>
                <DataTableHeadCell hasFormControl></DataTableHeadCell>
                <DataTableHeadCell>Date</DataTableHeadCell>
                <DataTableHeadCell>Food Name</DataTableHeadCell>
                <DataTableHeadCell>Amout (per serving)</DataTableHeadCell>
                <DataTableHeadCell>Calorie (cal)</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              <AddCart
                checked={checked}
                checkedHandle={checkedHandle}
                searchResult={searchResult}
                startDate={startDate}
                resultSave={resultSave} />
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div className="total-calorie">
        <SimpleDataTable data={[["Total Calorie", "3000 kcal"]]} />
      </div>
      <div className="cart-button">
        <span>
          <Dialog
            open={deleteOpen}
            onClose={evt => {
              console.log(evt.detail.action);
              setDeleteOpen(false);
            }}
            onClosed={evt => console.log(evt.detail.action)}
          >
            <DialogTitle>Delete</DialogTitle>
            <DialogContent>Do you really want to delete the selected item(s)...? really...?</DialogContent>
            <DialogActions>
              <DialogButton action="close">Cancel</DialogButton>
              <DialogButton onClick={deleteButtonHandle} action="accept" isDefaultAction>
                Delete
      </DialogButton>
            </DialogActions>
          </Dialog>

          <Button raised onClick={() => setDeleteOpen(true)}>
            DELETE
  </Button>
        </span>
        <span>
          <Dialog
            open={confirmOpen}
            onClose={evt => {
              console.log(evt.detail.action);
              setConfirmOpen(false);
            }}
            onClosed={evt => console.log(evt.detail.action)}
          >
            <DialogTitle>Confirm</DialogTitle>
            <DialogContent>Do you really want to confirm the selected item(s)...? really...?</DialogContent>
            <DialogActions>
              <DialogButton action="close">Cancel</DialogButton>
              <DialogButton action="accept" isDefaultAction>
                Confirm
          </DialogButton>
            </DialogActions>
          </Dialog>

          <Button raised onClick={() => setConfirmOpen(true)}>
            CONFIRM
      </Button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
