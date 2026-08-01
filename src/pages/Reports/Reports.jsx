import styles from "./Reports.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, } from "recharts";
import { PieChart, Pie, Cell, Legend, } from "recharts";
import { BarChart, Bar, } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 52 },
  { month: "Feb", revenue: 61 },
  { month: "Mar", revenue: 68 },
  { month: "Apr", revenue: 75 },
  { month: "May", revenue: 82 },
  { month: "Jun", revenue: 96 },
  { month: "Jul", revenue: 108 },
];

const projectRevenue = [
  {
    project: "Metro Tower",
    revenue: 210,
  },
  {
    project: "Airport Expansion",
    revenue: 185,
  },
  {
    project: "City Mall",
    revenue: 142,
  },
  {
    project: "Highway Phase-II",
    revenue: 118,
  },
  {
    project: "Residential Complex",
    revenue: 94,
  },
];

const expenseData = [
  {
    name: "Machinery",
    value: 32,
  },
  {
    name: "Labour",
    value: 28,
  },
  {
    name: "Materials",
    value: 22,
  },
  {
    name: "Fuel",
    value: 10,
  },
  {
    name: "Misc",
    value: 8,
  },
];

const financeHealth = [
  {
    name: "Receivables",
    amount: 33,
  },
  {
    name: "Payables",
    amount: 14,
  },
];

const machineUtilisation = [
  {
    machine: "Excavators",
    utilisation: 88
  },
  {
    machine: "Cranes",
    utilisation: 72
  },
  {
    machine: "Concrete Mixers",
    utilisation: 94
  },
  {
    machine: "Dumpers",
    utilisation: 81
  }
];

const COLORS = [
  "#2563EB",
  "#16A34A",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

const recentActivities = [
  {
    id: 1,
    type: "success",
    title: "Invoice INV-101 Paid",
    description: "ABC Developers cleared ₹18,50,000.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Supplier Bill Approved",
    description: "BILL-034 approved for Metro Tower project.",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "info",
    title: "Vendor Payment Released",
    description: "₹8,50,000 transferred to Caterpillar India.",
    time: "Yesterday",
  },
  {
    id: 4,
    type: "danger",
    title: "Invoice Overdue",
    description: "INV-082 is overdue by 14 days.",
    time: "2 days ago",
  },
  {
    id: 5,
    type: "success",
    title: "Machine Rental Cleared",
    description: "Rental payment completed successfully.",
    time: "3 days ago",
  },
];

const reportAnalytics = [
  {
    title: "Total Revenue",
    value: "₹8.45 Cr",
    subtitle: "Across all active projects",
    color: "#16A34A",
    icon: AttachMoneyIcon,
  },
  {
    title: "Total Expenses",
    value: "₹5.92 Cr",
    subtitle: "Materials, Labour & Equipment",
    color: "#DC2626",
    icon: TrendingDownIcon,
  },
  {
    title: "Net Profit",
    value: "₹2.53 Cr",
    subtitle: "30% Profit Margin",
    color: "#2563EB",
    icon: TrendingUpIcon,
  },
  {
    title: "Collection Rate",
    value: "91%",
    subtitle: "Customer payment efficiency",
    color: "#F59E0B",
    icon: AccountBalanceWalletIcon,
  },
];

const topClients = [
  {
    id: 1,
    name: "ABC Developers",
    type: "Customer",
    revenue: "₹1.42 Cr",
    projects: 4,
    color: "#2563EB",
  },
  {
    id: 2,
    name: "Skyline Infra",
    type: "Customer",
    revenue: "₹98 L",
    projects: 3,
    color: "#16A34A",
  },
  {
    id: 3,
    name: "Green Homes",
    type: "Customer",
    revenue: "₹87 L",
    projects: 2,
    color: "#F59E0B",
  },
  {
    id: 4,
    name: "L&T Equipment",
    type: "Vendor",
    revenue: "₹62 L",
    projects: 5,
    color: "#EF4444",
  },
  {
    id: 5,
    name: "Caterpillar India",
    type: "Vendor",
    revenue: "₹55 L",
    projects: 4,
    color: "#8B5CF6",
  },
];

function Reports() {

  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>

        <div className={styles.heroContent}>
          <div>
            <button
              className={styles.backButton}
              onClick={() => navigate(-1)}>
              <ArrowBackIcon fontSize="small" />
              Back
            </button>

            <span className={styles.heroTag}>
              Analytics & Reports
            </span>

            <h1 className={styles.heroTitle}>
              Reports Dashboard
            </h1>

            <p className={styles.heroSubtitle}>
              Monitor project performance, financial health, revenue trends,
              operational efficiency, and business insights through
              interactive reports.
            </p>
          </div>

          <div className={styles.heroActions}>
            <button className={styles.secondaryButton}>
              <DownloadIcon />
              Export Report
            </button>

            <button className={styles.primaryButton}>
              <AssessmentIcon />
              Generate Report
            </button>
          </div>
        </div>
      </section>

      <section className={styles.analyticsSection}>

        {reportAnalytics.map((card) => {
          const Icon = card.icon;
          return (
            <div
              className={styles.analyticsCard}
              key={card.title}>

              <div
                className={styles.analyticsIcon}
                style={{
                  background: `${card.color}15`,
                  color: card.color,
                }}>
                <Icon fontSize="medium" />
              </div>

              <div className={styles.analyticsContent}>
                <span>{card.title}</span>
                <h2>{card.value}</h2>
                <p>{card.subtitle}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>
                Monthly Revenue Trend
              </h2>

              <p className={styles.chartSubtitle}>
                Revenue generated over the last seven months
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#2563EB"
                    stopOpacity={0.35} />

                  <stop
                    offset="95%"
                    stopColor="#2563EB"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#2563EB"
                fill="url(#revenue)"
                strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>
                Expense Breakdown
              </h2>

              <p className={styles.chartSubtitle}>
                Distribution of project expenses
              </p>
            </div>
          </div>

          <ResponsiveContainer
            width="100%"
            height={350}>
            <PieChart>
              <Pie
                data={expenseData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={3}>

                {expenseData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className={styles.fullWidthChart}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>
                Project-wise Revenue
              </h2>

              <p className={styles.chartSubtitle}>
                Revenue generated by each active construction project.
              </p>
            </div>
          </div>

          <ResponsiveContainer
            width="100%"
            height={350}>

            <BarChart
              data={projectRevenue}
              layout="vertical">

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number" />
              <YAxis
                type="category"
                dataKey="project"
                width={140} />
              <Tooltip />
              <Bar
                dataKey="revenue"
                fill="#2563EB"
                radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>
                Machine Utilisation
              </h2>

              <p className={styles.chartSubtitle}>
                Average utilisation across active equipment.
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={machineUtilisation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="machine" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="utilisation"
                fill="#F59E0B"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>
                Receivables vs Payables
              </h2>

              <p className={styles.chartSubtitle}>
                Outstanding customer collections compared to supplier obligations.
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financeHealth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="amount"
                fill="#8B5CF6"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className={styles.bottomGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>
                Recent Financial Activity
              </h2>
              <p className={styles.chartSubtitle}>
                Latest financial updates across invoices, bills and payments.
              </p>
            </div>
          </div>

          <div className={styles.activityList}>
            {recentActivities.map((activity) => (
              <div
                className={styles.activityItem}
                key={activity.id}>

                <div
                  className={`${styles.activityDot} ${styles[activity.type]}`}
                />

                <div className={styles.activityContent}>
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                </div>
                <span className={styles.activityTime}>
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>
                Top Customers & Vendors
              </h2>
              <p className={styles.chartSubtitle}>
                Highest business contributors this financial year.
              </p>
            </div>
          </div>

          <div className={styles.clientList}>
            {topClients.map((client, index) => (
              <div
                className={styles.clientItem}
                key={client.id}>
                <div
                  className={styles.clientAvatar}
                  style={{
                    background: client.color
                  }}>
                  {index + 1}
                </div>

                <div className={styles.clientInfo}>
                  <h4>{client.name}</h4>
                  <span>
                    {client.type} • {client.projects} Projects
                  </span>
                </div>
                <h3>{client.revenue}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Reports;
