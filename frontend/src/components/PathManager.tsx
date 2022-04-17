import "../styles/PathManager.css";

export default function PathManager() {
  const permissions = "-rw-r--r--";
  const bytes = 1000;
  const age = "1 day old";
  const type = "unknown type";
  return (
    <div className="path-manager">
      <p>Fsn: a 3D File System Navigator</p>
      <input type="text" />
      <p>{`${permissions} ${bytes} bytes, ${age}, ${type}`}</p>
    </div>
  );
}
