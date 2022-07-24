import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeleteEvent, hasEventSelected } = useCalendarStore();
  const handleDelete = () => {
    startDeleteEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      style={{ display: hasEventSelected ? "" : "none" }}
      onClick={handleDelete}
    >
      <i className=" fas fa-trash-alt"></i>
    </button>
  );
};
