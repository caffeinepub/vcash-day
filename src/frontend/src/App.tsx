import {
  ArrowRight,
  Bell,
  ChevronRight,
  CreditCard,
  Eye,
  EyeOff,
  Gift,
  Home,
  MessageSquare,
  MoreHorizontal,
  PiggyBank,
  Receipt,
  Send,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

type Screen = "splash" | "pin" | "dashboard";
const PIN_STORAGE_KEY = "vcashday_pin";
const PIN_DOTS = [0, 1, 2, 3];

// ─── Leaf Logo ────────────────────────────────────────────────────────────────
function LeafLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="VcashDay leaf logo"
    >
      <path
        d="M6 26C6 26 8 14 20 8C26 5 29 6 29 6C29 6 28 12 22 17C16 22 8 22 6 26Z"
        fill="oklch(var(--vcash-green))"
      />
      <path
        d="M6 26C10 20 16 18 22 14"
        stroke="oklch(var(--vcash-green-light))"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VcashLogo({ textSize = "text-xl" }: { textSize?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <LeafLogo size={26} />
      <span className={`font-bold text-vcash-green ${textSize} tracking-tight`}>
        VcashDay
      </span>
    </div>
  );
}

// ─── Splash Screen ────────────────────────────────────────────────────────────
function SplashScreen({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col min-h-screen bg-white relative overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-vcash-green-light opacity-40 translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 left-0 w-80 h-48 rounded-t-full bg-vcash-green-light opacity-30 -translate-x-10" />

      <header className="relative z-10 px-6 pt-12 pb-2">
        <VcashLogo textSize="text-2xl" />
      </header>

      <main className="relative z-10 flex flex-col flex-1 px-6 pt-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-4">
            Take Control of{" "}
            <span className="text-vcash-green">Your Money,</span> Every Day.
          </h1>
          <p className="text-muted-foreground text-base mb-8">
            Track, save, and send money with VcashDay — your personal finance
            companion.
          </p>
        </motion.div>

        {/* Phone mockup card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-vcash-green rounded-3xl p-5 mb-8 shadow-card relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white opacity-10 translate-x-8 -translate-y-8" />
          <p className="text-white text-xs font-medium opacity-80 mb-1">
            Total Balance
          </p>
          <p className="text-white text-3xl font-extrabold mb-3">₱12,500.00</p>
          <div className="flex gap-3">
            {["Money", "Save", "Send"].map((label) => (
              <div
                key={label}
                className="flex-1 bg-white bg-opacity-20 rounded-xl py-2 text-center"
              >
                <span className="text-white text-xs font-semibold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="flex flex-col gap-3 mb-8"
        >
          <button
            type="button"
            data-ocid="splash.primary_button"
            onClick={onGetStarted}
            className="w-full bg-vcash-green text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-card active:scale-[0.98] transition-transform"
          >
            Get Started <ArrowRight size={18} />
          </button>
          <button
            type="button"
            data-ocid="splash.secondary_button"
            className="w-full border-2 border-vcash-green text-vcash-green font-bold py-4 rounded-2xl active:scale-[0.98] transition-transform"
          >
            Download App
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col items-center gap-3 pb-8"
        >
          <p className="text-muted-foreground text-xs text-center">
            Trusted by <strong className="text-foreground">10,000+</strong>{" "}
            users worldwide
          </p>
          <div className="flex items-center gap-4">
            {["VISA", "GCash", "Globe"].map((brand) => (
              <div
                key={brand}
                className="bg-muted rounded-lg px-3 py-1.5 text-xs font-bold text-muted-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <Shield size={13} className="text-vcash-green" />
            <span className="text-xs text-muted-foreground">
              Bank-grade encryption
            </span>
            <Zap size={13} className="text-vcash-green ml-2" />
            <span className="text-xs text-muted-foreground">
              Instant transfers
            </span>
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 py-3 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-vcash-green font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </motion.div>
  );
}

// ─── PIN Screen ───────────────────────────────────────────────────────────────
const KEYPAD_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "clear",
  "0",
  "ok",
];

function PinScreen({ onSuccess }: { onSuccess: () => void }) {
  const storedPin = localStorage.getItem(PIN_STORAGE_KEY);
  const isCreating = !storedPin;
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [phase, setPhase] = useState<"enter" | "confirm">("enter");
  const [shaking, setShaking] = useState(false);
  const [error, setError] = useState("");

  const displayPin = phase === "confirm" ? confirmPin : pin;
  const title = isCreating
    ? phase === "enter"
      ? "Create Your PIN"
      : "Confirm Your PIN"
    : "Enter Your Passcode";

  const triggerShake = useCallback(() => {
    setShaking(true);
    setTimeout(() => setShaking(false), 450);
  }, []);

  const handleKey = useCallback(
    (key: string) => {
      if (key === "clear") {
        if (phase === "confirm") setConfirmPin("");
        else setPin("");
        setError("");
        return;
      }
      if (key === "ok") {
        const current = phase === "confirm" ? confirmPin : pin;
        if (current.length < 4) return;
        if (isCreating) {
          if (phase === "enter") {
            setPhase("confirm");
          } else {
            if (confirmPin === pin) {
              localStorage.setItem(PIN_STORAGE_KEY, pin);
              onSuccess();
            } else {
              setError("PINs don't match. Try again.");
              triggerShake();
              setConfirmPin("");
            }
          }
        } else {
          if (pin === storedPin) {
            onSuccess();
          } else {
            setError("Incorrect PIN. Try again.");
            triggerShake();
            setPin("");
          }
        }
        return;
      }
      // digit
      if (phase === "confirm") {
        if (confirmPin.length < 4) {
          const next = confirmPin + key;
          setConfirmPin(next);
          if (next.length === 4) {
            setTimeout(() => {
              if (next === pin) {
                localStorage.setItem(PIN_STORAGE_KEY, pin);
                onSuccess();
              } else {
                setError("PINs don't match. Try again.");
                triggerShake();
                setConfirmPin("");
              }
            }, 100);
          }
        }
      } else {
        if (pin.length < 4) {
          const next = pin + key;
          setPin(next);
          if (!isCreating && next.length === 4) {
            setTimeout(() => {
              if (next === storedPin) {
                onSuccess();
              } else {
                setError("Incorrect PIN. Try again.");
                triggerShake();
                setPin("");
              }
            }, 100);
          }
        }
      }
    },
    [pin, confirmPin, phase, isCreating, storedPin, onSuccess, triggerShake],
  );

  return (
    <motion.div
      key="pin"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col min-h-screen bg-white"
    >
      <header className="flex flex-col items-center pt-16 pb-8 px-6">
        <VcashLogo textSize="text-2xl" />
        <p className="text-muted-foreground text-sm mt-2">
          Your Daily Money Companion
        </p>
      </header>

      <main className="flex flex-col items-center flex-1 px-6">
        <h2 className="text-2xl font-extrabold text-foreground mb-2">
          {title}
        </h2>
        {isCreating && (
          <p className="text-sm text-muted-foreground mb-6 text-center">
            {phase === "enter"
              ? "Choose a 4-digit PIN to secure your account"
              : "Re-enter your PIN to confirm"}
          </p>
        )}
        {!isCreating && (
          <p className="text-sm text-muted-foreground mb-6">
            Enter your 4-digit PIN
          </p>
        )}

        {/* PIN dots */}
        <div
          className={`flex gap-4 mb-8 ${shaking ? "shake" : ""}`}
          data-ocid="pin.panel"
        >
          {PIN_DOTS.map((dotIndex) => (
            <div
              key={dotIndex}
              className={`w-5 h-5 rounded-full border-2 transition-all duration-150 ${
                dotIndex < displayPin.length
                  ? "bg-vcash-green border-vcash-green scale-110"
                  : "border-border bg-white"
              }`}
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <p
            data-ocid="pin.error_state"
            className="text-destructive text-sm mb-4 text-center font-medium"
          >
            {error}
          </p>
        )}

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
          {KEYPAD_KEYS.map((key) => {
            const isOk = key === "ok";
            const isClear = key === "clear";
            return (
              <button
                key={key}
                type="button"
                data-ocid={`pin.${isOk ? "confirm_button" : isClear ? "delete_button" : "button"}`}
                onClick={() => handleKey(key)}
                className={`h-16 rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-95 ${
                  isOk
                    ? "bg-vcash-green text-white shadow-card"
                    : isClear
                      ? "bg-muted text-muted-foreground text-sm"
                      : "bg-muted text-foreground hover:bg-vcash-green-light"
                }`}
              >
                {isOk ? "OK" : isClear ? "Clear" : key}
              </button>
            );
          })}
        </div>
      </main>
    </motion.div>
  );
}

// ─── Dashboard Screen ─────────────────────────────────────────────────────────
const mainActions = [
  {
    id: "money",
    icon: Wallet,
    label: "Money",
    color: "bg-vcash-green-light text-vcash-green",
  },
  {
    id: "savings-action",
    icon: PiggyBank,
    label: "Savings",
    color: "bg-vcash-green-light text-vcash-green",
  },
  {
    id: "load",
    icon: Smartphone,
    label: "Buy Load",
    color: "bg-vcash-green-light text-vcash-green",
  },
  {
    id: "send",
    icon: Send,
    label: "Send Money",
    color: "bg-vcash-green-light text-vcash-green",
  },
];

const quickActions = [
  {
    id: "bills",
    icon: Receipt,
    label: "Pay Bills",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    id: "txn",
    icon: TrendingUp,
    label: "Transaction",
    color: "bg-vcash-green-light text-vcash-green",
  },
  {
    id: "rewards-action",
    icon: Gift,
    label: "Rewards",
    color: "bg-amber-50 text-amber-500",
  },
  {
    id: "more-action",
    icon: MoreHorizontal,
    label: "More",
    color: "bg-purple-50 text-purple-500",
  },
];

const transactions = [
  {
    id: 1,
    title: "Jollibee Order",
    date: "Today, 10:32 AM",
    amount: -248,
    icon: "🍔",
  },
  {
    id: 2,
    title: "Load – 09171234567",
    date: "Today, 09:15 AM",
    amount: -100,
    icon: "📱",
  },
  {
    id: 3,
    title: "Transfer from Maria",
    date: "Yesterday",
    amount: 500,
    icon: "💸",
  },
  { id: 4, title: "Shopee Payment", date: "Mar 27", amount: -1350, icon: "🛍️" },
  { id: 5, title: "Salary Deposit", date: "Mar 25", amount: 5000, icon: "💼" },
];

const navTabs = [
  { id: "home", icon: Home, label: "Home" },
  { id: "savings", icon: PiggyBank, label: "Savings" },
  { id: "card", icon: CreditCard, label: "Card" },
  { id: "rewards", icon: Star, label: "Rewards" },
  { id: "more", icon: MoreHorizontal, label: "More" },
];

function DashboardScreen() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <motion.div
      key="dashboard"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col min-h-screen bg-background"
    >
      {/* Green Header */}
      <header className="bg-vcash-green px-5 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white opacity-10 translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white opacity-5 -translate-x-10 translate-y-10" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-white text-sm opacity-80">Good morning 👋</p>
            <h1 className="text-white text-2xl font-extrabold">Hello, Ken!</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="dashboard.secondary_button"
              className="relative"
            >
              <Bell size={22} className="text-white" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full" />
            </button>
            <button type="button" data-ocid="dashboard.button">
              <MessageSquare size={22} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto -mt-10 px-4 pb-24 space-y-4">
        {/* Balance Card */}
        <div
          data-ocid="dashboard.card"
          className="bg-white rounded-3xl p-5 shadow-card"
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-muted-foreground text-xs font-medium">
              Today's Money Left
            </p>
            <button
              type="button"
              data-ocid="dashboard.toggle"
              onClick={() => setBalanceVisible((v) => !v)}
              className="text-muted-foreground"
            >
              {balanceVisible ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-4xl font-extrabold text-foreground">
              {balanceVisible ? "₱1,250" : "₱ ••••"}
            </p>
            <span className="text-xs text-vcash-green bg-vcash-green-light px-2 py-1 rounded-full font-semibold">
              +₱500 today
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Available Balance
          </p>
        </div>

        {/* Main Actions */}
        <div
          data-ocid="dashboard.section"
          className="bg-white rounded-3xl p-4 shadow-card"
        >
          <div className="grid grid-cols-4 gap-2">
            {mainActions.map((action) => (
              <button
                key={action.id}
                type="button"
                data-ocid={`dashboard.${action.id}.button`}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${action.color}`}
                >
                  <action.icon size={22} />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-foreground">Quick Actions</h3>
            <button
              type="button"
              className="text-vcash-green text-xs font-semibold flex items-center gap-0.5"
            >
              See all <ChevronRight size={12} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((action) => (
              <button
                key={action.id}
                type="button"
                data-ocid={`dashboard.${action.id}.button`}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${action.color}`}
                >
                  <action.icon size={20} />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="bg-white rounded-3xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-foreground">Insights</h3>
            <span className="text-xs text-muted-foreground">This Week</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-foreground font-medium">
              This Week's Spending
            </p>
            <p className="text-sm font-bold text-foreground">₱2,600</p>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5 mb-2">
            <div
              className="bg-vcash-green h-2.5 rounded-full"
              style={{ width: "52%" }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            52% of monthly budget used
          </p>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-3xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-foreground">
              Recent Transactions
            </h3>
            <button
              type="button"
              className="text-vcash-green text-xs font-semibold flex items-center gap-0.5"
            >
              See all <ChevronRight size={12} />
            </button>
          </div>
          <div className="space-y-3" data-ocid="dashboard.list">
            {transactions.map((txn, i) => (
              <div
                key={txn.id}
                data-ocid={`dashboard.item.${i + 1}`}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center text-lg flex-shrink-0">
                  {txn.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {txn.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{txn.date}</p>
                </div>
                <p
                  className={`text-sm font-bold flex-shrink-0 ${txn.amount > 0 ? "text-vcash-green" : "text-foreground"}`}
                >
                  {txn.amount > 0 ? "+" : ""}₱
                  {Math.abs(txn.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-4 py-2 flex justify-around"
        data-ocid="dashboard.panel"
      >
        {navTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            data-ocid={`dashboard.${tab.id}.tab`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
              activeTab === tab.id
                ? "text-vcash-green"
                : "text-muted-foreground"
            }`}
          >
            <tab.icon size={20} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");

  return (
    <div className="min-h-screen bg-muted flex items-start justify-center">
      <div className="w-full max-w-sm relative overflow-hidden min-h-screen bg-white shadow-2xl">
        <AnimatePresence mode="wait">
          {screen === "splash" && (
            <SplashScreen key="splash" onGetStarted={() => setScreen("pin")} />
          )}
          {screen === "pin" && (
            <PinScreen key="pin" onSuccess={() => setScreen("dashboard")} />
          )}
          {screen === "dashboard" && <DashboardScreen key="dashboard" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
