export default function ErrorIndicator({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
