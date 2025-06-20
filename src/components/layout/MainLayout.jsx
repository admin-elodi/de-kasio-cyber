// src/components/layout/MainLayout.jsx
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-secondary">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;