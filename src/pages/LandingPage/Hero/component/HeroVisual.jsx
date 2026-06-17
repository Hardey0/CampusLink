import { FloatCard, CardIcon } from "./FloatCard";
import { Button } from "../../../../components/UI";
import { AppIcon } from "../../../../components/icons";

const stats = [
  { num: "12", label: "Listings" },
  { num: "48", label: "Orders" },
  {
    num: (
      <div className="flex items-center gap-1">
        4.9
        <AppIcon name="star" className="w-5 h-5 fill-yellow-400" />
      </div>
    ),
    label: "Rating",
  },
];

export function HeroVisual() {
  return (
    <div className="animate-fade-up delay-300 hidden lg:grid absolute right-15 top-1/2 -translate-y-1/2 z-10 grid-cols-2 gap-3.5 w-[420px]">

      {/* ── Wallet card ───────────────────────────── */}
      <FloatCard className="col-span-2 p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="font-heading">
            <p className="text-[12px] font-semibold text-muted uppercase tracking-widest mb-0.5">
              Wallet Balance
            </p>
            <p className="text-[28px] font-bold text-primary-navy leading-none">
              ₦24,500
            </p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center text-[22px]">
            <AppIcon name="creditCard" className="w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-4">
          {stats.map(({ num, label }) => (
            <div key={label} className="flex-1">
              <div className="font-heading text-xl font-semibold text-primary-navy">{num}</div>
              <p className="text-[11px] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </FloatCard>

      {/* ── Resources card ────────────────────────── */}
      <FloatCard className="p-5">
        <CardIcon bg="bg-primary-soft">
          <AppIcon name="book" className="w-5 h-5" />
        </CardIcon>
        <h4 className="font-heading text-[13px] font-bold text-primary-navy mb-1">CSC301 Resources</h4>
        <p className="text-[12px] text-muted leading-relaxed">
          Data Structures - 300L notes unlocked
        </p>
      </FloatCard>

      {/* ── Tutor card ────────────────────────────── */}
      <FloatCard className="p-5">
        <CardIcon bg="bg-accent-soft">
          <AppIcon name="graduationCap" className="w-5 h-5" />
        </CardIcon>
        <h4 className="font-heading text-[13px] font-bold text-primary-navy mb-1">Tutor Booked</h4>
        <p className="text-[12px] text-muted leading-relaxed">
          Session at 4PM today with Tunde A.
        </p>
      </FloatCard>

      {/* ── Marketplace card ──────────────────────── */}
      <FloatCard className="col-span-2 flex items-center gap-3.5 px-5 py-4">
        <span className="text-[28px]">
          <AppIcon name="shoppingBag" className="w-5 h-5" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-heading text-[13px] font-bold text-primary-navy truncate">
            Lenovo ThinkPad E14
          </p>
          <p className="text-[12px] text-muted">University of Lagos · ₦320,000</p>
        </div>
        <Button variant="primary" size="sm" className="text-[12px] font-semibold rounded-md whitespace-nowrap transition-colors duration-200">
          Add to Cart
        </Button>
      </FloatCard>

    </div>
  );
}
