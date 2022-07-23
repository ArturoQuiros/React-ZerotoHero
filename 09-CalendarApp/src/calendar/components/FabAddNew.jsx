import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  //open modal
  const { openModal } = useUiStore();
  //set active
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgcolor: "fafafa",
      user: {
        _id: "123",
        name: "Arturo",
      },
    });
    openModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className=" fas fa-plus"></i>
    </button>
  );
};
