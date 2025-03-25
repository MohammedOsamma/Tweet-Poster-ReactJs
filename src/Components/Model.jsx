import classes from "./Model.module.css";
const Model = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Model;
