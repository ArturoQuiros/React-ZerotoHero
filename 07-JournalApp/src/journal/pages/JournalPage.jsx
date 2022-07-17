import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

export const JournalPage = () => {
  //redux hook
  const dispatch = useDispatch();
  //creating new notes
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {/*<Typography>HOLA</Typography>*/}
      {<NothingSelectedView />}
      {/*<NoteView />*/}
      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 36 }} />
      </IconButton>
    </JournalLayout>
  );
};
