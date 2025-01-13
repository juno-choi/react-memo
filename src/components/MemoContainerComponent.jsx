export default function MemoContainer() {
  return (
    <div className="MemoContainer">
      <div>
        <input type="text" className="MemoContainerTitle"></input>
      </div>
      <div>
        <textarea className="MemoContainerContent" />
      </div>
    </div>
  );
}
