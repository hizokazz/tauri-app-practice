export default function DefaultLayout({ children }) {
  return (
    <>
      <div style={{ position: 'sticky', top: 0, left: 0, right: 0, height: 70, background: 'white', zIndex: 10, boxShadow: '0 2px 10px rgba(71, 120, 120, 0.3)' }}>bbb</div>
      {children}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 70, background: 'white', zIndex: 10, boxShadow: '0 2px 10px rgba(71, 120, 120, 0.3)' }}>bbb</div>
    </>
  );
}