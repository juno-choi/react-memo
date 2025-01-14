import MemoItem from './MemoItem';

export default function MemoList({ memos, setSelectedMemoIndex }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}
