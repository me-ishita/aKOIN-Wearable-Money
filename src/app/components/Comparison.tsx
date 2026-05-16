import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Linked to Bank Account?",
    akoin: false,
    credit: true,
    phone: true,
  },
  {
    feature: "Requires Battery/Charging?",
    akoin: false,
    credit: false,
    phone: true,
  },
  {
    feature: "Requires Phone to Pay?",
    akoin: false,
    credit: false,
    phone: true,
  },
  {
    feature: "Waterproof?",
    akoin: true,
    credit: true,
    phone: false,
  },
  {
    feature: "Instantly Freeze/Limit?",
    akoin: true,
    credit: false,
    phone: true,
  },
  {
    feature: "Multi-Currency Support?",
    akoin: true,
    credit: false,
    phone: false,
  },
];

export function Comparison() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How {" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              aKOIN
            </span> Compares.
          </h2>
          <p className="text-xl text-muted-foreground">
            See why aKOIN is the superior payment solution
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="bg-gradient-to-br from-background via-background to-muted/30 border-2 border-border/50 rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm">
                <tr>
                  <th className="text-left p-6 font-semibold text-lg">Feature</th>
                  <th className="p-6 font-semibold text-lg">aKOIN</th>
                  <th className="p-6 font-semibold text-lg text-muted-foreground">
                    Credit/Debit
                  </th>
                  <th className="p-6 font-semibold text-lg text-muted-foreground">
                    Phone (UPI/NFC)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisons.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gradient-to-r hover:from-muted/30 hover:to-transparent transition-all duration-300"
                  >
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center">
                      {row.akoin ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 shadow-lg">
                          <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.credit ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          <Check className="w-5 h-5 text-muted-foreground" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.phone ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          <Check className="w-5 h-5 text-muted-foreground" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
