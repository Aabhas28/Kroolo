import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <div className="h-[60px] bg-black flex items-center justify-center">
      <div
        className="relative rounded-xl border border-white/10 p-2 flex items-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v1H0z' fill='rgba(255,255,255,0.05)'/%3E%3Cpath d='M0 0v40h1V0z' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="flex items-center justify-between space-x-4 w-full max-w-4xl">
          {/* Left Content */}
          <div>
            <h1 className="text-sm md:text-base font-bold text-white">Save $50,000 / year</h1>
            <p className="text-xs md:text-sm text-gray-400">
              For a company of 200 employees, Kroolo can save up to $50,000 per year.
            </p>
          </div>

          {/* Right Button */}
          <Button className="bg-gray-400/80 hover:bg-gray-400/90 text-black text-xs px-4 py-2 rounded-md">
            Pricing calculator
          </Button>
        </div>
      </div>
    </div>
  );
}

