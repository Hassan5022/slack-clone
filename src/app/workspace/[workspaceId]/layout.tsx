"use client";

import Tootlbar from "./Tootlbar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <Tootlbar />
      {children}
    </div>
  );
};

export default WorkspaceIdLayout;
