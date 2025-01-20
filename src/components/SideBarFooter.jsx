export default function SideBarFooter({ onClick }) {
  return (
    <div className="side-bar-footer">
      <button className="side-bar-footer__add-button" onClick={onClick}>
        +
      </button>
    </div>
  );
}
