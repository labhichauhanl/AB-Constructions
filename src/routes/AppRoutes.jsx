import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Projects from "../pages/Projects/Projects";
import Requirements from "../pages/Requirements/Requirements";
import Quotations from "../pages/Quotations/Quotations";
import Jobs from "../pages/Jobs/Jobs";
import Invoices from "../pages/Invoices/Invoices";
import Reports from "../pages/Reports/Reports";
import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";
import Signup from "../pages/Signup/Signup";
import DashboardLayout from "../layouts/DashboardLayout";
import Machines from "../pages/Machines/Machines";
import MachineAvailability from "../pages/MachineAvailability/MachineAvailability";
import MachineUtilisation from "../pages/MachineUtilisation/MachineUtilisation";
import RequirementDetails from "../pages/Requirements/RequirementDetails";

import ProtectedRoute from "../routes/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Projects />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/requirements"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Requirements />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/quotations"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Quotations />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Jobs />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/machines"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Machines />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/machine-availability"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MachineAvailability />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/machine-utilisation"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MachineUtilisation />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoices"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Invoices />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Reports />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Users />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <Signup />
          }
        />

        <Route
          path="/requirements/:id"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <RequirementDetails />
              </ DashboardLayout >
            </ ProtectedRoute >
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;