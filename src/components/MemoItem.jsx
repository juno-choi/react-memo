export default function MemoItem({ children, onClick }) {
  return <div onClick={onClick}>{children}</div>;
}
