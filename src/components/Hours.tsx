import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parse opening hours
  const schedule = [
    { hours: "10:00 - 14:00; 16:00 - 21:30" }, // Monday
    { hours: "10:00 - 14:00; 16:00 - 21:30" }, // Tuesday
    { hours: "10:00 - 14:00; 16:00 - 21:30" }, // Wednesday
    { hours: "10:00 - 14:00; 16:00 - 21:30" }, // Thursday
    { hours: "10:00 - 14:00; 16:00 - 21:30" }, // Friday
    { hours: "10:30 - 21:30" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="hours" ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-lg"
        >
          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold">{t.hours.header}</span>
            </div>

            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === adjustedTodayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                      <div>
                        <span className={isToday ? "font-semibold text-primary" : "font-medium"}>
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="ml-3 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className={isClosed ? "text-muted-foreground" : "text-right font-medium"}>
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
